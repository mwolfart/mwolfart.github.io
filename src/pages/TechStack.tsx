import { useTranslation } from 'react-i18next';

interface Tech {
  name: string;
  startDate?: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  level?: "beginner" | "intermediate" | "advanced";
  category: "frontend" | "backend" | "tools";
}

const TechStack = () => {
  const { t } = useTranslation();

  const technologies: Tech[] = [
    { name: "HTML", startDate: "2018-01-01", category: "frontend" },
    { name: "CSS", startDate: "2018-01-01", category: "frontend" },
    { name: "JavaScript", startDate: "2018-01-01", category: "frontend" },
    { name: "TypeScript", startDate: "2019-01-01", category: "frontend" },
    { name: "React", startDate: "2020-03-01", category: "frontend" },
    { name: "NextJS", startDate: "2022-03-01", category: "frontend" },
    { name: "Angular", startDate: "2020-01-01", endDate: "2021-01-01", category: "frontend" },
    { name: "Remix", startDate: "2024-01-01", endDate: "2025-01-01", category: "frontend" },
    { name: "React Native", startDate: "2023-01-01", endDate: "2024-01-01", category: "frontend" },
    { name: "Tailwind CSS", level: "advanced", category: "frontend" },
    { name: "Styled Components", level: "advanced", category: "frontend" },
    { name: "Unit testing", level: "advanced", category: "frontend" },
    { name: "Storybook", level: "advanced", category: "frontend" },
    { name: "CSS Modules", level: "advanced", endDate: "2024-01-01",  category: "frontend" },
    { name: "Sass", level: "advanced", category: "frontend" },
    { name: "MaterialUI", level: "advanced", category: "frontend" },
    { name: "Astro", level: "intermediate", category: "frontend" },
    { name: "React Query", level: "advanced", category: "frontend" },
    { name: "Responsiveness", level: "advanced", category: "frontend" },
    { name: "Accessibility", level: "advanced", category: "frontend" },
    { name: "jQuery", level: "intermediate", category: "frontend" },
    { name: "Node.js", startDate: "2025-01-01", category: "backend" },
    { name: "Python", startDate: "2022-01-01", endDate: "2023-01-01", category: "backend" },
    { name: "Elixir", startDate: "2024-01-01", endDate: "2025-01-01", category: "backend" },
    { name: "Django", startDate: "2023-01-01", endDate: "2024-01-01", category: "backend" },
    { name: "MongoDB", level: "intermediate", category: "backend" },
    { name: "Prisma", level: "intermediate", category: "backend" },
    { name: "Git", level: "advanced", category: "tools" },
    { name: "Playwright", level: "advanced", category: "tools" },
    { name: "Cursor", level: "intermediate", category: "tools" },
    { name: "Antigravity", level: "intermediate", category: "tools" },
    { name: "Docker", level: "intermediate", category: "tools" },
    { name: "Jira", level: "intermediate", category: "tools" },
  ];

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    if (years > 1) {
      return `${years}${months > 0 ? `+` : ''} ${t('tech.experience_suffix')}`;
    } else if (years === 1) {
      return `1 ${t('tech.experience_suffix').replace('anos', 'ano').replace('years', 'year')}`;
    }
    return `< 1 ${t('tech.experience_suffix').replace('anos', 'ano').replace('years', 'year')}`;
  };

  const categories = ["frontend", "backend", "tools"];

  return (
    <div className="animate-fade-in py-8">
      <h1 className="section-title text-center block mx-auto mb-16">{t('tech.title')}</h1>

      <div className="space-y-16">
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-8 text-[var(--color-accent)] border-l-4 border-[var(--color-accent)] pl-4">
              {t(`tech.category.${category}`)}
            </h2>
            <div className="flex flex-row flex-wrap gap-4">
              {technologies.filter(tech => tech.category === category).map(tech => (
                <div 
                  key={tech.name}
                  className="p-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent)] hover:bg-[rgba(255,255,255,0.03)] transition-colors group"
                >
                  <h3 className="text-base font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mb-1">
                    {tech.name}
                  </h3>
                  <div className="text-xs font-mono text-[var(--color-text-secondary)]">
                    {tech.startDate && calculateDuration(tech.startDate, tech.endDate)}
                    {tech.level && `${t(`tech.level.${tech.level}`)} ${t('tech.skill_suffix')}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
