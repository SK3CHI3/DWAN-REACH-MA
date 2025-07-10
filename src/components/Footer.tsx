
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Social Media Management',
      'Content Creation',
      'Paid Advertising',
      'Branding & Design',
      'Website Design & SEO',
      'Email Marketing'
    ],
    training: [
      'Short Courses',
      'Corporate Training',
      '1-on-1 Coaching',
      'Certification Programs'
    ],
    company: [
      'About Us',
      'Our Mission',
      'Our Vision',
      'Contact'
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-16 left-8 floating">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg transform rotate-12 opacity-40"></div>
        </div>
        <div className="absolute top-32 right-16 floating-delayed">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-24 left-1/4 floating-delayed-2">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl transform -rotate-45 opacity-40"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-orange-400/10 to-red-600/10 rounded-full blur-3xl pulse-glow"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold gradient-text mb-2">DawnReach</h3>
              <p className="text-gray-400">Marketing</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering brands to reach new heights through innovative digital marketing solutions and comprehensive training programs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">+254 707 110 192</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">alphonesomondi7@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">Kenya, East Africa</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Digital Marketing</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Training & Academy</h4>
            <ul className="space-y-3">
              {footerLinks.training.map((training) => (
                <li key={training}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {training}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* Removed newsletter signup section as requested */}

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} DawnReach Marketing. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
