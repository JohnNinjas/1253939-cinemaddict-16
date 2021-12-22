import { getShortDescription } from '/src/helpers/utils';
import { MAX_NUMBER_OF_SYMBOLS_FOR_SHORT_DESCRIPTION } from '/src/helpers/consts';
import { createElement } from '/src/helpers/renderTemplate';

const getFilmCardTemplate = (filmData) => {
  const {
    title,
    poster,
    description,
    comment,
    rating,
    release,
    duration,
    genre,
    isAddedToWatchList,
    isWatched,
    isAddedToFavorite,
  } = filmData;

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${release}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${getShortDescription(description, MAX_NUMBER_OF_SYMBOLS_FOR_SHORT_DESCRIPTION)}</p>
      <span class="film-card__comments">${comment.length === 1 ? '1 comment' : `${comment} comments`}</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${isAddedToWatchList ? 'film-card__controls-item--active' : ''}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${isWatched ? 'film-card__controls-item--active' : ''}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${isAddedToFavorite ? 'film-card__controls-item--active' : ''}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCardView {
  #element = null;
  #film = null;

  constructor(film) {
    this.#film = film;
  }

  get template() {
    return getFilmCardTemplate(this.#film);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
