import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Check, Star, Shield, Zap, Settings } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: ProductSpec[];
  benefits: string[];
  applications: string[];
  icon: React.ComponentType<any>;
}

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const prefersReducedMotion = useReducedMotion();

  const scrollToContact = () => {
    navigate("/");
    // Wait for navigation to complete, then scroll to contact
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const products: Record<string, ProductData> = {
    "ultrasonic-sensor": {
      id: "ultrasonic-sensor",
      title: "Ultrasonic Level Sensor",
      subtitle: "High-Precision Water Level Measurement",
      description:
        "Advanced ultrasonic sensor technology for accurate water level detection with ±1mm precision.",
      longDescription:
        "Our Ultrasonic Level Sensor represents the pinnacle of non-contact measurement technology. Utilizing advanced ultrasonic waves, this sensor provides highly accurate water level readings without any physical contact with the liquid. The sensor is designed for harsh industrial environments and offers exceptional reliability and longevity.",
      features: [
        "Non-contact measurement technology",
        "IP67 waterproof rating for harsh environments",
        "4-20mA analog output signal",
        "Temperature compensation for accuracy",
        "Wide measurement range: 0.3m to 15m",
        "Corrosion-resistant housing",
      ],
      specifications: [
        { label: "Measurement Range", value: "0.3m - 15m" },
        { label: "Accuracy", value: "±1mm or ±0.1% of range" },
        { label: "Resolution", value: "0.1mm" },
        { label: "Operating Temperature", value: "-40°C to +70°C" },
        { label: "Protection Rating", value: "IP67" },
        { label: "Output Signal", value: "4-20mA, RS485" },
        { label: "Power Supply", value: "12-24V DC" },
        { label: "Response Time", value: "<1 second" },
      ],
      benefits: [
        "Zero maintenance required",
        "No moving parts to wear out",
        "Immune to liquid properties",
        "Easy installation and setup",
        "Long-term stability",
      ],
      applications: [
        "Water tank level monitoring",
        "Wastewater treatment plants",
        "Chemical storage tanks",
        "Food and beverage industry",
        "Pharmaceutical applications",
      ],
      icon: Shield,
    },
    "iot-monitor": {
      id: "iot-monitor",
      title: "IoT Water Level Monitor",
      subtitle: "Smart Wireless Water Management",
      description:
        "Intelligent monitoring system with wireless connectivity for remote water tank management and control.",
      longDescription:
        "The IoT Water Level Monitor revolutionizes water management by combining precision sensing with smart connectivity. This system enables real-time monitoring, automated alerts, and remote control capabilities through our intuitive mobile application and web dashboard.",
      features: [
        "WiFi and 4G connectivity options",
        "Mobile app for iOS and Android",
        "Real-time alerts and notifications",
        "Cloud data storage and analytics",
        "Remote pump control capability",
        "Battery backup for power outages",
      ],
      specifications: [
        { label: "Connectivity", value: "WiFi 802.11b/g/n, 4G LTE" },
        { label: "Measurement Accuracy", value: "±2mm" },
        { label: "Data Transmission", value: "Every 5 minutes (configurable)" },
        { label: "Battery Life", value: "6 months (with backup)" },
        { label: "Operating Range", value: "0.2m - 10m" },
        { label: "App Compatibility", value: "iOS 12+, Android 8+" },
        { label: "Cloud Storage", value: "2 years data retention" },
        { label: "Alert Methods", value: "SMS, Email, Push notifications" },
      ],
      benefits: [
        "Remote monitoring from anywhere",
        "Prevent tank overflow and dry running",
        "Reduce manual inspection costs",
        "Historical data analysis",
        "Automated pump control",
      ],
      applications: [
        "Residential water tanks",
        "Commercial buildings",
        "Agricultural irrigation",
        "Swimming pools",
        "Industrial facilities",
      ],
      icon: Zap,
    },
    "industrial-controller": {
      id: "industrial-controller",
      title: "Industrial Controller",
      subtitle: "Robust Automation Control System",
      description:
        "Heavy-duty control systems for industrial water management with automated pump control and multi-tank support.",
      longDescription:
        "Our Industrial Controller is engineered for demanding industrial environments where reliability and precision are paramount. This robust system manages multiple tanks, controls pumps automatically, and integrates seamlessly with existing industrial automation systems.",
      features: [
        "Automated pump control with multiple modes",
        "Multi-tank support (up to 16 tanks)",
        "Modbus RTU/TCP communication",
        "HMI touchscreen interface",
        "Redundant safety systems",
        "Industrial-grade components",
      ],
      specifications: [
        { label: "Tank Capacity", value: "Up to 16 tanks" },
        { label: "Pump Control", value: "8 pump outputs" },
        { label: "Communication", value: "Modbus RTU/TCP, Ethernet" },
        { label: "Display", value: '7" color HMI touchscreen' },
        { label: "Operating Temperature", value: "-20°C to +60°C" },
        { label: "Power Supply", value: "110-240V AC" },
        { label: "Enclosure Rating", value: "IP65" },
        { label: "Memory", value: "1GB data logging" },
      ],
      benefits: [
        "Fully automated operation",
        "Reduced operational costs",
        "Enhanced system reliability",
        "Comprehensive data logging",
        "Easy integration with SCADA",
      ],
      applications: [
        "Water treatment plants",
        "Manufacturing facilities",
        "Chemical processing",
        "Power generation plants",
        "Municipal water systems",
      ],
      icon: Settings,
    },
    "analytics-dashboard": {
      id: "analytics-dashboard",
      title: "Analytics Dashboard",
      subtitle: "Comprehensive Data Intelligence Platform",
      description:
        "Advanced analytics platform for water usage optimization, predictive maintenance, and comprehensive reporting.",
      longDescription:
        "The Analytics Dashboard transforms raw sensor data into actionable insights. Our sophisticated platform uses machine learning algorithms to predict maintenance needs, optimize water usage patterns, and provide comprehensive reporting for better decision-making.",
      features: [
        "Real-time usage analytics and trends",
        "Predictive maintenance algorithms",
        "Custom report generation",
        "Energy optimization recommendations",
        "Multi-site management dashboard",
        "API integration capabilities",
      ],
      specifications: [
        { label: "Data Processing", value: "Real-time + Historical" },
        { label: "Report Types", value: "15+ pre-built templates" },
        { label: "Data Retention", value: "5 years" },
        { label: "User Accounts", value: "Unlimited" },
        { label: "API Calls", value: "10,000/month included" },
        { label: "Dashboard Updates", value: "Every 30 seconds" },
        { label: "Export Formats", value: "PDF, Excel, CSV" },
        { label: "Mobile Access", value: "Responsive web app" },
      ],
      benefits: [
        "Reduce water wastage by up to 30%",
        "Predict equipment failures",
        "Optimize energy consumption",
        "Comprehensive compliance reporting",
        "Data-driven decision making",
      ],
      applications: [
        "Smart city water management",
        "Industrial facility optimization",
        "Commercial building management",
        "Agricultural water monitoring",
        "Environmental compliance",
      ],
      icon: Star,
    },
  };

  const product = products[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = product.icon;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbcfd4" }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(to bottom right, #c5d2dd, #cbcfd4)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#cbcfd4" }}
                >
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">
                  OSTS Product
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {product.subtitle}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  Request Quote
                </button>
                <button className="border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 font-semibold">
                  Download Datasheet
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.1 : 0.8,
                delay: 0.2,
              }}
              className="relative"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20" style={{ backgroundColor: "#c5d2dd" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.1 : 0.8,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Specifications
              </h2>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="border-b pb-2"
                    style={{ borderColor: "#cbcfd4" }}
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-semibold text-gray-800">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.1 : 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Benefits
              </h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20" style={{ backgroundColor: "#cbcfd4" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-700">
              Ideal for various industries and use cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0.1 : 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: "#c5d2dd" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #cbcfd4, #c5d2dd)",
                  }}
                >
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {application}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today to discuss your specific requirements
              and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Contact Sales
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Technical Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
