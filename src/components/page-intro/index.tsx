import { useTranslation } from "react-i18next";

export const IntroPage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full flex flex-col gap-24 relative">
      {/* <div className="absolute w-64 aspect-square bg-backgroundSecondary rounded-full border border-backgroundSecondary p-4 -z-10" /> */}
      <div className="flex flex-col gap-2 w-fit pt-16">
        <div className="text-md px-4">{t("home.prefix")}</div>
        <div className="text-primary text-xl font-semibold">
          {t("home.name")}
        </div>
        <div className="text-md self-end px-4">{t("home.suffix")}</div>
      </div>
      <img
        src="/images/profile_complete.png"
        alt=""
        className="absolute bottom-8 -right-20 w-96 aspect-square p-4 border border-primary overflow-auto object-cover object-[0_-45px] rounded-full self-end"
      />
    </div>
  );
};
