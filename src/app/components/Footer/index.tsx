import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="md:col-span-1">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Logo"
                className="bg-white rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2 text-red-600">About Us</h2>
              <p className="text-sm">
              We create websites tailored to your business, transforming your vision into reality and launching your business into the digital world.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2 text-red-600">Contact Us Via Form</h2>
              <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScVCbRTwx_ysF-2oHod9aDr1-6EEk8lSinc52__FMMbj4znbQ/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >Mentarro Form</a>
            
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2 text-red-600">Follow Us</h2>
              <div className="flex justify-center space-x-4 text-[30px]">
                <a
                  href="mailto:mentarro.in@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-800 transition-colors duration-300"
                >
                  <FiMail />
                </a>
                <a
                  href="https://www.linkedin.com/in/mentarro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/mentarro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="tel:+919894404496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-600 transition-colors duration-300"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2 text-red-600">Quick Links</h2>
              <p className="text-sm mb-2 hover:text-slate-300"><a href="https://maps.google.com">Home</a></p>
              <p className="text-sm mb-2 hover:text-slate-300"><a href="mailto:info@example.com">About</a></p>
              <p className="text-sm mb-2 hover:text-slate-300"><a href="mailto:info@example.com">Services</a></p>
              <p className="text-sm mb-2 hover:text-slate-300"><a href="mailto:info@example.com">Works</a></p>
              <p className="text-sm mb-2 hover:text-slate-300"><a href="mailto:info@example.com">Contact</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-center">
        <p className="mt-4">&copy; Copyright Mentarro&trade;. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
