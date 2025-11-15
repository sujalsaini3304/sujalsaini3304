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
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";

// About Section
const AboutSection = () => {
  const stats = [
    { value: "3", label: "Months Experience" },
    { value: "4+", label: "Projects Completed" },
    { value: "15+", label: "Technologies" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 tracking-wide animate-fadeIn">
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 animate-fadeIn">
            Professional Background
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-slideInLeft">
              <p className="text-gray-700 leading-relaxed mb-4">
                {/* Results-driven software engineer with 8+ years of experience in
                designing and implementing enterprise-level web applications.
                Proven track record of leading development teams and delivering
                solutions that drive business growth. */}
                Hello I'm Sujal Kumar Saini, a developer who enjoys transforming
                concepts into tangible digital products. I use React, React
                Native CLI, and Expo to create responsive websites and Android
                mobile apps with an emphasis on streamlined user interfaces,
                robust performance, and seamless user flows.
              </p>
              <p className="text-gray-700 leading-relaxed">
                {/* Strong expertise in modern JavaScript frameworks, microservices
                architecture, and DevOps practices. Committed to writing clean,
                maintainable code and following industry best practices. */}
                I use Docker to effectively containerize and manage services,
                and I develop scalable backend APIs using FastAPI in python and
                Express.js. Because of its adaptability and scalability to
                various application requirements, MongoDB is frequently used in
                my projects. I also like experimenting with cloud-native
                architectures, automating processes, and deploying apps using
                Microsoft Azure.
              </p>
            </div>
            <div className="animate-slideInRight">
              <p className="text-gray-700 leading-relaxed mb-4">
                {/* I've worked with Fortune 500 companies and fast-growing
                startups, contributing to products used by millions of users
                worldwide. My approach combines technical excellence with strong
                business acumen to deliver impactful solutions. */}
                I'm constantly learning, trying new things, and creating
                solutions for front-end, back-end, and cloud systems that
                address actual issues. Please get in touch if you're interested
                in contemporary web or mobile development!
              </p>
              <div className="flex gap-4 mt-6">
                <Link
                  to="https://github.com/sujalsaini3304"
                  className="p-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all transform hover:scale-110 hover:shadow-md"
                >
                  <Github size={20} />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/sujal-kumar-saini-94036425a/"
                  className="p-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all transform hover:scale-110 hover:shadow-md"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-200">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center transform hover:scale-110 transition-transform duration-300 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
