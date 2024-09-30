import { useTranslation } from "react-i18next";
import technologies from "../../constants/technologies";
import { Carousel } from "../carousel";
import { TechPill } from "./tech-pill";
import { BackgroundShape } from "../bg-shape";
import { mediaQueries } from "../../constants/breakpoints";
import { useMediaQuery } from "react-responsive";

export const TechsPage = () => {
  const { t } = useTranslation();
  const isScreenMd = useMediaQuery({ query: mediaQueries.md });
  return (
    <div className="flex flex-col gap-8 relative flex-grow">
      <p>{t("techs.intro")}</p>
      <div className="flex flex-col flex-grow">
        <Carousel>
          <div className="flex flex-wrap gap-4 &>*:w-fit">
            {technologies
              .slice(0, isScreenMd ? undefined : 15)
              .map(({ name, years, proficiency }, idx) => (
                <TechPill
                  key={idx}
                  tech={name}
                  years={years}
                  proficiency={proficiency}
                />
              ))}
          </div>
          {!isScreenMd && (
            <div className="flex flex-wrap gap-4 &>*:w-fit">
              {technologies
                .slice(15, 30)
                .map(({ name, years, proficiency }, idx) => (
                  <TechPill
                    key={idx}
                    tech={name}
                    years={years}
                    proficiency={proficiency}
                  />
                ))}
            </div>
          )}
        </Carousel>
      </div>
      <BackgroundShape className="w-96 -bottom-80 -left-48" />
    </div>
  );
};
