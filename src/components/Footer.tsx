import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Modules', href: '#modules' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="h-6 w-6" />, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/logowhite.png"
                alt="Pura Lumina"
                className="h-8 mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Empowering Africans to build successful online businesses using AI-powered website creation. 
                Join thousands who have transformed their lives with our proven system.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a
                  href="mailto:support@ytacademy.ng"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  puraluminaofficial@gmail.com
                </a>
              </div>
            </div>

            {/* Support Hours */}
            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Support Hours</h5>
              <p className="text-sm text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM (WAT)<br />
                Saturday: 10:00 AM - 4:00 PM (WAT)<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Pura Lumina. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;