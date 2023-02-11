import { LANGUAGES_CONSTANT } from "../constant/languagesConstant"
import { LETTER_SPACE } from "../constant/letterSpaceConstant";
import { findEnglishSymbol, findMorseSymbol } from "./dictionaryHelper";

const translateSentecne = (sentence, {currentLanguage, translatedLanguage}, translateMethod) => {
    return sentence
        .split(LETTER_SPACE[currentLanguage])
        .map((t) => translateMethod(t))
        .join(LETTER_SPACE[translatedLanguage])
}

export const translate = (sentence, languages) => {
    switch (languages.currentLanguage) {
        case LANGUAGES_CONSTANT.EN: 
            return translateSentecne(sentence, languages, findMorseSymbol);
        case LANGUAGES_CONSTANT.MRS:
            return translateSentecne(sentence, languages, findEnglishSymbol)
        default:
            return null;
    }
}