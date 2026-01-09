import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isPortuguese = i18n.language?.startsWith('pt');

  const toggleLanguage = () => {
    const newLang = isPortuguese ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Nathan Lopes"
        >
          <img
            src="/nathan-logo-new.png"
            alt="Nathan Lopes Logo"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            {t('nav.home')}
          </a>
          <a href="#about" className="nav-link">{t('nav.about')}</a>
          <a href="#skills" className="nav-link">{t('nav.skills')}</a>
          <a href="#projects" className="nav-link">{t('nav.projects')}</a>
          <a href="#experience" className="nav-link">{t('nav.experience')}</a>
          <a href="#education" className="nav-link">{t('nav.education')}</a>
          <a href="#contact" className="nav-link">{t('nav.contact')}</a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span>{isPortuguese ? 'BR' : 'EN'}</span>
          </button>
        </nav>

        {/* Mobile menu button and lang toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100/80 text-xs font-medium"
          >
            <Globe className="w-3 h-3" />
            <span>{isPortuguese ? 'BR' : 'EN'}</span>
          </button>

          <button
            className="text-gray-700 p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a
            href="#"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {t('nav.home')}
          </a>
          {[
            { href: "#about", label: t('nav.about') },
            { href: "#skills", label: t('nav.skills') },
            { href: "#projects", label: t('nav.projects') },
            { href: "#experience", label: t('nav.experience') },
            { href: "#education", label: t('nav.education') },
            { href: "#contact", label: t('nav.contact') }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
