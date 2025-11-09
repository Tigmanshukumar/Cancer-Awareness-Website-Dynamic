import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const DonationStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [totalDonations, setTotalDonations] = useState(0)
  const [totalDonors, setTotalDonors] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Initial animation to target value
  useEffect(() => {
    if (!isInView || hasAnimated) return

    const initialDonations = 2847500
    const initialDonors = 1243
    const duration = 2000
    let startTime

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setTotalDonations(Math.floor(progress * initialDonations))
      setTotalDonors(Math.floor(progress * initialDonors))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setHasAnimated(true)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, hasAnimated])

  // Continuous increment every 2 seconds after initial animation
  useEffect(() => {
    if (!hasAnimated) return

    const interval = setInterval(() => {
      // Random donation amount between 500 and 5000
      const randomDonation = Math.floor(Math.random() * 4500) + 500
      setTotalDonations(prev => prev + randomDonation)
      
      // Occasionally add a new donor (30% chance)
      if (Math.random() > 0.7) {
        setTotalDonors(prev => prev + 1)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [hasAnimated])

  // Sample donation trend data (last 6 months)
  const trendData = [
    { month: 'Apr', amount: 320000 },
    { month: 'May', amount: 410000 },
    { month: 'Jun', amount: 385000 },
    { month: 'Jul', amount: 520000 },
    { month: 'Aug', amount: 615000 },
    { month: 'Sep', amount: 597500 },
  ]

  const maxAmount = Math.max(...trendData.map(d => d.amount))

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-bg-light to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Impact Through Generosity
        </motion.h2>

        <motion.p
          className="text-center text-text-soft mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every contribution brings hope to families fighting cancer. Here's how our community is making a difference.
        </motion.p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Total Donations */}
          <motion.div
            className="bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-3xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <p className="text-white/80 text-lg mb-2">Total Donations Received</p>
              <p className="text-5xl md:text-6xl font-bold mb-2">
                ₹{totalDonations.toLocaleString('en-IN')}
              </p>
              <p className="text-white/70 text-sm">Supporting families across India</p>
            </div>
          </motion.div>

          {/* Total Donors */}
          <motion.div
            className="bg-gradient-to-br from-soft-peach to-soft-peach/80 rounded-3xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <p className="text-white/90 text-lg mb-2">Number of Donors</p>
              <p className="text-5xl md:text-6xl font-bold mb-2">
                {totalDonors.toLocaleString('en-IN')}
              </p>
              <p className="text-white/80 text-sm">Compassionate hearts united</p>
            </div>
          </motion.div>
        </div>

        {/* Donation Trend Chart */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-transparent hover:border-soft-peach/30 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">
            Donation Trends (Last 6 Months)
          </h3>

          <div className="space-y-6">
            {trendData.map((data, index) => {
              const percentage = (data.amount / maxAmount) * 100

              return (
                <motion.div
                  key={data.month}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-dark font-semibold text-lg w-16">
                      {data.month}
                    </span>
                    <span className="text-text-soft text-sm">
                      ₹{data.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  
                  <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-deep-teal to-soft-peach rounded-full flex items-center justify-end pr-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    >
                      <span className="text-white font-semibold text-sm">
                        {percentage.toFixed(0)}%
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary */}
          <motion.div
            className="mt-10 pt-8 border-t-2 border-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-deep-teal mb-1">
                  ₹{Math.round(trendData.reduce((sum, d) => sum + d.amount, 0) / trendData.length).toLocaleString('en-IN')}
                </p>
                <p className="text-text-soft text-sm">Average Monthly</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-soft-peach mb-1">
                  ₹{Math.max(...trendData.map(d => d.amount)).toLocaleString('en-IN')}
                </p>
                <p className="text-text-soft text-sm">Highest Month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-pink mb-1">
                  +18%
                </p>
                <p className="text-text-soft text-sm">Growth Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DonationStats
