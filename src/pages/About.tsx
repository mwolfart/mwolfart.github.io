import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto animate-fade-in py-12">
      <h1 className="section-title mb-12">{t('about.title')}</h1>
      
      <div className="space-y-6 text-lg text-[var(--color-text-secondary)]">
        <p>
          {t('about.description')}
        </p>
        <p>
          Since beginning my journey as a developer, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-sm">
          {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Vite', 'HTML & CSS', 'Git'].map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">▹</span> {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
