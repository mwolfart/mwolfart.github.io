import { useTranslation } from "react-i18next";
import { FaMusic, FaToolbox } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BackgroundShape } from "../bg-shape";
import { useState } from "react";
import { ProjectPill } from "./project-pill";
import { Expensable } from "./description-expensable";
import { Emafy } from "./description-emafy";
import { Cobalt } from "./description-cobalt";

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(-1);

  const projects = [
    {
      IconComponent: FaMoneyCheckDollar,
      title: t("projects.expensable.title"),
      description: t("projects.expensable.short"),
      content: <Expensable />,
    },
    {
      IconComponent: FaMusic,
      title: t("projects.emafy.title"),
      description: t("projects.emafy.short"),
      content: <Emafy />,
    },
    {
      IconComponent: FaToolbox,
      title: t("projects.cobalt.title"),
      description: t("projects.cobalt.short"),
      content: <Cobalt />,
    },
  ];

  return (
    <div className="flex-grow flex flex-col relative max-h-full">
      <div className="flex-grow flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="lg:text-lg">{t("projects.intro")}</p>
          <p className="pl-28 text-primary font-semibold text-2xl lg:text-3xl">
            {t("projects.title")}
          </p>
        </div>
        <div className="flex-grow flex flex-col gap-4">
          {projects.map(
            ({ IconComponent, title, description, content }, idx) => (
              <ProjectPill
                IconComponent={IconComponent}
                title={title}
                description={description}
                key={idx}
                content={content}
                onOpen={() => setActiveItem(idx)}
                onClose={() => setActiveItem(-1)}
                active={idx === activeItem}
                hidden={activeItem !== -1 && idx !== activeItem}
              />
            )
          )}
        </div>
      </div>
      <BackgroundShape className="w-96 -bottom-16 -right-48" />
    </div>
  );
};
