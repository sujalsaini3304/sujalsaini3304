import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Gemini AI Certification",
      issuer: "Google For Education",
      image: "/gemini_certificate.jpg",
      link: "https://edu.google.accredible.com/9569ecf1-fe2b-4038-9bf4-94b2b8affeec?utm_source=whatsapp&utm_medium=social",
    },
    {
      id: 2,
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class , provided by IBM",
      image: "/IBM_PY0101EN_Certificate___Cognitive_Class.jpg",
      link: "https://courses.cognitiveclass.ai/certificates/07b3cfb015ac46a98fcce02e2126642d",
    },
    {
      id: 3,
      title: "SQL & Relational Databases 101",
      issuer: "Cognitive Class , provided by IBM",
      image: "/IBM_DB0101EN_Certificate___Cognitive_Class.jpg",
      link: "https://courses.cognitiveclass.ai/certificates/c6f19d88aa6246648d15405fb3dea9f0",
    },

    {
      id: 4,
      title: "R for Data Science",
      issuer: "Cognitive Class , provided by IBM",
      image: "/IBM_RP0101EN_Certificate___Cognitive_Class.jpg",
      link: "https://courses.cognitiveclass.ai/certificates/5051f57e89e24386ad44f8c7a121123b",
    },

  ];

  return (
    <section id="certificates" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 tracking-wide animate-fadeIn">
          ACHIEVEMENTS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 animate-fadeIn">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              className="border border-gray-200 bg-white rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 animate-fadeIn"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="w-full h-56 bg-blue-50 flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-2 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                  <Award size={20} className="text-blue-600" /> {cert.title}
                </h3>
                <p className="text-sm text-gray-600">Issued by {cert.issuer}</p>

                <Link
                  to={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-blue-600 text-sm font-medium mt-2 hover:underline"
                >
                  View Certificate <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;