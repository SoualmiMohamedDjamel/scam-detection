import {split} from 'lodash/fp';
import {getRating, isNotBlacklisted} from './services';
import {Announcement, Rule} from './types';
import {
  isInTheRange,
  isProprtionOfCharsNumberRespected,
  isProprtionOfNumberRespected
} from './util';

export const RULES: Rule[] = [
  {
    name: 'rule::firstname::length',
    isRespected: ({contacts}) => contacts.fisrtName.length > 2
  },
  {
    name: 'rule::lastname::length',
    isRespected: ({contacts}) => contacts.lastName.length > 2
  },
  {
    name: 'rule::alpha_rate',
    isRespected: ({contacts}) =>
      isProprtionOfCharsNumberRespected(split('@', contacts.email)[0], 70)
  },
  {
    name: 'rule::number_rate',
    isRespected: ({contacts}) => isProprtionOfNumberRespected(split('@', contacts.email)[0], 30)
  },
  {
    name: 'rule::price::quotation_rate',
    isRespected: async (announcement: Announcement): Promise<boolean> => {
      const rating = await getRating(announcement.vehicle);
      return isInTheRange(announcement.price, rating, 20);
    }
  },
  {
    name: 'rule::registernumber::balcklist',
    isRespected: (announcement: Announcement): Promise<boolean> => {
      return isNotBlacklisted(announcement.vehicle.registerNumber);
    }
  }
];
