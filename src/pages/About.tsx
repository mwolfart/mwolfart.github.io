import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto animate-fade-in py-12">
      <h1 className="section-title mb-12">{t('about.title')}</h1>
      
      <div className="space-y-6 text-lg text-[var(--color-text-secondary)]">
        <p>
          <Trans i18nKey="about.one">
            <span className="text-[var(--color-accent)]">▹</span>
            <span className="text-[var(--color-accent)]">▹</span>
          </Trans>
        </p>
        <p>
          <Trans i18nKey="about.two">
            <span className="text-[var(--color-accent)]">▹</span>
            <span className="text-[var(--color-accent)]">▹</span>
          </Trans>
        </p>
        <p>
          <Trans i18nKey="about.three">
            <span className="text-[var(--color-accent)]">▹</span>
            <span className="text-[var(--color-accent)]">▹</span>
          </Trans>
        </p>
        <p>
          <Trans i18nKey="about.four">
            <span className="text-[var(--color-accent)]">▹</span>
            <span className="text-[var(--color-accent)]">▹</span>
          </Trans>
        </p>
      </div>
    </div>
  );
};

export default About;
