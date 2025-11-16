import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AnimatedSlider from "../components/AnimatedSlider";
import AISkill from "../components/AISkill";


// Main App
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AnimatedSlider/>
      <AISkill/>
      <ContactSection />
      <Footer />
    </div>
  );
}
