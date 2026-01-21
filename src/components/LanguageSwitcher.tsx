import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md'; // Assuming react-icons is installed as per package.json

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-accent)] transition-all duration-300 group"
      aria-label="Toggle Language"
    >
      <MdLanguage className="text-xl group-hover:text-white" />
      <span className="text-sm font-medium uppercase font-mono">{i18n.language}</span>
    </button>
  );
};

export default LanguageSwitcher;
