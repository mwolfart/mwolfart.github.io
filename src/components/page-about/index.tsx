import { Trans, useTranslation } from "react-i18next";
import { Carousel } from "../carousel";
import { BackgroundShape } from "../bg-shape";
import { mediaQueries } from "../../constants/breakpoints";
import { useMediaQuery } from "react-responsive";

export const AboutPage = () => {
  const { t } = useTranslation();
  const isScreenMd = useMediaQuery({ query: mediaQueries.md });

  const paragraphs = [
    <p key={1}>
      <Trans i18nKey="about.one">
        Software developer with <span>7+</span> years of vast experience, having
        worked with a variety of technologies ranging from
        <span>NextJS</span> and <span>React</span> to
        <span>Golang</span>
        and <span>MongoDB</span>.
      </Trans>
    </p>,
    <p key={2}>
      <Trans i18nKey="about.two">
        I have worked in more than <span>10</span> different projects, ranging
        from small websites to large-scale applications, and have experience
        with <span>front-end</span>,<span>back-end</span>,<span>databases</span>
        and
        <span>DevOps</span>.
      </Trans>
    </p>,
    <p key={3}>
      <Trans i18nKey="about.three">
        Beyond technical skills, I also have
        <span>strong communication skills</span> and aptness for engaging in
        <span>cross-functional teams</span>, working closely with designers, QAs
        and other developers, often making use of
        <span>agile</span> practices and frameworks.
      </Trans>
    </p>,
    <p key={4}>{t("about.four")}</p>,
  ];

  return (
    <div className="flex flex-col flex-grow gap-8 [&_span]:text-primary relative">
      <h1 className="text-primary font-semibold">{t("about.title")}</h1>
      <div className="h-[1px] bg-copy w-full" />
      <div className="flex flex-col flex-grow pb-12 lg:pb-0">
        <Carousel>
          <div className="flex flex-col gap-4">
            {isScreenMd ? paragraphs : paragraphs.slice(0, 2)}
          </div>
          {!isScreenMd && paragraphs[2]}
          {!isScreenMd && paragraphs[3]}
        </Carousel>
      </div>
      <BackgroundShape className="w-96 -bottom-48 -left-48" />
    </div>
  );
};
