import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center text-center animate-fade-in py-20 px-4">
      <h1 className="text-8xl md:text-9xl font-bold font-mono text-[var(--color-accent)] mb-4 drop-shadow-[0_0_15px_rgba(255,77,77,0.5)]">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
        {t('not_found.title')}
      </h2>
      <p className="text-[var(--color-text-secondary)] text-lg max-w-md mb-12">
        {t('not_found.description')}
      </p>
      
      <Link 
        to="/"
        className="px-8 py-3.5 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-[0_4px_14px_0_rgba(255,77,77,0.39)] hover:shadow-[0_6px_20px_rgba(255,77,77,0.23)] hover:-translate-y-0.5"
      >
        {t('not_found.button')}
      </Link>
    </div>
  );
};

export default NotFound;
