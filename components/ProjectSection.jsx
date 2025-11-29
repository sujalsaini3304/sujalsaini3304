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

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Cloudee",
      category: "React Native CLI Android Application",
      description: [
        "Developed Cloudee, an Android cloud-based photo storage application, which compresses user photos using the React-Native-Compressor library and uploads them to Cloudinary via a React Native CLI app.",
        "Developed a backend server using Node.js and Express.js, configured Cloudinary for photo storage, and used MongoDB to manage media records efficiently.",
        "Implemented a stateful authentication system with email verification for user registration via NodeMailer, strengthening account security and improving the onboarding experience.",
      ],
      technologies: [
        "React Native CLI",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Cloudinary",
        "Render",
        "FastAPI",
        "Python",
        "Docker",
        "Vercel",
      ],
      metrics: [
        "Android app",
        "Backend on Vercel",
        "99.9% Uptime",
        "Compressing Images",
      ],
      image_url: "cloudee.png",
      image_alt: "cloudee_image",
    },
    {
      title: "Aithor",
      category: "React Native CLI Android Application",
      description: [
        `Engineered Aithor, an AI-enabled Android application leveraging the Qwen LLM through OpenRouter to deliver precise, concise text summaries and enhance user understanding.`,
        `Implemented the UI with React Native CLI and React Native Paper,   improving overall app performance and raising user engagement by 15%.`
      ],
      technologies: [
        "React Native CLI",
        "JavaScript",
        "Render",
        "FastAPI",
        "Python",
        "Docker",
      ],
      metrics: [
        "Android app",
        "Backend on Render",
        "99.9% Uptime",
        "Summarizes the text",
      ],
      image_url: "aithor.png",
      image_alt: "aithor_image",
    },
    {
      title: "SafeNews AI",
      category: "React and TailwindCSS Application",
      description: [
        `Designed and deployed a RAG-based FastAPI backend integrated with 
DuckDuckGo search for real-time fact retrieval and claim analysis, and 
built a React.js + Tailwind CSS frontend to deliver a fast and seamless 
user experience.`,
        `Dockerized the FastAPI backend and configured it to serve the React.js 
and Tailwind CSS frontend, then deployed the full stack on Render for 
scalable performance and accurate fact-analysis processing.`
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Render",
        "FastAPI",
        "Python",
        "Docker",
      ],
      metrics: [
        "Web app",
        "Backend on Render",
        "99.9% Uptime",
        "News Authenticity Checker",
      ],
      image_url: "safenews_ai.png",
      image_alt: "safenews_ai_image",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 tracking-wide animate-fadeIn">
          PORTFOLIO
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 animate-fadeIn">
          Featured Projects
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 hover:border-blue-600 transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300 animate-slideInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-8">
                <div className="lg:col-span-2">
                  <div className="text-xs font-semibold text-blue-600 mb-2 tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    {project.description.map((item, j) => (
                      <p key={`desc-${j}`} className="mb-2">
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={`tech-${tech}`} // use tech name for unique key
                        className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                    {project.metrics.map((metric) => (
                      <div
                        key={`metric-${metric}`}
                        className="flex items-center gap-1"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-40 sm:h-48 border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={project.image_url}
                      className="w-full h-full object-cover"
                      style={{
                        objectFit: "contain",
                        objectPosition: "center 18%",
                      }}
                      alt={project.image_alt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
