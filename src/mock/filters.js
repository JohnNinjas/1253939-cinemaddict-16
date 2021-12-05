const filterMap = {
  watchlist: (films) => films
    .filter((film) => film.isAddedToWatchList).length,
  history: (films) => films
    .filter((film) => film.isWatched).length,
  favorites: (films) => films
    .filter((film) => film.isAddedToFavorite).length,
};

export const generateFilter = (films) => Object.entries(filterMap).map(
  ([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(films),
  }),
);
