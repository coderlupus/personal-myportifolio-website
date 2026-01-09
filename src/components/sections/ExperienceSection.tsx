import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';

interface ExperienceProps {
  content: string;
  author: string;
  role: string;
  period: string;
  backgroundImage?: string;
}

const ExperienceCard = ({
  content,
  author,
  role,
  period,
  backgroundImage = "/background-section1.png"
}: ExperienceProps) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >


      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{content}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
          <p className="text-white/60 text-sm mt-1">{period}</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const experienceConfig = [
    { backgroundImage: "/background-section1.png" },
    { backgroundImage: "/background-section2.png" },
    { backgroundImage: "/background-section3.png" },
    { backgroundImage: "/background-section1.png" }
  ];

  const translatedItems = t('experience.items', { returnObjects: true }) as Array<{ content: string, author: string, role: string, period: string }>;

  const experiences: ExperienceProps[] = experienceConfig.map((config, index) => ({
    ...config,
    content: translatedItems[index]?.content || "",
    author: translatedItems[index]?.author || "",
    role: translatedItems[index]?.role || "",
    period: translatedItems[index]?.period || ""
  }));

  return (
    <section className="py-12 bg-gray-50 relative" id="experience" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">5</span>
            <span>{t('experience.chip')}</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-12 text-left">{t('experience.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              content={experience.content}
              author={experience.author}
              role={experience.role}
              period={experience.period}
              backgroundImage={experience.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;