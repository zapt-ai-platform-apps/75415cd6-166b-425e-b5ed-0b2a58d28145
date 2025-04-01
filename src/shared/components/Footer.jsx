import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Property Ladder</h3>
            <p className="text-gray-300 mb-4">
              Helping beginners start investing in real estate with personalized advice and market guidance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/concepts" className="text-gray-300 hover:text-white transition-colors">Investment Concepts</Link></li>
              <li><Link to="/calculator" className="text-gray-300 hover:text-white transition-colors">Investment Calculator</Link></li>
              <li><Link to="/markets" className="text-gray-300 hover:text-white transition-colors">Markets & Regulations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Have questions? Reach out to us.</p>
            <a href="mailto:info@propertyladder.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              info@propertyladder.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Property Ladder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;