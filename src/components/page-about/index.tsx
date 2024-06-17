import { Trans, useTranslation } from "react-i18next";
import { Carousel } from "../carousel";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col flex-grow py-32 px-16 gap-8 [&_span]:text-primary">
      <h1 className="text-primary font-semibold">{t("about.title")}</h1>
      <div className="h-[1px] bg-copy w-full" />
      <div className="flex-grow">
        <Carousel>
          <div className="flex flex-col gap-4">
            <p>
              <Trans i18nKey="about.one">
                Software developer with <span>7+</span> years of vast
                experience, having worked with a variety of technologies ranging
                from
                <span>NextJS</span> and <span>React</span> to
                <span>Golang</span>
                and <span>MongoDB</span>.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.two">
                I have worked in more than <span>10</span> different projects,
                ranging from small websites to large-scale applications, and
                have experience with <span>front-end</span>,
                <span>back-end</span>,<span>databases</span> and
                <span>DevOps</span>.
              </Trans>
            </p>
          </div>
          <p className="">
            <Trans i18nKey="about.three">
              Beyond technical skills, I also have
              <span>strong communication skills</span> and aptness for engaging
              in <span>cross-functional teams</span>, working closely with
              designers, QAs and other developers, often making use of
              <span>agile</span> practices and frameworks.
            </Trans>
          </p>
          <p className="">{t("about.four")}</p>
        </Carousel>
      </div>
    </div>
  );
};
