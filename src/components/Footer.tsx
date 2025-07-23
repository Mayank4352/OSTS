import React from "react";
import { Activity, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-16"
      style={{ backgroundColor: "#cbcfd4", color: "#374151" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/osts-logo.png"
                alt="OSTS - One Stop Tech Solutions"
                className="h-10 w-auto object-contain max-w-[150px]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "inline";
                }}
              />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Innovative startup specializing in ultrasonic sensor technology
              for smart water level monitoring.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-blue-600 transition-colors"
                style={{ backgroundColor: "#c5d2dd" }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-blue-600 transition-colors"
                style={{ backgroundColor: "#c5d2dd" }}
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Ultrasonic Level Sensors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  IoT Water Monitors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Industrial Controllers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Analytics Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Custom Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Technical Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">+91 8583808823</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">
                  onestoptechsolutions2023@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                <span className="text-gray-600">
                  Chinsurah, Hooghly
                  <br />
                  West Bengal, India - 712103
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t mt-12 pt-8 text-center"
          style={{ borderColor: "#c5d2dd" }}
        >
          <p className="text-gray-600">
            © 2024 OSTS - One Stop Tech Solutions. All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
