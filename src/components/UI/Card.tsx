import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, tags, link, icon, footer, className = '' }) => {
  const Content = () => (
    <div className={`p-6 h-full flex flex-col glass-panel transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        {icon && <div className="text-3xl text-[var(--color-accent)]">{icon}</div>}
      </div>
      
      {description && (
        <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-[rgba(255,255,255,0.05)] text-[var(--color-text-secondary)] border border-[rgba(255,255,255,0.05)]">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {footer && <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">{footer}</div>}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <Content />
      </a>
    );
  }

  return (
    <div className="h-full group">
      <Content />
    </div>
  );
};

export default Card;
