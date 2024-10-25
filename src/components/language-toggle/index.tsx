import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getLanguageLabel } from "../../constants/languages";

export const LanguageToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const { i18n, t } = useTranslation();

  const browserLanguage =
    typeof navigator !== "undefined" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator.language || (navigator as any).userLanguage);

  useLayoutEffect(() => {
    if (browserLanguage) {
      i18n.changeLanguage(browserLanguage);
    }
  }, [browserLanguage, i18n]);

  const menuClasses = [
    "absolute transition -top-24 left-0 right-0 flex flex-col gap-1 bg-copy rounded-lg text-background",
    expanded
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none",
  ];

  return (
    <button
      className="relative rounded-full w-20 bg-copy text-background h-10 cursor-pointer"
      onClick={() => {
        setExpanded(!expanded);
      }}
      aria-label={t("language.change")}
    >
      {getLanguageLabel(i18n.language)}
      <div className={menuClasses.join(" ")}>
        <button
          onClick={() => i18n.changeLanguage("en-US")}
          className="h-10 cursor-pointer"
          tabIndex={expanded ? 0 : -1}
          aria-label={t("language.english")}
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage("pt-BR")}
          className="h-10 cursor-pointer"
          tabIndex={expanded ? 0 : -1}
          aria-label={t("language.portuguese")}
        >
          PT
        </button>
      </div>
    </button>
  );
};
