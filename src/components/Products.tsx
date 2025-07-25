import { motion, useReducedMotion } from "framer-motion";
import { Radio, Wifi, Settings, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const products = [
    {
      id: "ultrasonic-sensor",
      icon: Radio,
      title: "Ultrasonic Level Sensor",
      description:
        "High-precision ultrasonic sensors for accurate water level measurement with ±1mm accuracy.",
      features: [
        "Non-contact measurement",
        "IP67 waterproof rating",
        "4-20mA output",
        "Temperature compensation",
      ],
      image: "/sensor.jpg",
    },
    {
      id: "iot-monitor",
      icon: Wifi,
      title: "IoT Water Level Monitor",
      description:
        "Smart monitoring system with wireless connectivity for remote water tank management.",
      features: [
        "WiFi/4G connectivity",
        "Mobile app control",
        "Real-time alerts",
        "Cloud data storage",
      ],
      image: "/iot-monitor.jpg",
    },
    {
      id: "industrial-controller",
      icon: Settings,
      title: "Industrial Controller",
      description:
        "Robust control systems for industrial water management with automated pump control.",
      features: [
        "Automated pump control",
        "Multi-tank support",
        "Modbus communication",
        "HMI interface",
      ],
      image: "/industrial-controller.jpg",
    },
    {
      id: "analytics-dashboard",
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Comprehensive data analytics platform for water usage optimization and trend analysis.",
      features: [
        "Usage analytics",
        "Predictive maintenance",
        "Custom reports",
        "Energy optimization",
      ],
      image: "/analytics.jpg",
    },
  ];

  const mobileCardVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 50,
      scale: prefersReducedMotion ? 1 : 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="products"
      className="py-12 sm:py-16 lg:py-20 overflow-hidden"
      role="main"
      aria-label="OSTS Products - Ultrasonic Sensors and IoT Solutions"
      style={{ backgroundColor: "#c5d2dd" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Our Products
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Cutting-edge ultrasonic sensor solutions designed for precise water
            level monitoring across various applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-2xl shadow-lg hover:shadow-2xl active:shadow-lg transition-all duration-300 overflow-hidden border min-h-[480px] sm:min-h-[520px] flex flex-col w-full"
                style={{ backgroundColor: "#cbcfd4", borderColor: "#c5d2dd" }}
                variants={mobileCardVariants}
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
                <div
                  className="relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #c5d2dd, #cbcfd4)",
                  }}
                >
                  {product.title === "Analytics Dashboard" ? (
                    // Custom dashboard visualization for Analytics Dashboard
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 opacity-20">
                        <div className="grid grid-cols-4 h-full gap-1 p-4">
                          {[...Array(16)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-white rounded animate-pulse"
                              style={{
                                animationDelay: `${i * 0.1}s`,
                                height: `${Math.random() * 60 + 20}%`,
                                alignSelf: "flex-end",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <BarChart3 className="h-16 w-16 mx-auto mb-2 opacity-80" />
                          <div className="text-sm font-semibold opacity-90">
                            Data Analytics
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={`${product.title} - OSTS ${
                        product.description.split(".")[0]
                      } for water level monitoring`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="400"
                      height="192"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://via.placeholder.com/400x300/3b82f6/ffffff?text=" +
                          encodeURIComponent(product.title);
                      }}
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.filter = "none";
                      }}
                    />
                  )}
                  <div
                    className="absolute top-4 left-4 backdrop-blur-sm p-3 rounded-full shadow-sm"
                    style={{ backgroundColor: "rgba(203, 207, 212, 0.95)" }}
                  >
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="mt-auto w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-lg hover:shadow-lg active:scale-95 transition-all duration-300 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                    aria-label={`Learn more about ${product.title}`}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
