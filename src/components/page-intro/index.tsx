import { Trans, useTranslation } from "react-i18next";
import { BackgroundShape } from "../bg-shape";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../constants/breakpoints";

export const IntroPage = () => {
  const { t } = useTranslation();
  const isScreenXl = useMediaQuery({ query: mediaQueries.xl });

  return (
    <div className="h-full w-full flex flex-col gap-24 relative">
      <div className="flex flex-col gap-2 w-fit pt-6 h-full">
        <p className="text-md px-4 lg:text-xl">{t("home.prefix")}</p>
        <h1 className="text-primary text-xl font-semibold lg:text-3xl">
          {t("home.name")}
        </h1>
        <p className="text-md self-end px-4 lg:text-xl">{t("home.suffix")}</p>
        <div className="hidden lg:block flex-grow w-2/3">
          <div className="absolute bottom-[10%] right-1/3 flex flex-col gap-8 py-8 border-t border-b border-copy [&_span]:text-primary">
            <p>
              <Trans i18nKey="about.one">
                Software developer with <span>7+</span> years of vast
                experience, having worked with a variety of technologies
                technologies including <span>NextJS</span>, <span>React</span>,
                <span>Styled Components</span> and <span>Redux</span>
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.two">
                I have worked in more than <span>10</span> different projects,
                ranging from small websites to large-scale applications, and
                have experience not just with <span>front-end</span> but with
                <span>back-end</span> as well.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.three">
                Beyond technical skills, I also have
                <span>strong communication skills</span> and aptness for
                engaging in <span>cross-functional teams</span>, working closely
                with designers, QAs and other developers, often making use of
                <span>agile</span> practices and frameworks.
              </Trans>
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/profile_complete.webp"
        alt=""
        aria-hidden
        className="absolute bottom-8 -right-20 w-96 aspect-square p-4 border border-primary overflow-auto object-cover object-[0_-45px] rounded-full self-end"
      />
      <BackgroundShape className="w-96 -left-32 -top-48" />
      <BackgroundShape className="w-32 left-48 top-0 border-background-tertiary [&>div]:bg-background-tertiary" />
      {/* {isScreenXl && (
        <img
          src="/images/workspace.jpg"
          className="hidden xl:block absolute w-[36rem] -right-32 -top-[24rem] object-cover rounded-full aspect-square"
        />
      )} */}
      {isScreenXl && (
        <BackgroundShape className="hidden xl:block w-[48rem] -right-36 -top-[28rem]" />
      )}
    </div>
  );
};
