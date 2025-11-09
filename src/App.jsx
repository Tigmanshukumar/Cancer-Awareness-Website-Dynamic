import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Hero from './components/Hero'
import AwarenessCards from './components/AwarenessCards'
import VisionPanel from './components/VisionPanel'
import DonationStats from './components/DonationStats'
import QuoteSection from './components/QuoteSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Hero />
      <AwarenessCards />
      <VisionPanel />
      <DonationStats />
      <QuoteSection />
      <ContactForm />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
