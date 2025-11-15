import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Briefcase,
  Code,
  Award,
  Download,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Sujal Kumar Saini. All Rights Reserved.
          </div>
          {/* <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
