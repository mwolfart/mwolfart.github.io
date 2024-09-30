import { useTranslation } from "react-i18next";

export const Cobalt = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <p>{t("projects.cobalt.one")}</p>
      <p>{t("projects.cobalt.two")}</p>
    </div>
  );
};
