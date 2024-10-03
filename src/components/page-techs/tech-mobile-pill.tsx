import { useTranslation } from "react-i18next";

type Props = {
  tech: string;
  years?: number;
  proficiency?: number;
};

export const MobileTechPill = ({ tech, years, proficiency }: Props) => {
  const { t } = useTranslation();
  const proficiencyLevels = [
    t("techs.proficiencyBasic"),
    t("techs.proficiencyModerate"),
    t("techs.proficiencyGood"),
    t("techs.proficiencyVeryGood"),
    t("techs.proficiencyExcellent"),
  ];

  return (
    <span
      className="bg-copy rounded-xl text-background p-4 text-sm font-semibold flex flex-row gap-4 justify-between h-[5.5rem]"
      tabIndex={0}
    >
      <p className="flex-grow">{tech}</p>
      {(years || proficiency) && (
        <div className="flex flex-col gap-2 justify-between text-right text-2xs leading-4">
          {years && (
            <span className="whitespace-nowrap">
              {t("techs.years", { years })}
            </span>
          )}
          {proficiency && (
            <span className="whitespace-nowrap">
              {proficiencyLevels[proficiency - 1]}
            </span>
          )}
        </div>
      )}
    </span>
  );
};
