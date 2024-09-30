import { useTranslation } from "react-i18next";

type Props = {
  tech: string;
  years?: number;
  proficiency?: number;
};

export const TechPill = ({ tech, years, proficiency }: Props) => {
  const { t } = useTranslation();
  const proficiencyLevels = [
    t("techs.proficiencyBasic"),
    t("techs.proficiencyModerate"),
    t("techs.proficiencyGood"),
    t("techs.proficiencyVeryGood"),
    t("techs.proficiencyExcellent"),
  ];

  const tooltipClasses = [
    "absolute hidden z-10 group-hover:flex flex-col left-0 top-12 h-fit",
    "bg-primary text-copy text-2xs z-10 py-1 px-2 rounded-md whitespace-nowrap",
    "lg:top-20 lg:py-2 lg:px-4 lg:text-sm",
  ];

  return (
    <span className="group relative pill py-1 px-4 text-xs font-semibold cursor-default lg:py-4 lg:px-8 lg:text-md">
      {tech}
      {(years || proficiency) && (
        <div className={tooltipClasses.join(" ")}>
          {years && <span>{t("techs.years", { years })}</span>}
          {proficiency && <span>{proficiencyLevels[proficiency - 1]}</span>}
        </div>
      )}
    </span>
  );
};
