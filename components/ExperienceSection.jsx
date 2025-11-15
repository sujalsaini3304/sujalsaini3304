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

// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Development",
      company: "Infosys SpringBoard",
      period: "Oct 2025 - Dec 2025",
      position: "Software Development Intern",
      achievements: [
        "Developed a responsive web application using React.js and TailwindCSS, improving user engagement by 20%.",
        "Integrated YOLOv8n.pt Nano with the DeepSort algorithm in a Python-based video analytics project to perform accurate crowd counting and zone analysis.",
        "Developed a high-performance RESTful API using FastAPI in python under mentor guidance, enabling seamless data flow between frontend and backend and ensuring faster processing speeds.",
        "Integrated a stateful authentication system with email verification for user registration and verification using ResendAPI, enhancing account security and user onboarding.",
        "Optimized MongoDB queries, reducing response time by 20%, and secured sensitive data such as passwords by encrypting them with bcrypt in a FastAPI.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 tracking-wide animate-fadeIn">
          EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 animate-fadeIn">
          Professional Journey
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-8 border-l-2 border-blue-600 animate-slideInLeft hover:border-blue-700 transition-colors"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full -left-[7px] sm:-left-[9px] top-0"></div>
              <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <div className="text-blue-600 font-medium">{exp.company}</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-sm text-gray-600 font-medium">
                    {exp.period}
                  </div>
                  <div className="text-sm text-gray-500">{exp.position}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-sm sm:text-base text-gray-700 flex items-start gap-3 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span className="flex-1">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
