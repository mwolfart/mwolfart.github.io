import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { mediaQueries } from "../../constants/breakpoints";
import { useMediaQuery } from "react-responsive";
import { BackgroundShape } from "../bg-shape";

const githubUrl = "https://github.com/mwolfart";
const linkedinUrl = "https://www.linkedin.com/in/murilo-wolfart/";
const email = "mwolfart@gmail.com";

const linkClasses =
  "no-underline inline-flex gap-4 items-center bg-copy text-background py-2 px-4 rounded-full text-xs font-semibold w-fit transition hover:bg-primary lg:text-lg lg:py-4 lg:px-8";

export const ContactPage = () => {
  const { t } = useTranslation();
  const isScreenLg = useMediaQuery({ query: mediaQueries.lg });
  return (
    <div className="h-full relative w-full">
      <div className="flex flex-col gap-8 max-w-4xl">
        <p className="lg:text-xl">{t("contact.getInTouch")}</p>
        <div className="h-[1px] bg-copy w-full" />
        <div className="flex flex-col gap-8">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className={linkClasses}
          >
            <FaGithub size={42} />
            <span>{t("contact.github")}</span>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className={linkClasses}
          >
            <FaLinkedin size={42} />
            <span>{t("contact.linkedin")}</span>
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
            className={linkClasses}
          >
            <MdEmail size={42} />
            <span>{t("contact.email")}</span>
          </a>
        </div>
        {!isScreenLg && <div className="h-[1px] bg-copy w-full" />}
        {isScreenLg && (
          <BackgroundShape className="w-[40rem] -bottom-48 -right-64" />
        )}
        {isScreenLg && (
          <BackgroundShape className="w-48 bottom-16 right-64 border-background-tertiary [&>div]:bg-background-tertiary" />
        )}
      </div>
    </div>
  );
};
