import { useEffect, useMemo, useRef, useState, Suspense, type RefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, Lightformer, RoundedBox, MeshTransmissionMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { makeChatTexture, makeLabelTexture, makeGlowTexture } from '../three/textures'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* shared scroll progress (0..1), smoothed in the Rig */
const scrollState = { current: 0 }
/* shared, normalised pointer position (-1..1) for parallax + mouse-look */
const pointerState = { x: 0, y: 0 }

/* shared glass look — physical transmission on desktop, cheap translucent on mobile */
function GlassMaterial({ color = '#ffffff', opacity = 0.55 }: { color?: string; opacity?: number }) {
  if (isMobile) {
    return (
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        metalness={0.3}
        roughness={0.25}
        envMapIntensity={0.8}
      />
    )
  }
  return (
    <meshPhysicalMaterial
      transmission={0.6}
      thickness={0.5}
      roughness={0.18}
      ior={1.3}
      metalness={0.1}
      transparent
      opacity={opacity}
      color={color}
      envMapIntensity={1.2}
    />
  )
}

/* ----------------------------- particle tunnel ----------------------------- */
function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null)
  const tex = useMemo(() => makeGlowTexture(), [])

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const a = new THREE.Color('#7C3AED')
    const b = new THREE.Color('#3B82F6')
    const tmp = new THREE.Color()
    for (let i = 0; i < count; i++) {
      // distribute in a long tube along -z so we fly through it
      const radius = 4 + Math.random() * 12
      const angle = Math.random() * Math.PI * 2
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.7
      positions[i * 3 + 2] = 10 - Math.random() * 44
      tmp.copy(a).lerp(b, Math.random())
      colors[i * 3] = tmp.r
      colors[i * 3 + 1] = tmp.g
      colors[i * 3 + 2] = tmp.b
    }
    return { positions, colors }
  }, [count])

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.015
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.16 : 0.13}
        sizeAttenuation
        vertexColors
        map={tex}
        alphaMap={tex}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/* ------------------------------- glass phone ------------------------------- */
function Phone({ groupRef }: { groupRef: RefObject<THREE.Group> }) {
  const chat = useMemo(() => makeChatTexture(), [])
  const innerRef = useRef<THREE.Group>(null)
  const intro = useRef(0)

  // cinematic scale-in on load
  useFrame((_, dt) => {
    if (!innerRef.current) return
    intro.current = Math.min(1, intro.current + dt / 1.3)
    const e = 1 - Math.pow(1 - intro.current, 3) // easeOutCubic
    innerRef.current.scale.setScalar(0.82 + 0.18 * e)
  })

  return (
    <group ref={groupRef} position={[1.8, -0.2, 0]}>
      <Float speed={reduceMotion ? 0 : 1.3} rotationIntensity={0.25} floatIntensity={0.6}>
        <group ref={innerRef}>
        {/* glass body */}
        <RoundedBox args={[2, 4.1, 0.24]} radius={0.22} smoothness={5}>
          {isMobile ? (
            <meshStandardMaterial
              color="#b9a6ff"
              transparent
              opacity={0.55}
              metalness={0.3}
              roughness={0.2}
              envMapIntensity={0.8}
            />
          ) : (
            <MeshTransmissionMaterial
              thickness={0.6}
              roughness={0.1}
              transmission={1}
              ior={1.45}
              chromaticAberration={0.05}
              anisotropy={0.3}
              distortion={0.15}
              distortionScale={0.3}
              backside
              color="#b9a6ff"
            />
          )}
        </RoundedBox>

        {/* screen — transparent so rounded corners blend into the glass body */}
        <mesh position={[0, 0, 0.135]}>
          <planeGeometry args={[1.78, 3.86]} />
          <meshBasicMaterial map={chat} toneMapped={false} transparent />
        </mesh>
        </group>
      </Float>
    </group>
  )
}

