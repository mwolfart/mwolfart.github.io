import { useTranslation } from "react-i18next";
import technologies from "../../constants/technologies";
import { Carousel } from "../carousel";
import { TechPill } from "./tech-pill";

export const TechsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8">
      <p>{t("techs.intro")}</p>
      <div className="flex-grow">
        <Carousel>
          <div className="flex flex-wrap gap-4 &>*:w-fit">
            {technologies
              .slice(0, 20)
              .map(({ name, years, proficiency }, idx) => (
                <TechPill
                  key={idx}
                  tech={name}
                  years={years}
                  proficiency={proficiency}
                />
              ))}
          </div>
          <div className="flex flex-wrap gap-4 &>*:w-fit">
            {technologies
              .slice(20, 40)
              .map(({ name, years, proficiency }, idx) => (
                <TechPill
                  key={idx}
                  tech={name}
                  years={years}
                  proficiency={proficiency}
                />
              ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};
