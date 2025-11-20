import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import ptCommon from "./locales/pt/common.json";

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "en",

  defaultNS: "common",

  ns: ["common"],

  resources: {
    en: {
      common: enCommon,
    },
    pt: {
      common: ptCommon,
    },
  },
});

export default i18n;
