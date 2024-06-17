import { useTranslation } from "react-i18next";
import { FaMusic, FaToolbox } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BackgroundShape } from "../bg-shape";

export const ProjectsPage = () => {
  const { t } = useTranslation();

  const projects = [
    {
      IconComponent: FaMoneyCheckDollar,
      title: t("projects.expensable"),
      description: t("projects.expensableShort"),
    },
    {
      IconComponent: FaMusic,
      title: t("projects.emafy"),
      description: t("projects.emafyShort"),
    },
    {
      IconComponent: FaToolbox,
      title: t("projects.cobalt"),
      description: t("projects.cobaltShort"),
    },
  ];

  return (
    <div className="flex flex-col gap-8 relative">
      <div className="flex flex-col gap-2">
        <p>{t("projects.intro")}</p>
        <p className="pl-28 text-primary font-semibold text-2xl">
          {t("projects.title")}
        </p>
      </div>
      <div className="grid gap-4 auto-rows-fr">
        {projects.map(({ IconComponent, title, description }) => (
          <div className="group flex items-center gap-4 bg-copy text-background rounded-full py-4 px-8 transition cursor-pointer hover:bg-primary">
            {<IconComponent size={32} className="w-8 min-w-8" />}
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-primary group-hover:text-copy">
                {title}
              </span>
              <p className="text-xs">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <BackgroundShape className="w-96 -bottom-80 -right-48" />
    </div>
  );
};
