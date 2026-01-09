import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" aria-label="Nathan Lopes" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img
                src="/nathan-logo-new.png"
                alt="Nathan Lopes Logo"
                className="h-8 w-auto object-contain -ml-1"
              />
            </a>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              {t('footer.desc')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a href="https://github.com/coderlupus" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2.5 rounded-full text-gray-600 hover:text-white hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/nlopesr" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2.5 rounded-full text-gray-600 hover:text-white hover:bg-[#0077B5] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nathanlpsr@gmail.com" className="bg-gray-50 p-2.5 rounded-full text-gray-600 hover:text-white hover:bg-pulse-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              &copy; {currentYear} Nathan Lopes. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
