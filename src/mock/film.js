import { FIVE } from '/src/helpers/consts';
import {
  getObjectData,
  getDescription,
  getRating,
  getFilmDuration,
  titles,
  posterNames,
  commentNumber,
  releaseDate,
  genres,
} from '/src/helpers/utils';

export const filmCardData = () => ({
  title: getObjectData(titles),
  poster: getObjectData(posterNames),
  description: getDescription(),
  comment: getObjectData(commentNumber),
  rating:getRating() ,
  release: getObjectData(releaseDate),
  duration: getFilmDuration(),
  genre: getObjectData(genres),
});

export const films = Array.from({length: FIVE}, filmCardData);
