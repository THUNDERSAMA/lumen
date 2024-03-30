// Used to translate the text of buttons and other interactive elements
import translations from "./full_translations.json";
import Cookies from "js-cookie";

type Translations = { [key: string]: { [key: string]: string } };
const language = Cookies.get("language") || "en";
export const getTranslation = (sentence: string, lang: string = language) => {
  if (lang === "en") {
    return sentence;
  }
  // const translatedSentence = sentence
  //   .split(" ")
  //   .map((word) => {
  const translation =
    (translations as Translations)[sentence.toLowerCase()]?.[lang] || sentence;
  return translation;
  // })
  // .join(" ");

  // return translatedSentence;
};
