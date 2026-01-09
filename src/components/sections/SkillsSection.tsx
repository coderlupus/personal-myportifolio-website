import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Code2, Database, Layout, Users, Brain, Rocket, Shield } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300 transform hover:-translate-y-1"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const hardSkills = [
    {
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('skills.items.languages.title'),
      description: t('skills.items.languages.desc')
    },
    {
      icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('skills.items.frontend.title'),
      description: t('skills.items.frontend.desc')
    },
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('skills.items.backend.title'),
      description: t('skills.items.backend.desc')
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('skills.items.interests.title'),
      description: t('skills.items.interests.desc')
    }
  ];

  const softSkills = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('skills.items.leadership.title'),
      description: t('skills.items.leadership.desc')
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('skills.items.strategy.title'),
      description: t('skills.items.strategy.desc')
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('skills.items.collaboration.title'),
      description: t('skills.items.collaboration.desc')
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="skills" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>{t('skills.chip')}</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            {t('skills.title')}
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Hard Skills Section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 opacity-0 fade-in-element">
            <span className="w-2 h-8 bg-pulse-500 rounded-full inline-block"></span>
            {t('skills.hard_title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {hardSkills.map((skill, index) => (
              <FeatureCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 opacity-0 fade-in-element delay-300">
            <span className="w-2 h-8 bg-green-500 rounded-full inline-block"></span>
            {t('skills.soft_title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {softSkills.map((skill, index) => (
              <FeatureCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                index={index + 4} // Offset
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
