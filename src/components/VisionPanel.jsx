import React from 'react'
import { motion } from 'framer-motion'

const VisionPanel = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/5 to-soft-peach/5"></div>
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-soft-peach/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="glass rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-white/30 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-deep-teal/20 via-soft-peach/20 to-deep-teal/20 opacity-50 blur-xl"></div>
          
          <div className="relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-text-dark mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Vision: A Future Where No Family Faces Cancer Alone
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-text-soft leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              CancerCare India is building a compassionate, technology-driven community that empowers families with knowledge, emotional support, and real-life guidance. Our mission goes beyond awareness — we connect individuals to mentors, survivor stories, early detection resources, and nationwide support networks. Hope grows when people stand together. And together, we can change the future of cancer care in India.
            </motion.p>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-deep-teal/20 to-transparent rounded-tr-full"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-soft-peach/20 to-transparent rounded-bl-full"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionPanel
