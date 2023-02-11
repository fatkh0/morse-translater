import { LANGUAGES_CONSTANT } from "../constant/languagesConstant";
import { LETTER_SPACE } from "../constant/letterSpaceConstant";
import { findEnglishSymbol, findMorseSymbol } from "./dictionaryHelper";

const isSymbolExist = {
    [LANGUAGES_CONSTANT.EN]: (symbol) => findMorseSymbol(symbol),
    [LANGUAGES_CONSTANT.MRS]: (symbol) => findEnglishSymbol(symbol)
}

export const validate = (sentence, language) => {
    return sentence
        .split(LETTER_SPACE[language])
        .map((symbol) => (symbol === ' ') ? true : !!isSymbolExist[language](symbol))
        .every(symbol => symbol === true)
}
