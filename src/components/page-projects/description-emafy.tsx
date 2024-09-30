import { Trans, useTranslation } from "react-i18next";
import { Carousel } from "../carousel";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../constants/breakpoints";

export const Emafy = () => {
  const { t } = useTranslation();
  const isScreenLg = useMediaQuery({ query: mediaQueries.lg });

  const paragraphs = [
    <p key={1}>{t("projects.emafy.one")}</p>,
    <p key={2}>{t("projects.emafy.two")}</p>,
    <p key={3}>{t("projects.emafy.three")}</p>,
    <p key={4}>
      <Trans i18nKey="projects.emafy.link">
        The website is deployed at
        <a
          href="https://mwolfart.github.io/emafy"
          target="_blank"
          rel="noreferrer"
        >
          Github Pages
        </a>
        .
      </Trans>
    </p>,
  ];

  return (
    <Carousel negative>
      <div className="flex flex-col gap-4">
        {isScreenLg ? paragraphs : paragraphs[0]}
      </div>
      {!isScreenLg && (
        <div className="flex flex-col gap-4">{paragraphs[1]}</div>
      )}
      {!isScreenLg && (
        <div className="flex flex-col gap-4">
          {paragraphs[2]}
          {paragraphs[3]}
        </div>
      )}
    </Carousel>
  );
};
