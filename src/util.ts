import {pipe, split, filter, isInteger} from 'lodash/fp';

// This solution will work only for most Latin, Greek, Armenian and Cyrillic scripts. It will NOT work for Chinese, Japanese, Arabic, Hebrew
// This languages are not used to create emails addresses
export const isLetter = (char: string): boolean => {
  return char.toLowerCase() !== char.toUpperCase();
};

export const calculateProprtion = (n: number, N: number): number => (n / N) * 100;

export const isProprtionOfCharsNumberRespected = (str: string, max: number): boolean => {
  return (
    calculateProprtion(
      pipe(
        split(''),
        filter(char => isInteger(Number.parseInt(char)) || isLetter(char))
      )(str).length,
      str.length
    ) > max
  );
};

export const isProprtionOfNumberRespected = (str: string, max: number): boolean => {
  return (
    calculateProprtion(
      pipe(
        split(''),
        filter(char => isInteger(Number.parseInt(char)))
      )(str).length,
      str.length
    ) < max
  );
};

export const isInTheRange = (price: number, rating: number, p: number): boolean =>
  price >= rating - (rating * p) / 100 && price <= rating + (rating * p) / 100;
