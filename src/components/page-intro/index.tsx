import { useTranslation } from "react-i18next";

export const IntroPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-32 pb-16 gap-24 overflow-hidden">
      <div className="flex flex-col gap-2 px-10 w-fit">
        <div className="text-md px-4">{t("home.prefix")}</div>
        <div className="text-primary text-2xl">{t("home.name")}</div>
        <div className="text-md self-end px-4">{t("home.suffix")}</div>
      </div>
      <img
        src="/images/profile_complete.png"
        alt=""
        className="-mr-8 w-96 aspect-square p-4 border border-primary overflow-auto object-cover object-[0_-45px] rounded-full self-end"
      />
    </div>
  );
};
