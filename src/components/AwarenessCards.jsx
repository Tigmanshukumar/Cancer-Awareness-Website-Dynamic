import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    title: "Early Detection Saves Lives",
    text: "Most cancers can be treated when detected early. With the right awareness, symptoms are recognized sooner, and families make informed decisions before it's too late."
  },
  {
    title: "Support Empowers Families",
    text: "A cancer diagnosis affects more than one person — it impacts entire families. Compassion, mentorship, and community support bring hope during overwhelming times."
  },
  {
    title: "Community Creates Strength",
    text: "When people come together, healing becomes easier. Our community connects caregivers, survivors, and volunteers to make strength a shared resource."
  }
]

const AwarenessCards = () => {
  return (
    <section className="py-20 px-6 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Cancer Awareness Matters
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-soft-peach relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-soft-peach/0 to-soft-peach/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-soft-peach rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">{index + 1}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-text-dark mb-4">
                  {card.title}
                </h3>
                
                <p className="text-text-soft leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-soft-peach/20 to-transparent rounded-bl-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwarenessCards
