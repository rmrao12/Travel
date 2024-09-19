import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 mt-20 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center">
          <span>&copy; 2024 Travel Master. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
