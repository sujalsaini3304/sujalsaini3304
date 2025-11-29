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

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-slideInLeft">
            <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-3 sm:mb-4 tracking-wide">
              COMPUTER SCIENCE ENGINEER (B.Tech.)
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {/* Building Scalable Solutions for Modern Web */}
              Full Stack Developer
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {/* Specialized in full-stack development with expertise in React, React Native, python,
              Node.js, FastAPI and Azure cloud architecture. Delivering high-performance
              applications for enterprise clients. */}
              I am a full-stack developer with experience in React, React
              Native, Python, Node.js, FastAPI, and Azure cloud architecture.
              Providing enterprise clients with applications that work well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/sujal_kumar_saini_cv.pdf";
                  link.download = "sujal_kumar_saini_cv.pdf";
                  link.click();
                }}
                className="cursor-pointer bg-blue-600 text-white px-6 sm:px-8 py-3 text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                DOWNLOAD RESUME <Download size={16} />
              </button>
              <ScrollLink
                to="projects"
                smooth={true}
                className="cursor-pointer border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                VIEW PROJECTS <ArrowRight size={16} />
              </ScrollLink>
            </div>
          </div>
          <div className="animate-slideInRight">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img
                src="my_photo.jpg"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
                alt="Professional portrait of a computer science engineer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
