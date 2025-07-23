import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Waves, Zap, Shield, Activity } from "lucide-react";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mobileAnimationVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen"
      style={{ 
        background: `linear-gradient(to bottom right, #cbcfd4, #c5d2dd, #cbcfd4)` 
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="space-y-4"
              variants={mobileAnimationVariants}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Smart Water
                </span>
                <span className="text-gray-800">
                  {" "}
                  Level Detection
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Advanced ultrasonic sensor technology for precise water tank
                monitoring. Real-time level detection with unmatched accuracy
                and reliability.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={mobileAnimationVariants}
            >
              <button
                onClick={() => scrollToSection("products")}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-xl active:scale-95 transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-700 hover:text-white active:scale-95 transition-all duration-300 font-semibold"
              >
                Get Quote
              </button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              variants={staggerContainer}
            >
              <motion.div
                className="text-center"
                variants={mobileAnimationVariants}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#c5d2dd' }}>
                  <Waves className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Precision</h3>
                <p className="text-sm text-gray-600">±1mm accuracy</p>
              </motion.div>
              <motion.div
                className="text-center"
                variants={mobileAnimationVariants}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#c5d2dd' }}>
                  <Zap className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Real-time</h3>
                <p className="text-sm text-gray-600">Instant monitoring</p>
              </motion.div>
              <motion.div
                className="text-center"
                variants={mobileAnimationVariants}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#c5d2dd' }}>
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Reliable</h3>
                <p className="text-sm text-gray-600">Industrial grade</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="relative z-10 p-8 rounded-2xl shadow-2xl"
              style={{ backgroundColor: 'rgba(197, 210, 221, 0.6)' }}
              whileHover={{ y: prefersReducedMotion ? 0 : -5 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 h-64 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Ultrasonic sensor technology"
                    className="w-full h-full object-cover opacity-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-teal-600/60"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-teal-600/60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Activity className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">OSTS Technology</h3>
                      <p className="text-blue-100 text-sm">
                        Ultrasonic Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: '#cacfd5' }}
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-700">
                    Projects Delivered
                  </div>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: '#c5d2dd' }}
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-teal-600">99.9%</div>
                  <div className="text-sm text-gray-700">Accuracy Rate</div>
                </motion.div>
              </div>
            </motion.div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;