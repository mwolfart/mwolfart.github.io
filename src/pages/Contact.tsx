import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in py-12 flex flex-col md:flex-row gap-12">
      <div className="flex-1">
        <h1 className="section-title mb-8">{t('contact.title')}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          I'm currently available for freelance work or full-time opportunities. 
          If you have a project that needs some creative touch, or just want to say hi, feel free to drop me a message.
        </p>

        <div className="space-y-6">
          <a href="mailto:contact@mwolfart.com" className="flex items-center gap-4 text-xl hover:text-[var(--color-accent)] transition-colors p-4 glass-panel group">
            <FaEnvelope className="text-[var(--color-accent)]" />
            <span>contact@mwolfart.com</span>
          </a>
          <a href="https://linkedin.com/in/mwolfart" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-[var(--color-accent)] transition-colors p-4 glass-panel group">
            <FaLinkedin className="text-[var(--color-accent)]" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/mwolfart" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-[var(--color-accent)] transition-colors p-4 glass-panel group">
            <FaGithub className="text-[var(--color-accent)]" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="flex-1 glass-panel p-8">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">Name</label>
            <input type="text" id="name" className="w-full bg-[rgba(0,0,0,0.3)] border border-[var(--color-border)] rounded-lg p-3 text-white focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">Email</label>
            <input type="email" id="email" className="w-full bg-[rgba(0,0,0,0.3)] border border-[var(--color-border)] rounded-lg p-3 text-white focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">Message</label>
            <textarea id="message" rows={5} className="w-full bg-[rgba(0,0,0,0.3)] border border-[var(--color-border)] rounded-lg p-3 text-white focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="Hello..." />
          </div>
          <button type="submit" className="w-full bg-[var(--color-accent)] text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
