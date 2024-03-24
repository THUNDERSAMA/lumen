import translations from './translations.json';

export const getTranslation = (sentence: string, lang: string) => {
    if (lang === 'en') {
        return sentence; 
    }

    const translatedSentence = sentence.toLowerCase().split(' ').map(word => {
        return (translations as {[key: string]: {[key: string]: string}})[word][lang] || word; 
    }).join(' ');

    return translatedSentence;
};
//Used to translate the text of buttons and other interactive elements
