import { useTranslation } from "react-i18next";
import technologies from "../../constants/technologies";
import { Carousel } from "../carousel";
import { TechPill } from "./tech-pill";
import { BackgroundShape } from "../bg-shape";
import { mediaQueries } from "../../constants/breakpoints";
import { useMediaQuery } from "react-responsive";
import { MobileTechPill } from "./tech-mobile-pill";

export const TechsPage = () => {
  const { t } = useTranslation();

  const isScreenMd = useMediaQuery({ query: mediaQueries.md });

  const techsPerPageInMobile = 5;
  const mobileControlArray = Array.from({
    length: Math.ceil(technologies.length / techsPerPageInMobile),
  });

  return (
    <div className="flex flex-col gap-4 md:gap-8 relative flex-grow">
      <p className="lg:text-xl">{t("techs.intro")}</p>
      <div className="flex flex-col">
        {isScreenMd ? (
          <div className="flex flex-wrap gap-4 &>*:w-fit">
            {technologies.map(({ name, years, proficiency }, idx) => (
              <TechPill
                key={idx}
                tech={name}
                years={years}
                proficiency={proficiency}
              />
            ))}
          </div>
        ) : (
          <Carousel>
            {mobileControlArray.map((_, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                {technologies
                  .slice(
                    idx * techsPerPageInMobile,
                    (idx + 1) * techsPerPageInMobile
                  )
                  .map(({ name, years, proficiency }, idx) => (
                    <MobileTechPill
                      key={idx}
                      tech={name}
                      years={years}
                      proficiency={proficiency}
                    />
                  ))}
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <BackgroundShape className="w-96 -bottom-80 -left-48" />
    </div>
  );
};
