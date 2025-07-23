import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Shield,
  Smartphone,
  Wrench,
  TrendingUp,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Features = () => {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const features = [
    {
      icon: CheckCircle,
      title: "Precision Accuracy",
      description:
        "±1mm measurement accuracy with advanced ultrasonic technology and temperature compensation.",
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description:
        "Continuous monitoring with instant data updates and real-time alerts for critical levels.",
    },
    {
      icon: Shield,
      title: "Industrial Grade",
      description:
        "IP67 waterproof rating, corrosion-resistant materials, and built for harsh environments.",
    },
    {
      icon: Smartphone,
      title: "Smart Connectivity",
      description:
        "WiFi, 4G, and Bluetooth connectivity with mobile app control and cloud integration.",
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description:
        "Simple setup process with comprehensive documentation and technical support.",
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description:
        "Advanced analytics with usage patterns, predictive maintenance, and optimization insights.",
    },
  ];

  const mobileFeatureVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
      },
    },
  };

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #cbcfd4, #c5d2dd)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              OSTS
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our ultrasonic sensor technology delivers unmatched performance,
            reliability, and innovation for water level monitoring solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl active:shadow-lg transition-all duration-300 group"
                style={{ backgroundColor: '#c5d2dd' }}
                variants={mobileFeatureVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: prefersReducedMotion ? 0.1 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: prefersReducedMotion ? 0 : -5 }}
                whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(to bottom right, #cbcfd4, #c5d2dd)' }}
                  whileHover={{ rotate: prefersReducedMotion ? 0 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Water Management?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust OSTS for their water
            level monitoring needs.
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-xl active:scale-95 transition-all duration-300 hover:bg-blue-50"
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
            onClick={() => scrollToSection("contact")}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
