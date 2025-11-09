import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative bg-deep-teal text-white py-12 px-6 overflow-hidden">
      {/* Soft peach glow border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-soft-peach to-transparent"></div>
      
      {/* Background decorative elements */}
      <motion.div
        className="absolute bottom-0 left-10 w-64 h-64 bg-soft-peach/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl font-semibold mb-3">
            © 2025 JaruratCare India — Support • Awareness • Community
          </p>
          
          <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
            Together, we create a future where every family finds strength, hope, and understanding.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
