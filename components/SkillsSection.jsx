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

// Skills Section
const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: [
        "HTML5/CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "React Native CLI",
        "Expo",
        "Tailwind CSS",
        "Zustand",
        "Next.js",
        "TypeScript",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: <Briefcase size={24} />,
      skills: [
        "Node.js",
        "Express.js",
        "python",
        "FastAPI",
        "RESTful APIs",
        "ResendAPI",
        "JWT Authentication",
        "Microservices",
        "GraphQL",
        "API Design",
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Award size={24} />,
      skills: [
        // "PostgreSQL",
        // "Redis",
        // "AWS (EC2, S3, Lambda)",
        "MongoDB",
        "Microsoft Azure",
        "Docker",
        "Kubernetes",
        "MySQL",
        "Cloudinary",
        "Database Design",
      ],
    },
    {
      title: "Tools & Practices",
      icon: <Code size={24} />,
      skills: [
        // "CI/CD",
        // "Jest/Testing",
        // "JIRA",
        "Git/GitHub",
        "Microsoft Azure",
        "Ubuntu",
        "Linux",
        "Performance Optimization",
        "Agile/Scrum",
        "Code Review",
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 tracking-wide animate-fadeIn">
          EXPERTISE
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 animate-fadeIn">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-6 sm:p-8 hover:border-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600 transform hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {group.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="text-sm text-gray-700 flex items-center gap-2 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
