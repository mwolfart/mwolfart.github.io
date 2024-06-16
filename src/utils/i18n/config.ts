import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "../../constants/content.json";

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: englishTranslation,
            },
        },
    });
    
export default i18n;