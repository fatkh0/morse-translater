import { dictionary } from "../dictionary/dictionary";

export const findMorseSymbol = (symbol) => dictionary[symbol];

export const findEnglishSymbol = (symbol) => {
    if (symbol === '') return ' ';

    return Object.keys(dictionary).find((key) => dictionary[key] === symbol);
}