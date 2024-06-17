import { useTranslation } from "react-i18next";
import { FaMusic, FaToolbox } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BackgroundShape } from "../bg-shape";
import { useState } from "react";
import { ProjectPill } from "./project-pill";

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(-1);

  const projects = [
    {
      IconComponent: FaMoneyCheckDollar,
      title: t("projects.expensable"),
      description: t("projects.expensableShort"),
      content: <div>Foo</div>,
    },
    {
      IconComponent: FaMusic,
      title: t("projects.emafy"),
      description: t("projects.emafyShort"),
      content: <div>Bar</div>,
    },
    {
      IconComponent: FaToolbox,
      title: t("projects.cobalt"),
      description: t("projects.cobaltShort"),
      content: <div>Baz</div>,
    },
  ];

  return (
    <div className="flex-grow flex flex-col gap-8 relative">
      <div className="flex flex-col gap-2">
        <p>{t("projects.intro")}</p>
        <p className="pl-28 text-primary font-semibold text-2xl">
          {t("projects.title")}
        </p>
      </div>
      <div className="flex-grow flex flex-col gap-4">
        {projects.map(({ IconComponent, title, description, content }, idx) => (
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
        ))}
      </div>
      <BackgroundShape className="w-96 -bottom-16 -right-48" />
    </div>
  );
};
