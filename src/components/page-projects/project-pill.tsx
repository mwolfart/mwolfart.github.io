import { IconType } from "react-icons";
import "./project-pill.css";
import { useTranslation } from "react-i18next";
import { KeyboardEventHandler, ReactNode } from "react";

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

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (!active && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onProjectOpen();
    }
  };

  return (
    <div
      onClick={onProjectOpen}
      className={classes.join(" ")}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="description">
        {<IconComponent size={32} className="w-8 min-w-8" />}
        <div className="flex flex-col gap-1 lg:gap-2">
          <span className="font-semibold text-sm lg:text-lg">{title}</span>
          <p className="text-xs lg:text-md">{description}</p>
        </div>
      </div>
      <div className="content">
        <div className="flex-grow flex flex-col lg:pt-4">{content}</div>
        <button
          onClick={onClose}
          className="pill bg-primary text-copy py-2 px-4 lg:py-4 lg:px-8 w-fit"
        >
          {t("projects.back")}
        </button>
      </div>
    </div>
  );
};
