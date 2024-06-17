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

  return (
    <span className="group relative pill py-1 px-4 text-xs font-semibold cursor-default">
      {tech}
      {(years || proficiency) && (
        <div className="absolute hidden z-10 group-hover:flex flex-col left-0 top-12 h-fit bg-primary text-copy text-2xs z-10 py-1 px-2 rounded-md whitespace-nowrap">
          {years && <span>{t("techs.years", { years })}</span>}
          {proficiency && <span>{proficiencyLevels[proficiency - 1]}</span>}
        </div>
      )}
    </span>
  );
};
