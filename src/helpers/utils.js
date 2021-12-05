import {
  ZERO,
  FLOAT_ZERO,
  ONE,
  FLOAT_TEN,
  MAX_NUMBER_OF_COMMENTS,
  MIN_RELEASE_DATE,
  MAX_RELEASE_DATE,
  FIVE,
  MAX_FILM_DURATION_IN_HOURS,
  MAX_FILM_DURATION_IN_MINUTES,
  TWO,
  THREE,
} from './consts';
import { descriptions, writters } from './data';

export const getRandomInteger = (a = ZERO, b = ONE) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + ONE));
};

export const commentDate =`${getRandomInteger(2010, 2021)}/${getRandomInteger(1, 12)}/${getRandomInteger(1, 30)} ${getRandomInteger(0, 23)}:${getRandomInteger(0, 59)}`;

export const getObjectData = (dataValues) => {
  const randomIndex = getRandomInteger(ZERO, dataValues.length - ONE);

  return dataValues[randomIndex];
};

const generateArray = (minVal, randomInt) => {
  const arr = [];
  if (randomInt) {
    for (let i = minVal; i <= randomInt;) {
      arr.push(i++);
    }
  }
  return arr;
};

export const getFilmDuration = () => {
  const hours = getRandomInteger(ONE, MAX_FILM_DURATION_IN_HOURS);
  const minutes = getRandomInteger(ONE, MAX_FILM_DURATION_IN_MINUTES);

  return `${hours}h ${minutes}m`;
};

export const commentNumber = generateArray(ZERO, (getRandomInteger(ZERO, MAX_NUMBER_OF_COMMENTS)));
export const releaseDate = generateArray(MIN_RELEASE_DATE, (getRandomInteger(MIN_RELEASE_DATE, MAX_RELEASE_DATE)));

export const getDescription = () => `${descriptions.slice(ZERO, getRandomInteger(ONE, FIVE))}`;
export const getShortDescription = (text, count) => {
  let textContent = text ? text : '';

  if (textContent.length > count) {
    textContent = `${textContent.substring(0, count)  }...`;
  }

  return textContent;
};

export const getWrittersNumber = () => writters.slice(ONE, getRandomInteger(TWO, THREE));

export const getRating =  () => (Math.random() * (FLOAT_ZERO - FLOAT_TEN) + FLOAT_TEN).toFixed(ONE);
