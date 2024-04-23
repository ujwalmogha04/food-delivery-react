import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 ml-10">
            <h2 className="text-lg font-semibold mb-4 ">Contact Us</h2>
            <p>123 Main Street</p>
            <p>NewDelhi</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: ujwalmogha2004@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
            <ul>
              <li><a href="https://github.com/ujwalmogha04" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/ujwal-mogha" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-9 text-center ">
          <p className='mt-4'>&copy; {new Date().getFullYear()} Ujwal Mogha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

