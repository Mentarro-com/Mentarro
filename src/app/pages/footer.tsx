import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailchimp,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Picture of the author"
              className="bg-white rounded-lg"
            />
            <br />
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Column 2 */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">123 Street Name, City, Country</p>
            <p className="text-sm">info@example.com</p>
          </div>
          {/* Column 3 */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4 text-[20px]">
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
      </div>
      {/* Bottom section */}
      <div className="mt-8 border-t border-gray-600 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-center">
        <br />
        <p>&copy; Copyright Mentarro&trade;. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
