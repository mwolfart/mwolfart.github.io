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
            {technologies.slice(0, 20).map((tech, idx) => (
              <TechPill key={idx} tech={tech.name} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 &>*:w-fit">
            {technologies.slice(20, 40).map((tech, idx) => (
              <TechPill key={idx} tech={tech.name} />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};
