import { FILM_NUMBER } from '/src/helpers/consts';
import {
  getRandomInteger,
  getObjectData,
  getDescription,
  getRating,
  getFilmDuration,
  commentNumber,
  releaseDate,
  commentDate,
} from '/src/helpers/utils';
import {
  directors,
  actors,
  writters,
  countries,
  emojies,
  commentAuthorName,
  ageRating,
} from '/src/helpers/consts';
import {
  titles,
  posterNames,
  genres,
  commentContent,
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

export const films = Array.from({length: FILM_NUMBER}, filmCardData);
