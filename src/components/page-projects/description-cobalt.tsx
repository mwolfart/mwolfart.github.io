import { useTranslation } from "react-i18next";
import { Carousel } from "../carousel";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../constants/breakpoints";

export const Cobalt = () => {
  const { t } = useTranslation();
  const isScreenLg = useMediaQuery({ query: mediaQueries.lg });

  return (
    <Carousel negative>
      <div className="flex flex-col gap-4">
        <p>{t("projects.cobalt.one")}</p>
        {isScreenLg && <p>{t("projects.cobalt.two")}</p>}
      </div>
      {!isScreenLg && (
        <div className="flex flex-col gap-4">
          <p>{t("projects.cobalt.two")}</p>
        </div>
      )}
    </Carousel>
  );
};
