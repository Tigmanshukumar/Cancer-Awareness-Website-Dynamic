import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QuoteSection = () => {
  const [quote, setQuote] = useState({ content: '', author: '' })
  const [loading, setLoading] = useState(true)
  const [quoteKey, setQuoteKey] = useState(0)

  const fetchQuote = async () => {
    setLoading(true)
    try {
      // Add timestamp to prevent caching
      const response = await fetch(`https://api.quotable.io/random?timestamp=${Date.now()}`)
      const data = await response.json()
      setQuote({ content: data.content, author: data.author })
      setQuoteKey(prev => prev + 1)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching quote:', error)
      setQuote({
        content: 'Hope is being able to see that there is light despite all of the darkness.',
        author: 'Desmond Tutu'
      })
      setQuoteKey(prev => prev + 1)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
    const interval = setInterval(fetchQuote, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-bg-light to-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Daily Inspiration to Stay Strong
        </motion.h2>

        <motion.p
          className="text-center text-text-soft mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A new quote of hope, courage, and resilience refreshes every few seconds to keep you motivated through life's toughest battles.
        </motion.p>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-gradient-to-r from-deep-teal/30 to-soft-peach/30 relative overflow-hidden min-h-[250px] flex items-center justify-center">
            {/* Gradient border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-teal/10 via-soft-peach/10 to-deep-teal/10 blur-xl"></div>
            
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-12 h-12 border-4 border-deep-teal/30 border-t-deep-teal rounded-full animate-spin mx-auto"></div>
                </motion.div>
              ) : (
                <motion.div
                  key={quoteKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 text-center"
                >
                  <svg
                    className="w-12 h-12 text-soft-peach mx-auto mb-6 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  
                  <p className="text-xl md:text-2xl text-text-dark font-medium mb-6 leading-relaxed">
                    "{quote.content}"
                  </p>
                  
                  <p className="text-deep-teal font-semibold text-lg">
                    — {quote.author}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Manual refresh button */}
            <motion.button
              onClick={fetchQuote}
              className="absolute bottom-4 right-4 z-20 bg-deep-teal text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Get new quote"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </motion.button>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-deep-teal/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-soft-peach/10 to-transparent rounded-tl-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteSection
