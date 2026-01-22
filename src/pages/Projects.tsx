import { useTranslation } from 'react-i18next';
import Card from '../components/UI/Card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();

  // This would ideally come from a CMS or JSON file
  const projects = [
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      tags: ["React", "TypeScript", "Vite", "i18n", "CSS"],
      github: "https://github.com/mwolfart/mwolfart.github.io"
    },
    {
      title: t('projects.emafy.title'),
      description: t('projects.emafy.description'),
      tags: ["React", "TypeScript", "CRA", "Styled Components", "Jest", "RTL"],
      link: "https://mwolfart.github.io/emafy",
      github: "https://github.com/mwolfart/emafy"
    },
    {
      title: t('projects.expensable.title'),
      description: t('projects.expensable.description'),
      tags: ["React", "Remix", "Tailwind", "Prisma", "MongoDB", "Recharts", "Formik"],
      link: "https://expensable.vercel.app/",
      github: "https://github.com/mwolfart/expensable-web"
    },
    {
      title: t('projects.cobaltui.title'),
      description: t('projects.cobaltui.description'),
      tags: ["React", "Storybook", "Vite", "Typescript"],
      link: "https://mwolfart.github.io/cobalt-ui",
      github: "https://github.com/mwolfart/cobalt-ui"
    }
  ];

  return (
    <div className="animate-fade-in py-4 md:py-12">
      <h1 className="section-title text-center block mx-auto mb-16">{t('projects.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            icon={project.link && <FaExternalLinkAlt className="text-xl opacity-50" />}
            footer={
              <div className="flex justify-end">
                {project.github && (
                  <a className="text-white hover:text-[var(--color-accent)] transition-colors" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl" />
                  </a>
                )}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
