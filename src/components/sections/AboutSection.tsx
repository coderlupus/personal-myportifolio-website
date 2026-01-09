import React, { useRef } from "react";
import { useTranslation, Trans } from 'react-i18next';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-50" id="about" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>{t('about.chip')}</span>
            </div>
            <h2 className="section-title mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-700 mb-6">
              <Trans i18nKey="about.description_1" components={{ bold: <strong /> }} />
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t('about.description_2')}
            </p>
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">{t('about.expectations_title')}</p>
              <ul className="space-y-4">
                {(t('about.expectations_list', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 text-pulse-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mx-auto mt-10 lg:mt-0 max-w-sm lg:max-w-md">
            <div className="absolute top-4 left-4 w-full h-full bg-pulse-200 rounded-2xl -z-10"></div>
            <img
              src="/nathan-profile.jpg"
              alt="Nathan Lopes"
              className="w-full h-auto rounded-2xl shadow-lg border-4 border-white object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
