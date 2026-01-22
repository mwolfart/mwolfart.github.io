import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]';

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/tech', label: t('nav.tech') },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel-header border-b border-[var(--glass-border)]">
      <div className="container flex items-center justify-between h-16">
        {/* Desktop Logo */}
        <Link to="/" className="hidden md:block text-xl font-bold font-mono tracking-tighter">
          MW<span className="text-[var(--color-accent)]">.</span>
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Desktop Nav */}
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
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-br from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] border-b border-[var(--glass-border)] animate-fade-in flex flex-col p-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-lg font-medium hover:text-white transition-colors capitalize py-2 px-4 rounded hover:bg-[rgba(255,255,255,0.05)] ${isActive(item.path)}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
