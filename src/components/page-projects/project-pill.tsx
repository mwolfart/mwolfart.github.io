import { IconType } from "react-icons";
import "./project-pill.css";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

type Props = {
  IconComponent: IconType;
  title: string;
  description: string;
  content: ReactNode;
  onOpen: () => void;
  onClose: () => void;
  active?: boolean;
  hidden?: boolean;
};

export const ProjectPill = ({
  IconComponent,
  title,
  description,
  content,
  onOpen,
  onClose,
  active,
  hidden,
}: Props) => {
  const { t } = useTranslation();
  const classes = ["project-pill"];
  active && classes.push("active");
  hidden && classes.push("collapsed");

  const onProjectOpen = () => {
    if (!active) {
      onOpen();
    }
  };

  return (
    <div onClick={onProjectOpen} className={classes.join(" ")}>
      <div className="description">
        {<IconComponent size={32} className="w-8 min-w-8" />}
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{title}</span>
          <p className="text-xs">{description}</p>
        </div>
      </div>
      <div className="content">
        <div className="flex-grow flex flex-col">{content}</div>
        <button
          onClick={onClose}
          className="pill bg-primary text-copy py-2 px-4 w-fit"
        >
          {t("projects.back")}
        </button>
      </div>
    </div>
  );
};
