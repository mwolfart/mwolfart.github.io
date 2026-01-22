import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]';

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/tech', label: t('nav.tech') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel-header border-b border-[var(--glass-border)]">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold font-mono tracking-tighter">
          MW<span className="text-[var(--color-accent)]">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-sm font-medium hover:text-white transition-colors capitalize ${isActive(item.path)}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {/* Mobile menu toggle would go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
