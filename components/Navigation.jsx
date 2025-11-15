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

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
            SUJAL KUMAR SAINI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-10">
            <ScrollLink
              smooth={true}
              to="about"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="experience"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              EXPERIENCE
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="projects"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              PROJECTS
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="skills"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              SKILLS
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="contact"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              CONTACT
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4 pb-4" : "max-h-0"
          }`}
        >
          <div className="space-y-3">
            <ScrollLink
              to="about"
              smooth={true}
              onClick={closeMenu}
              className="block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="experience"
              onClick={closeMenu}
              className="block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              EXPERIENCE
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="projects"
              onClick={closeMenu}
              className="block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              PROJECTS
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="skills"
              onClick={closeMenu}
              className="block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              SKILLS
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to="contact"
              onClick={closeMenu}
              className="block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              CONTACT
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
