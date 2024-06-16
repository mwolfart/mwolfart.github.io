import { Trans, useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col flex-grow py-32 px-16 gap-8">
      <h1 className="text-primary">{t("about.title")}</h1>
      <div className="h-[1px] bg-copy w-full" />
      <div className="flex-grow flex flex-col gap-4 [&_span]:text-primary">
        <p>
          <Trans i18nKey="about.one">
            Software developer with <span>7+</span> years of vast experience,
            having worked with a variety of technologies ranging from
            <span>NextJS</span> and <span>React</span> to <span>Golang</span>
            and <span>MongoDB</span>.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="about.two">
            I have worked in more than <span>10</span> different projects,
            ranging from small websites to large-scale applications, and have
            experience with <span>front-end</span>, <span>back-end</span>,
            <span>databases</span> and <span>DevOps</span>.
          </Trans>
        </p>
      </div>
      <div className="h-[1px] bg-copy w-full" />
    </div>
  );
};