/* ----------------------- floating service logo badges ---------------------- */
function IconBadge({
  src,
  position,
}: {
  src: string
  position: [number, number, number]
}) {
  const [tex, setTex] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    let active = true
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      if (!active) return
      const size = 256
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(img, 0, 0, size, size)

      // knock out white/near-white backgrounds (e.g. JPEG logos) -> transparent
      try {
        const data = ctx.getImageData(0, 0, size, size)
        const px = data.data
        for (let i = 0; i < px.length; i += 4) {
          const m = Math.min(px[i], px[i + 1], px[i + 2])
          if (m > 240) px[i + 3] = 0
          else if (m > 215) px[i + 3] = Math.round(px[i + 3] * ((240 - m) / 25))
        }
        ctx.putImageData(data, 0, 0)
      } catch {
        /* cross-origin canvas would taint getImageData; local files are fine */
      }

      const t = new THREE.CanvasTexture(canvas)
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = 4
      t.needsUpdate = true
      setTex(t)
    }
    img.onerror = () => {
      /* file not present yet — badge simply stays empty, scene keeps working */
    }
    img.src = src
    return () => {
      active = false
    }
  }, [src])

  return (
    <Float speed={reduceMotion ? 0 : 1.2} rotationIntensity={0.5} floatIntensity={0.9}>
      <group position={position} scale={isMobile ? 0.7 : 1}>
        {/* glass badge */}
        <RoundedBox args={[1.05, 1.05, 0.16]} radius={0.28} smoothness={4}>
          <GlassMaterial color="#ffffff" opacity={0.6} />
        </RoundedBox>

        {/* logo */}
        {tex && (
          <mesh position={[0, 0, 0.1]}>
            <planeGeometry args={[0.64, 0.64]} />
            <meshBasicMaterial map={tex} transparent toneMapped={false} />
          </mesh>
        )}
      </group>
    </Float>
  )
}

const SERVICE_ICONS: { src: string; pos: [number, number, number] }[] = [
  { src: '/icons/whatsapp.svg', pos: isMobile ? [1.4, 2.5, 0.6] : [3.5, 1.7, 0.6] },
  { src: '/icons/meta.svg', pos: isMobile ? [1.6, 1.1, 0.5] : [4.0, -0.3, 0.5] },
  { src: '/icons/google-business.png', pos: isMobile ? [1.3, -0.3, 0.6] : [2.5, -2.3, 0.7] },
]

function ServiceIcons({ groupRef }: { groupRef: RefObject<THREE.Group> }) {
  return (
    <group ref={groupRef}>
      {SERVICE_ICONS.map((ic) => (
        <IconBadge key={ic.src} src={ic.src} position={ic.pos} />
      ))}
    </group>
  )
}

/* --------------------------- floating stat shards -------------------------- */
const SHARD_META: { value: string; title: string; accent: string; y: number }[] = [
  { value: '+34%', title: 'Conversions', accent: '#34D399', y: 0.8 },
  { value: '500K+', title: 'Messages Sent', accent: '#60A5FA', y: -1.6 },
  { value: '98%', title: 'Satisfaction', accent: '#A78BFA', y: 1.4 },
  { value: '100+', title: 'Businesses', accent: '#FBBF24', y: -1.0 },
]

// the service icons own the hero; the stat shards are the scroll-journey layer,
// so they sit further back/out and reveal as you scroll (no overlap with badges)
const SHARD_X = isMobile ? 1.7 : 5
const SHARD_Z0 = isMobile ? -5 : -7
const SHARD_STEP = isMobile ? -4.5 : -5
const SHARD_SCALE = isMobile ? 0.72 : 1

const SHARDS = SHARD_META.map((m, i) => ({
  value: m.value,
  title: m.title,
  accent: m.accent,
  pos: [SHARD_X, m.y, SHARD_Z0 + i * SHARD_STEP] as [number, number, number],
  rot: [0, -0.45, -0.04] as [number, number, number],
}))

