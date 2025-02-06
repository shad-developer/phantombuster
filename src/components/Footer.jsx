import React from "react";
import logo from '../assets/images/Logo.png'; 
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-20">
      <div className="container mx-auto px-10">
        {/* Top Section: Logo */}
        <div className="mb-6">
          <div className="flex items-center ">
          <img src={logo} className="h-12 w-auto" />
          <h2 className="font-semibold text-lg mb-4">PhantomBuster</h2>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="flex flex-wrap justify-between mb-6">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Why PhantomBuster?</h3>
            <ul className="space-y-2">
              <li>Lead generation</li>
              <li>Data & email enrichment</li>
              <li>LinkedIn outreach</li>
              <li>Automate responsibly</li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Solutions</h3>
            <ul className="space-y-2">
              <li>LinkedIn</li>
              <li>Sales Navigator</li>
              <li>Google</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>Get started</li>
              <li>Blog</li>
              <li>Tutorial videos</li>
              <li>Use cases</li>
              <li>1:1 coaching</li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Assistance</h3>
            <ul className="space-y-2">
              <li>Help center</li>
              <li>Support</li>
              <li>Paid services</li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">More</h3>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Newsletter</li>
              <li>Affiliate program</li>
              <li>Status</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Social Media Icons */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2024 PhantomBuster. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-600">
            <FaFacebookF className="hover:text-gray-900 cursor-pointer" />
            <FaTwitter className="hover:text-gray-900 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-900 cursor-pointer" />
            <FaInstagram className="hover:text-gray-900 cursor-pointer" />
            <FaTiktok className="hover:text-gray-900 cursor-pointer" />
            <FaYoutube className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
