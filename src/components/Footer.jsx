import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Patrick Bastos. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/patrick.bastos/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/patrickbastosdeveloper/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/PatrickBastosDeveloper/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/patrickbastosc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;