import { useTranslation } from "react-i18next";
import { Carousel } from "../carousel";

export const Cobalt = () => {
  const { t } = useTranslation();

  return (
    <Carousel negative>
      <p>{t("projects.cobalt.one")}</p>
      <p>{t("projects.cobalt.one")}</p>
    </Carousel>
  );
};
