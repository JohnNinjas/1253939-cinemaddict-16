import { FIVE } from '/src/helpers/consts';
import {
  getRandomInteger,
  getObjectData,
  getDescription,
  getRating,
  getFilmDuration,
  getWrittersNumber,
  commentNumber,
  releaseDate,
  commentDate,
} from '/src/helpers/utils';
import {
  titles,
  posterNames,
  genres,
  directors,
  actors,
  writters,
  countries,
  emojies,
  commentContent,
  commentAuthorName,
  ageRating,
} from '/src/helpers/data';

export const filmCardData = () => ({
  title: getObjectData(titles),
  originalTitle: getObjectData(titles),
  poster: getObjectData(posterNames),
  description: getDescription(),
  comment: getObjectData(commentNumber),
  commentDate: commentDate,
  commentContent: getObjectData(commentContent),
  commentAuthor: getObjectData(commentAuthorName),
  rating:getRating() ,
  release: getObjectData(releaseDate),
  duration: getFilmDuration(),
  genre: getObjectData(genres),
  ageRating: getObjectData(ageRating),
  director: getObjectData(directors),
  writers: getObjectData(writters),
  country: getObjectData(countries),
  actors: getObjectData(actors),
  emoji: getObjectData(emojies),
  isAddedToWatchList: Boolean(getRandomInteger()),
  isWatched: Boolean(getRandomInteger()),
  isAddedToFavorite: Boolean(getRandomInteger()),
});

export const films = Array.from({length: FIVE}, filmCardData);
