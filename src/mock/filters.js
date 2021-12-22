const filtersData = [
  ['watchlist', 'isAddedToWatchList'],
  ['history', 'isWatched'],
  ['favorites', 'isAddedToFavorite']
];

export const generateFilter = (films) => filtersData.map((elem) => ({ name: elem[0], count: films.filter((film) => film[elem[1]]).length }));
