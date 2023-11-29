import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "avaleht": "Home page",
        "kontakt": "Contact",
        "uudised": "News",
        "meist": "About",
        "tere": "Welcome to our web page!",
        "suunaviide": "You can find useful information ",
        "link": "here",
        "ajakirjanik": "journalist",
        "vota-uhendust": "contact us",
        "lisa-uudis": "Add news",
        "halda-uudiseid": "Manage news",
        "uudis": "Article"
    }
  },
  ee: {
    translation: {
        "avaleht": "Avaleht",
        "kontakt": "Kontakt",
        "uudised": "Uudised",
        "meist": "Meist",
        "tere": "Tere tulemast setterite uudistelehele!",
        "suunaviide": "Kasulik blogi asub ",
        "link": "siin",
        "ajakirjanik": "ajakirjanik",
        "vota-uhendust": "Võta ühendust",
        "lisa-uudis": "Lisa uudis",
        "halda-uudiseid": "Uudiseid haldama",
        "uudis": "Uudis"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;