import * as THREE from 'three'

/* ---------- helpers ---------- */
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function makeCanvas(w: number, h: number) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  return { c, ctx: c.getContext('2d')! }
}

function toTexture(c: HTMLCanvasElement) {
  const t = new THREE.CanvasTexture(c)
  t.anisotropy = 4
  t.colorSpace = THREE.SRGBColorSpace
  t.needsUpdate = true
  return t
}

/* ---------- WhatsApp chat screen ---------- */
export function makeChatTexture(): THREE.CanvasTexture {
  const W = 540
  const H = 1100
  const { c, ctx } = makeCanvas(W, H)

  // screen background
  ctx.fillStyle = '#0b0b16'
  roundRect(ctx, 0, 0, W, H, 40)
  ctx.fill()

  // status bar
  ctx.fillStyle = 'rgba(255,255,255,0.45)'
  ctx.font = '600 24px Inter, sans-serif'
  ctx.textBaseline = 'middle'
  ctx.fillText('9:41', 34, 48)
  ctx.textAlign = 'right'
  ctx.fillText('● ● ●', W - 34, 48)
  ctx.textAlign = 'left'

  // header
  ctx.fillStyle = '#141425'
  roundRect(ctx, 24, 84, W - 48, 96, 24)
  ctx.fill()
  ctx.fillStyle = '#25D366'
  ctx.beginPath()
  ctx.arc(78, 132, 26, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#0b0b16'
  ctx.font = '700 26px Inter, sans-serif'
  ctx.fillText('✓', 68, 134)
  ctx.fillStyle = '#ffffff'
  ctx.font = '700 28px Inter, sans-serif'
  ctx.fillText('Tuskr Black', 120, 120)
  ctx.fillStyle = '#25D366'
  ctx.font = '500 20px Inter, sans-serif'
  ctx.fillText('● online', 120, 152)

  // messages
  const messages: { who: 'bot' | 'user'; lines: string[] }[] = [
    { who: 'bot', lines: ['Hi! Welcome to', 'Tuskr Black 👋'] },
    { who: 'user', lines: ['What services do', 'you offer?'] },
    {
      who: 'bot',
      lines: ['📲 WhatsApp automation', '📈 Meta Ads', '⭐ Google Profile optimization'],
    },
  ]

  let y = 220
  const pad = 26
  const lh = 38
  ctx.font = '500 26px Inter, sans-serif'
  for (const m of messages) {
    const tw = Math.max(...m.lines.map((l) => ctx.measureText(l).width))
    const bw = tw + pad * 2
    const bh = m.lines.length * lh + pad * 1.6
    const x = m.who === 'user' ? W - 24 - bw : 24
    ctx.fillStyle = m.who === 'bot' ? '#1d1d33' : 'rgba(37,211,102,0.22)'
    roundRect(ctx, x, y, bw, bh, 22)
    ctx.fill()
    ctx.fillStyle = m.who === 'bot' ? 'rgba(255,255,255,0.88)' : '#b9f6ca'
    m.lines.forEach((l, i) => {
      ctx.fillText(l, x + pad, y + pad * 0.9 + lh / 2 + i * lh)
    })
    y += bh + 24
  }

  // typing indicator
  ctx.fillStyle = '#1d1d33'
  roundRect(ctx, 24, y, 130, 60, 22)
  ctx.fill()
  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    ctx.arc(58 + i * 28, y + 30, 7, 0, Math.PI * 2)
    ctx.fill()
  }

  // input bar
  ctx.fillStyle = '#141425'
  roundRect(ctx, 24, H - 96, W - 48, 70, 35)
  ctx.fill()
  ctx.fillStyle = 'rgba(255,255,255,0.3)'
  ctx.font = '400 24px Inter, sans-serif'
  ctx.fillText('Type a message…', 52, H - 60)
  const grd = ctx.createLinearGradient(W - 96, 0, W - 44, 0)
  grd.addColorStop(0, '#7C3AED')
  grd.addColorStop(1, '#3B82F6')
  ctx.fillStyle = grd
  ctx.beginPath()
  ctx.arc(W - 62, H - 61, 26, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#fff'
  ctx.font = '700 24px Inter, sans-serif'
  ctx.fillText('➤', W - 74, H - 60)

  // glass sheen — a soft diagonal highlight so the screen reads as being under glass
  const sheen = ctx.createLinearGradient(0, 0, W, H * 0.7)
  sheen.addColorStop(0, 'rgba(255,255,255,0.10)')
  sheen.addColorStop(0.35, 'rgba(255,255,255,0.02)')
  sheen.addColorStop(0.6, 'rgba(255,255,255,0)')
  ctx.fillStyle = sheen
  roundRect(ctx, 0, 0, W, H, 40)
  ctx.fill()

  return toTexture(c)
}

/* ---------- floating stat-shard label ---------- */
export function makeLabelTexture(
  value: string,
  title: string,
  accent = '#A78BFA',
): THREE.CanvasTexture {
  const W = 600
  const H = 300
  const { c, ctx } = makeCanvas(W, H)

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // accent dot
  ctx.fillStyle = accent
  ctx.beginPath()
  ctx.arc(W / 2, 78, 12, 0, Math.PI * 2)
  ctx.fill()

  // value
  ctx.fillStyle = '#ffffff'
  ctx.font = '900 96px Inter, sans-serif'
  ctx.fillText(value, W / 2, H / 2 + 6)

  // title
  ctx.fillStyle = 'rgba(255,255,255,0.65)'
  ctx.font = '600 36px Inter, sans-serif'
  ctx.fillText(title.toUpperCase(), W / 2, H - 56)

  return toTexture(c)
}

/* ---------- soft round glow sprite for particles ---------- */
export function makeGlowTexture(): THREE.CanvasTexture {
  const { c, ctx } = makeCanvas(64, 64)
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.25, 'rgba(255,255,255,0.85)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 64, 64)
  const t = new THREE.CanvasTexture(c)
  t.needsUpdate = true
  return t
}
