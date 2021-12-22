import { createElement } from '/src/helpers/renderTemplate';

const createNavigationItemTemplate = (filter) => {
  const { name, count } = filter;
  const filterName = name.substring(0, 1).toUpperCase() + name.substring(1);

  return (`
    <a href="#${name}" class="main-navigation__item">${filterName}
        <span class="main-navigation__item-count">${count}</span>
    </a>
  `);
};

const getFiltersTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createNavigationItemTemplate(filter, index === 0))
    .join('');

  return (
    `<nav class="main-navigation">
        <div class="main-navigation__items">
          <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
          ${filterItemsTemplate}
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class FiltersView {
  #element = null;
  #film = null;

  constructor(film) {
    this.#film = film;
  }

  get template() {
    return getFiltersTemplate(this.#film);
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
