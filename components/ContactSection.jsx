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

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 tracking-wide animate-fadeIn">
          GET IN TOUCH
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 animate-fadeIn">
          Let's Work Together
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:border-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300 animate-slideInUp">
            {/* <Mail
              className="text-blue-600 mb-4 transform hover:scale-110 transition-transform"
              size={28}
            /> */}
            <img
              src="/gmail.png"
              className="w-12 h-12 object-cover pt-2 pb-2 pr-4 "
              alt="Location"
            />
            <div className="text-sm text-gray-600 mb-1 font-medium">EMAIL</div>
            <div className="text-gray-900 font-semibold break-all underline">
              <Link to={"mailto:sujalsaini3304@gmail.com"}>
                sujalsaini3304@gmail.com
              </Link>
            </div>
          </div>

          {/* <div
            className="bg-white border border-gray-200 p-6 sm:p-8 hover:border-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300 animate-slideInUp"
            style={{ animationDelay: "100ms" }}
          >
            <Phone
              className="text-blue-600 mb-4 transform hover:scale-110 transition-transform"
              size={28}
            />
            <div className="text-sm text-gray-600 mb-1 font-medium">PHONE</div>
            <div className="text-gray-900 font-semibold underline">
              <Link to={"tel:+91xxxxxxxxx"}>+91 xxxxxxxxxx</Link>
            </div>
          </div> */}

          <div
            className="bg-white border border-gray-200 p-6 sm:p-8 hover:border-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300 animate-slideInUp sm:col-span-2 lg:col-span-1"
            style={{ animationDelay: "200ms" }}
          >
            {/* <MapPin
              className="text-blue-600 mb-4 transform hover:scale-110 transition-transform"
              size={28}
            /> */}
            <img
              src="/location.png"
              className="w-12 h-12 object-cover pr-4 "
              alt="Location"
            />
            <div className="text-sm text-gray-600 mb-1 font-medium">
              LOCATION
            </div>
            <div className="text-gray-900 font-semibold">
              R.I.S.U. Bhilai Chhattisgarh India
            </div>
          </div>
        </div>

        {/* <div className="mt-12 text-center animate-fadeIn">
          <p className="text-gray-700 mb-6">
            Open to full-time opportunities and consulting projects
          </p>
          <button className="bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            SCHEDULE A CALL
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
