import React from 'react';
import { Activity, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
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
              <span className="text-2xl font-bold">OSTS</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of ultrasonic sensor-based water tank level detection systems. 
              Innovative solutions for smart water management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ultrasonic Level Sensors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IoT Water Monitors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industrial Controllers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Installation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@osts.tech</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Electronics City, Bangalore<br />
                  Karnataka, India - 560100
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 OSTS - One Stop Tech Solutions. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;