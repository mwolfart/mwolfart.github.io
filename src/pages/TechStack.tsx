import { useTranslation } from 'react-i18next';
import Card from '../components/UI/Card';

interface Tech {
  name: string;
  startDate: string; // YYYY-MM-DD
  category: "Frontend" | "Backend" | "Tools";
}

const TechStack = () => {
  const { t } = useTranslation();

  const technologies: Tech[] = [
    { name: "JavaScript", startDate: "2018-01-01", category: "Frontend" },
    { name: "React", startDate: "2019-06-01", category: "Frontend" },
    { name: "TypeScript", startDate: "2020-01-01", category: "Frontend" },
    { name: "Node.js", startDate: "2019-01-01", category: "Backend" },
    { name: "Python", startDate: "2017-01-01", category: "Backend" },
    { name: "Git", startDate: "2017-01-01", category: "Tools" },
    { name: "Docker", startDate: "2020-05-01", category: "Tools" },
  ];

  const calculateDuration = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    if (years > 0) {
      return `${years} ${t('tech.experience_suffix')}${months > 0 ? ` +` : ''}`;
    }
    return `< 1 ${t('tech.experience_suffix').replace('anos', 'ano').replace('years', 'year')}`;
  };

  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <div className="animate-fade-in py-12">
      <h1 className="section-title text-center block mx-auto mb-16">{t('tech.title')}</h1>

      <div className="space-y-16">
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-8 text-[var(--color-accent)] border-l-4 border-[var(--color-accent)] pl-4">
              {category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.filter(tech => tech.category === category).map(tech => (
                <Card 
                  key={tech.name}
                  title={tech.name}
                  className="bg-[var(--color-bg-secondary)] border-none"
                  footer={
                    <div className="text-sm font-mono text-[var(--color-accent)]">
                      {calculateDuration(tech.startDate)}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
