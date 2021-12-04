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
} from '/src/helpers/consts';

export const titles = [
  'Made for Each Other',
  'Popeye Meets Sinbad',
  'Sagebrush Trail',
  'Santa Claus Conquers the Martians',
  'The Dance of Life',
  'The Great Flamarion',
  'The Man with the Golden Arm',
];

export const posterNames = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
];

export const genres = [
  'Romcom',
  'Sci-Fi',
  'Horror ',
  'Documentary ',
  'Animation',
  'Action',
  'Thriller',
  'Drama ',
  'Comedy',
  'Adventure',
  'Musical',
  'Silent Film',
  'Gangster Film',
  'Detective',
  'Western',
];

export const getRandomInteger = (a = ZERO, b = ONE) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + ONE));
};

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

export const getDescription = () => descriptions.slice(ZERO, getRandomInteger(ONE, FIVE));
export const getRating =  () => (Math.random() * (FLOAT_ZERO - FLOAT_TEN) + FLOAT_TEN).toFixed(ONE);
