import { useTranslation } from 'react-i18next';
import Card from '../components/UI/Card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();

  // This would ideally come from a CMS or JSON file
  const projects = [
    {
      title: "Portfolio Website",
      description: "You are looking at it! A fully internationalized personal portfolio built with React, Vite, and Vanilla CSS.",
      tags: ["React", "TypeScript", "Vite", "i18n", "CSS"],
      link: "https://github.com/mwolfart/mwolfart.github.io"
    },
    {
      title: "Task Master",
      description: "A productivity application for managing daily tasks and workflows with team collaboration features.",
      tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
      link: "#"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for an e-commerce platform with real-time analytics and inventory management.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"], // Mentioning Tailwind as a skill used in past, even if not here
      link: "#"
    }
  ];

  return (
    <div className="animate-fade-in py-12">
      <h1 className="section-title text-center block mx-auto mb-16">{t('projects.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            icon={<FaExternalLinkAlt className="text-xl opacity-50" />}
            footer={
              <div className="flex justify-end">
                <FaGithub className="text-xl hover:text-white transition-colors" />
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
