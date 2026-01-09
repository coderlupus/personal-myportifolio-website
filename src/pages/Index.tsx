import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HeroSubtitle from "@/components/sections/HeroSubtitle";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import EndCredit from "@/components/layout/EndCredit";

const Index = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  // Initialize intersection observer to detect when elements enter viewport
  // Re-runs when language changes to observe newly created elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [i18n.language]); // Re-run when language changes

  // Handle hash scrolling on mount or when hash changes
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);

      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = window.innerWidth < 768 ? 100 : 80;
          window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash]); // Depend on location.hash

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links within the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8"> {/* Reduced space on mobile */}
        <Hero />
        <AboutSection />
        <HeroSubtitle />
        <SkillsSection />
        <FeaturedProjects />
        <ExperienceSection />
        <section id="education" className="w-full bg-white py-0">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 min-h-[500px]">
                <div className="xl:col-span-2 h-full">
                  <EducationSection />
                </div>
                <div className="xl:col-span-1 h-full">
                  <CertificationsSection />
                </div>
              </div>
            </div>
          </div>
        </section>
        <EndCredit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
