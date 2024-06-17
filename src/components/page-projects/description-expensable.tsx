import { Trans, useTranslation } from "react-i18next";
import { Carousel } from "../carousel";

export const Expensable = () => {
  const { t } = useTranslation();

  return (
    <Carousel negative>
      <div className="flex flex-col gap-4">
        <p>{t("projects.expensable.one")}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>{t("projects.expensable.two")}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>{t("projects.expensable.three")}</p>
        <p>
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
        </p>
      </div>
    </Carousel>
  );
};
