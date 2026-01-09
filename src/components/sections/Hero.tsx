import React, { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section
      className="overflow-hidden relative bg-cover min-h-[95vh] flex items-center"
      id="hero"
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%',
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Greeting */}
          <p
            className="text-gray-600 text-lg sm:text-xl mb-2 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t('hero.greeting')}
          </p>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {t('hero.name')}
          </h1>

          {/* Title/Role */}
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-pulse-600 mt-2 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {t('hero.title')}
          </h2>

          {/* Subtitle */}
          <p
            style={{ animationDelay: "0.5s" }}
            className="mt-4 sm:mt-6 mb-6 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal text-base sm:text-lg text-center mx-auto max-w-2xl"
          >
            {t('hero.subtitle')}
          </p>

          {/* Social Links */}
          <div
            className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/coderlupus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full text-gray-700 hover:text-white hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/nlopesr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full text-gray-700 hover:text-white hover:bg-[#0077B5] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:nathanlpsr@gmail.com"
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full text-gray-700 hover:text-white hover:bg-pulse-500 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in justify-center w-full"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#projects"
              className="flex items-center justify-center group w-full sm:w-auto text-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center group w-full sm:w-auto text-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full font-medium border-2 border-gray-200 hover:border-gray-900 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('hero.cta_secondary')}
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
