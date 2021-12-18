import {
  MAX_NUMBER_OF_COMMENTS,
  MIN_RELEASE_DATE,
  MAX_RELEASE_DATE,
  MAX_FILM_COUNT,
  MAX_FILM_DURATION_IN_HOURS,
  MAX_FILM_DURATION_IN_MINUTES,
  MIN_YEAR_OF_COMMENT_DATE,
  MAX_YEAR_OF_COMMENT_DATE,
  MAX_MONTH_OF_COMMENT_DATE,
  MAX_DAYS_OF_COMMENT_DATE,
  MAX_HOURS_OF_COMMENT_DATE,
  MIN_VALUE_OF_FILM_RATING,
  MAX_VALUE_OF_FILM_RATING,
} from './consts';
import { descriptions } from './data';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const commentDate =`
  ${getRandomInteger(MIN_YEAR_OF_COMMENT_DATE, MAX_YEAR_OF_COMMENT_DATE)}
  /${getRandomInteger(1, MAX_MONTH_OF_COMMENT_DATE)}
  /${getRandomInteger(1, MAX_DAYS_OF_COMMENT_DATE)} ${getRandomInteger(0, MAX_HOURS_OF_COMMENT_DATE)}
  :${getRandomInteger(0, MAX_FILM_DURATION_IN_MINUTES)}
`;

export const getObjectData = (dataValues) => {
  const randomIndex = getRandomInteger(0, dataValues.length - 1);

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
  const hours = getRandomInteger(0, MAX_FILM_DURATION_IN_HOURS);
  const minutes = getRandomInteger(1, MAX_FILM_DURATION_IN_MINUTES);

  return `${ hours ? `${hours}h ${minutes}m` : `${minutes}m`}`;
};

const descriptionNumber = getRandomInteger(1, MAX_FILM_COUNT);
const descRandomStrCount = descriptions.slice(0, descriptionNumber);
const generateCommentNumber = generateArray(0, (getRandomInteger(0, MAX_NUMBER_OF_COMMENTS)));
const generateReleaseDate = generateArray(MIN_RELEASE_DATE, (getRandomInteger(MIN_RELEASE_DATE, MAX_RELEASE_DATE)));
export const commentNumber = generateCommentNumber;
export const releaseDate = generateReleaseDate;

export const getDescription = () => `${descRandomStrCount}`;

export const getShortDescription = (text, count) => {
  let textContent = text ? text : '';

  if (textContent.length > count) {
    textContent = `${textContent.substring(0, count)  }...`;
  }

  return textContent;
};

export const getRating =  () => (Math.random() * (MIN_VALUE_OF_FILM_RATING - MAX_VALUE_OF_FILM_RATING) + MAX_VALUE_OF_FILM_RATING).toFixed(1);