function Shard({ data }: { data: (typeof SHARDS)[number] }) {
  const label = useMemo(() => makeLabelTexture(data.value, data.title, data.accent), [data])
  return (
    <Float speed={reduceMotion ? 0 : 1} rotationIntensity={0.35} floatIntensity={0.7}>
      <group position={data.pos} rotation={data.rot} scale={SHARD_SCALE}>
        <RoundedBox args={[3, 1.7, 0.1]} radius={0.12} smoothness={4}>
          <GlassMaterial color="#cbb6ff" opacity={0.55} />
        </RoundedBox>
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[2.9, 1.55]} />
          <meshBasicMaterial map={label} transparent toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

/* ------------------------------- growth core ------------------------------- */
function Core() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (ref.current && !reduceMotion) {
      ref.current.rotation.y += dt * 0.3
      ref.current.rotation.x += dt * 0.1
    }
  })
  return (
    <group ref={ref} position={[0, 0, -24]}>
      <mesh>
        <icosahedronGeometry args={[2.6, 2]} />
        <meshBasicMaterial color="#8b5cf6" wireframe toneMapped={false} />
      </mesh>
      <mesh scale={0.6}>
        <icosahedronGeometry args={[2.6, 1]} />
        <meshBasicMaterial color="#3B82F6" toneMapped={false} transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

/* ------------------------- camera + scroll director ------------------------ */
function Rig({
  phoneRef,
  iconsRef,
}: {
  phoneRef: RefObject<THREE.Group>
  iconsRef: RefObject<THREE.Group>
}) {
  const intro = useRef(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointerState.x = (e.clientX / window.innerWidth) * 2 - 1
      pointerState.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state, dt) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const target = max > 0 ? window.scrollY / max : 0
    scrollState.current += (target - scrollState.current) * 0.08
    const p = scrollState.current

    // cinematic push-in on load
    intro.current = Math.min(1, intro.current + dt / 1.6)
    const introEase = 1 - Math.pow(1 - intro.current, 3)

    const cam = state.camera
    const mx = reduceMotion ? 0 : pointerState.x
    const my = reduceMotion ? 0 : pointerState.y

    // fly forward through the tunnel as the user scrolls
    cam.position.z = THREE.MathUtils.lerp(8, -21, p) + mx * 0.4 + (1 - introEase) * 3
    cam.position.x = mx * 0.7
    cam.position.y = -my * 0.5 + Math.sin(p * Math.PI) * 0.6
    cam.lookAt(mx * 0.5, -my * 0.3, cam.position.z - 6)

    if (phoneRef.current) {
      phoneRef.current.visible = p < 0.32
      // scroll-reveal spin + damped mouse-look so it turns toward the cursor
      const targetRotY = p * 5 + mx * 0.4
      const targetRotX = -my * 0.2
      phoneRef.current.rotation.y += (targetRotY - phoneRef.current.rotation.y) * 0.08
      phoneRef.current.rotation.x += (targetRotX - phoneRef.current.rotation.x) * 0.08
    }

    if (iconsRef.current) {
      // visible only around the hero, with a gentle parallax sway
      iconsRef.current.visible = p < 0.4
      const targetRotY = mx * 0.25
      iconsRef.current.rotation.y += (targetRotY - iconsRef.current.rotation.y) * 0.05
    }
  })

  return null
}

/* --------------------------------- scene ---------------------------------- */
function Scene() {
  const phoneRef = useRef<THREE.Group>(null)
  const iconsRef = useRef<THREE.Group>(null)
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      <directionalLight position={[-5, -2, 2]} intensity={0.5} color="#7C3AED" />
      {/* rim light for that glossy product-shot edge */}
      <directionalLight position={[-4, 3, -6]} intensity={1.6} color="#A78BFA" />
      <spotLight position={[0, 8, 6]} angle={0.4} penumbra={1} intensity={1.2} color="#60A5FA" />

      <Particles count={isMobile ? 1800 : 5000} />
      <Phone groupRef={phoneRef} />
      <ServiceIcons groupRef={iconsRef} />
      {SHARDS.map((s, i) => (
        <Shard key={i} data={s} />
      ))}
      <Core />

      {/* procedural studio environment for glass reflections — no network fetch */}
      <Environment resolution={isMobile ? 128 : 256}>
        <Lightformer intensity={1.3} position={[0, 3, 4]} scale={[10, 6, 1]} color="#ffffff" />
        <Lightformer intensity={0.7} position={[-5, -1, 2]} scale={[6, 6, 1]} color="#7C3AED" />
        <Lightformer intensity={0.6} position={[5, 1, -3]} scale={[6, 6, 1]} color="#3B82F6" />
      </Environment>
      <Rig phoneRef={phoneRef} iconsRef={iconsRef} />

      {!isMobile && (
        <EffectComposer enableNormalPass={false}>
          <Bloom intensity={0.9} luminanceThreshold={0.25} luminanceSmoothing={0.4} mipmapBlur />
        </EffectComposer>
      )}
    </>
  )
}

export default function JourneyScene() {
  // pause the render loop when the tab is hidden to save CPU/battery
  const [running, setRunning] = useState(!(typeof document !== 'undefined' && document.hidden))

  useEffect(() => {
    const onVis = () => setRunning(!document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        frameloop={running ? 'always' : 'never'}
        dpr={isMobile ? [1, 1.5] : [1, 1.8]}
        camera={{ position: [0, 0, 8], fov: 42 }}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
