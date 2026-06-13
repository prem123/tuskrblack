import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import WhatsAppFeatures from './components/WhatsAppFeatures'
import GMBSection from './components/GMBSection'
import Testimonials from './components/Testimonials'
import ConsultationCTA from './components/ConsultationCTA'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

const JourneyScene = lazy(() => import('./components/JourneyScene'))

function LandingPage() {
  return (
    <>
      <Suspense fallback={null}>
        <JourneyScene />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChoose />
        <WhatsAppFeatures />
        <GMBSection />
        <Testimonials />
        <ConsultationCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
