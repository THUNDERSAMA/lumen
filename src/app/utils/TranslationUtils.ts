// Used to translate the text of buttons and other interactive elements
import translations from "./translations.json";

type Translations = { [key: string]: { [key: string]: string } };
export const getTranslation = (sentence: string, lang: string) => {
  if (lang === "en") {
    return sentence;
  }
  const translatedSentence = sentence
    .toLowerCase()
    .split(" ")
    .map((word) => {
      const translation = (translations as Translations)[word]?.[lang] || word;
      return translation;
    })
    .join(" ");

  return translatedSentence;
};
