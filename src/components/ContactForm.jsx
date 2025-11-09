import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email')
      return
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message')
      return
    }

    // Success
    toast.success('Thank you for reaching out. Our support team will contact you shortly.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-white to-bg-light">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          We're Here to Listen and Support
        </motion.h2>

        <motion.p
          className="text-center text-text-soft mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you're seeking guidance, sharing feedback, or want to join our mission, we're always here for you. Send us a message — our support team will get back to you with warmth and care.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-transparent hover:border-soft-peach/30 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-text-dark font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                  focusedField === 'name'
                    ? 'border-deep-teal shadow-lg shadow-deep-teal/20'
                    : 'border-gray-200 hover:border-soft-peach/50'
                }`}
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-text-dark font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                  focusedField === 'email'
                    ? 'border-deep-teal shadow-lg shadow-deep-teal/20'
                    : 'border-gray-200 hover:border-soft-peach/50'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-text-dark font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows="6"
                className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                  focusedField === 'message'
                    ? 'border-deep-teal shadow-lg shadow-deep-teal/20'
                    : 'border-gray-200 hover:border-soft-peach/50'
                }`}
                placeholder="Share your thoughts, questions, or how we can help..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-deep-teal to-deep-teal/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-deep-teal/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm
