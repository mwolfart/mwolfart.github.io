import { Trans, useTranslation } from "react-i18next";
import { Carousel } from "../carousel";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../constants/breakpoints";

export const Expensable = () => {
  const { t } = useTranslation();
  const isScreenLg = useMediaQuery({ query: mediaQueries.lg });

  const paragraphs = [
    <p key={1}>{t("projects.expensable.one")}</p>,
    <p key={2}>{t("projects.expensable.two")}</p>,
    <p key={3}>{t("projects.expensable.three")}</p>,
    <p key={4}>
      <Trans i18nKey="projects.expensable.link">
        An initial version of the app is available at
        <a
          href="https://expensable.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
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
