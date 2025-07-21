import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Technical Support" },
    { number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver the most accurate ultrasonic sensor solutions with uncompromising quality standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously advancing technology to provide cutting-edge water level monitoring systems."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with clients through dedicated support and reliable service."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to exceeding expectations with superior products and exceptional customer service."
    }
  ];

  const mobileStatsVariants = {
    hidden: { 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.9
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: prefersReducedMotion ? 0.1 : 0.8, 
                delay: prefersReducedMotion ? 0 : 0.2 
              }}
              viewport={{ once: true }}
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">OSTS</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: prefersReducedMotion ? 0.1 : 0.8, 
                delay: prefersReducedMotion ? 0 : 0.3 
              }}
              viewport={{ once: true }}
            >
              One Stop Tech Solutions (OSTS) is a leading provider of ultrasonic sensor-based water tank level detection systems. 
              We specialize in delivering precise, reliable, and intelligent water monitoring solutions for residential, commercial, 
              and industrial applications.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: prefersReducedMotion ? 0.1 : 0.8, 
                delay: prefersReducedMotion ? 0 : 0.4 
              }}
              viewport={{ once: true }}
            >
              Our team of experienced engineers combines advanced ultrasonic technology with IoT connectivity to create 
              comprehensive water management systems that help our clients optimize usage, prevent overflow, and ensure 
              continuous water supply.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: prefersReducedMotion ? 0.1 : 0.8, 
                delay: prefersReducedMotion ? 0 : 0.5 
              }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl"
                  variants={mobileStatsVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: prefersReducedMotion ? 0.1 : 0.8, 
              delay: prefersReducedMotion ? 0 : 0.2 
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-2xl"
              whileHover={{ y: prefersReducedMotion ? 0 : -5 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="OSTS team"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize water management through innovative ultrasonic sensor technology, 
                providing accurate, reliable, and smart solutions that contribute to efficient 
                water usage and sustainable resource management.
              </p>
            </motion.div>
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl opacity-30"></div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
            viewport={{ once: true }}
          >Our Core Values</motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: prefersReducedMotion ? 0.1 : 0.6, 
                    delay: prefersReducedMotion ? 0 : index * 0.1 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: prefersReducedMotion ? 0 : -5 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-blue-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      scale: prefersReducedMotion ? 1 : 1.1,
                      rotate: prefersReducedMotion ? 0 : 5
                    }}
                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;