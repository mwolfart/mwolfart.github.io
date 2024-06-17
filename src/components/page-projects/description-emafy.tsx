import { Trans, useTranslation } from "react-i18next";
import { Carousel } from "../carousel";

export const Emafy = () => {
  const { t } = useTranslation();

  return (
    <Carousel negative>
      <div className="flex flex-col gap-4">
        <p>{t("projects.emafy.one")}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>{t("projects.emafy.two")}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>{t("projects.emafy.three")}</p>
        <p>
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
        </p>
      </div>
    </Carousel>
  );
};
