import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
  href?: string;
}

const ProjectCard = ({
  content,
  author,
  role,
  gradient,
  backgroundImage = "/background-section1.png",
  href = "#"
}: TestimonialProps) => {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      rel={href.startsWith('http') ? "noopener noreferrer" : ""}
      className="block group h-full overflow-hidden rounded-lg relative shadow-lg"
    >
      <div
        className={`bg-cover bg-center h-full flex flex-col justify-between text-white p-8 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br ${gradient}`}
        style={{ backgroundImage: `url('${backgroundImage}')`, backgroundBlendMode: 'overlay' }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <p className="text-xl font-medium leading-relaxed pr-8 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
            {content}
          </p>

          <div className="flex items-end justify-between mt-8">
            <div>
              <h4 className="font-bold text-2xl mb-1 group-hover:text-pulse-200 transition-colors drop-shadow-md">{author}</h4>
              <p className="text-white/80 text-sm font-medium tracking-wide uppercase">{role}</p>
            </div>

            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const projectsConfig = [
    {
      gradient: "from-pink-600 via-rose-500 to-orange-400",
      backgroundImage: "/background-section1.png",
      href: "https://github.com/fundaoimd/projeto_es_frontend"
    },
    {
      gradient: "from-blue-700 via-indigo-800 to-purple-900",
      backgroundImage: "/background-section2.png",
      href: "https://www.staysalmar.com/"
    },
    {
      gradient: "from-orange-700 via-amber-600 to-yellow-500",
      backgroundImage: "/background-section3.png",
      href: "/documents/livro-nordeste.pdf"
    },
    {
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      backgroundImage: "/background-section1.png",
      href: "https://nutripatriciamonteiro.vercel.app"
    }
  ];

  const translatedItems = t('projects.items', { returnObjects: true }) as Array<{ content: string, author: string, role: string }>;

  const projects: TestimonialProps[] = projectsConfig.map((config, index) => ({
    ...config,
    content: translatedItems[index]?.content || "",
    author: translatedItems[index]?.author || "",
    role: translatedItems[index]?.role || ""
  }));

  return (
    <section className="py-20 bg-white relative" id="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 relative z-10">
          <div>
            <div className="pulse-chip mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">4</span>
              <span>{t('projects.chip')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              {t('projects.title')}
            </h2>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors py-2 border-b border-transparent hover:border-gray-900 relative z-20 cursor-pointer"
          >
            <span className="font-medium text-sm tracking-wide">{t('projects.view_all')}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, index) => (
            <div key={index} className="h-[400px]">
              <ProjectCard
                content={project.content}
                author={project.author}
                role={project.role}
                gradient={project.gradient}
                backgroundImage={project.backgroundImage}
                href={project.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
