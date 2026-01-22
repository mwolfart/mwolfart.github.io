import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Assuming standard social icons

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center animate-fade-in relative overflow-hidden py-4 px-4">

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-xl md:text-2xl text-[var(--color-accent)] font-mono mb-4">
            {t('hero.greeting')}
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Murilo Wolfart<span className="text-[var(--color-accent)]">.</span>
          </h2>
          <h3 className="text-3xl md:text-5xl text-[var(--color-text-secondary)] font-semibold mb-8">
            {t('hero.role')}
          </h3>
          <p className="max-w-xl text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link 
              to="/projects"
              className="px-8 py-3.5 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-[0_4px_14px_0_rgba(255,77,77,0.39)] hover:shadow-[0_6px_20px_rgba(255,77,77,0.23)] hover:-translate-y-0.5"
            >
              {t('hero.cta')}
            </Link>
            <div className="flex items-center gap-6 ml-4">
              <a href="https://github.com/mwolfart" target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--color-text-secondary)] hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/mwolfart" target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--color-text-secondary)] hover:text-white transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-4 border-[var(--color-accent)] shadow-[0_0_30px_rgba(255,77,77,0.3)] hover:scale-105 transition-transform duration-500 ease-in-out bg-[var(--color-accent)] overflow-hidden">
            <img 
              src="/images/profile_complete.webp" 
              alt="Murilo Wolfart" 
              className="w-full h-[120%] object-cover"
            />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
