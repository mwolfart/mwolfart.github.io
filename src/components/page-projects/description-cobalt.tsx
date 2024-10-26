import { Trans, useTranslation } from "react-i18next";
import { Carousel } from "../carousel";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../constants/breakpoints";

export const Cobalt = () => {
  const { t } = useTranslation();
  const isScreenLg = useMediaQuery({ query: mediaQueries.lg });

  const paragraphTwo = (
    <Trans i18nKey="projects.cobalt.two">
      The component library is publicly deployed to npm registry under the
      identifier of @mwolfart/cobalt-ui and the storybook is avilable at
      <a
        href="https://mwolfart.github.io/cobalt-ui"
        target="_blank"
        rel="noreferrer"
      >
        Github Pages
      </a>
      .
    </Trans>
  );

  return (
    <Carousel negative>
      <div className="flex flex-col gap-4">
        <p>{t("projects.cobalt.one")}</p>
        {isScreenLg && <p>{paragraphTwo}</p>}
      </div>
      {!isScreenLg && (
        <div className="flex flex-col gap-4">
          <p>{paragraphTwo}</p>
        </div>
      )}
    </Carousel>
  );
};
