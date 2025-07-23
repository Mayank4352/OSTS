import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mobileFormVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'linear-gradient(to bottom right, #cbcfd4, #c5d2dd)' }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Get In  Touch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to implement smart water level monitoring? Contact us today for a custom solution tailored to your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-8 rounded-2xl shadow-lg"
              style={{ backgroundColor: '#c5d2dd' }}
              whileHover={{ y: prefersReducedMotion ? 0 : -5 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#cbcfd4' }}>
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-700">+91 9876543210</p>
                    <p className="text-gray-700">+91 8765432109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#cbcfd4' }}>
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-700">info@osts.tech</p>
                    <p className="text-gray-700">support@osts.tech</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#cbcfd4' }}>
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-700">
                      Tech Hub, Innovation Center<br />
                      Electronics City, Bangalore<br />
                      Karnataka, India - 560100
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl text-white"
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-blue-100 mb-4">
                Get a quote within 24 hours for your ultrasonic sensor requirements.
              </p>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-sm font-semibold">Business Hours</p>
                <p className="text-blue-100">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-blue-100">Sat: 9:00 AM - 2:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: prefersReducedMotion ? 0.1 : 0.8, 
              delay: prefersReducedMotion ? 0 : 0.2 
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-8 rounded-2xl shadow-lg"
              style={{ backgroundColor: '#c5d2dd' }}
              whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={mobileFormVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 active:scale-[0.99]"
                      style={{ 
                        borderColor: '#cbcfd4', 
                        backgroundColor: '#cbcfd4', 
                        color: '#374151' 
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 active:scale-[0.99]"
                      style={{ 
                        borderColor: '#cbcfd4', 
                        backgroundColor: '#cbcfd4', 
                        color: '#374151' 
                      }}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 active:scale-[0.99]"
                    style={{ 
                      borderColor: '#cbcfd4', 
                      backgroundColor: '#cbcfd4', 
                      color: '#374151' 
                    }}
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 active:scale-[0.99]"
                    style={{ 
                      borderColor: '#cbcfd4', 
                      backgroundColor: '#cbcfd4', 
                      color: '#374151' 
                    }}
                    placeholder="Describe your water level monitoring requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-lg hover:shadow-xl active:scale-95 transition-all duration-300 font-semibold flex items-center justify-center group"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;