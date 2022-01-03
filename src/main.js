import { renderElement } from './helpers/renderTemplate';
import { generateFilter } from './mock/filters';
import { openPopup } from './helpers/utils';
import { films } from './mock/film';
import { MAX_FILM_COUNT, renderPosition } from './helpers/consts';
import UserRankView from './view/user-rank-view';
import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import FilmListTitleView from './view/film-list-title-view';
import FilmCardView from './view/film-card-view';
import StatisticsView from './view/statistics-view';
import EmptyFilmListView from './view/empty-film-list-view';
import ShowMoreButton from './view/show-more-btn-view';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footerStatistics = document.querySelector('.footer__statistics');
const filters = generateFilter(films);
const userRankView = new UserRankView();
const filtersView = new FiltersView(filters);
const sortView = new SortView();
const filmListTitleView = new FilmListTitleView();
const showMoreBtnView = new ShowMoreButton();


if (films.length > 0) {
  renderElement(header, userRankView.element, renderPosition.BEFORE_END);
  renderElement(main, filtersView.element, renderPosition.BEFORE_END);
  renderElement(main, sortView.element, renderPosition.BEFORE_END);
  renderElement(main, filmListTitleView.element, renderPosition.BEFORE_END);

  const filmsList = main.querySelector('.films-list');
  const filmsListContainer = filmsList.querySelector('.films-list__container');

  renderElement(footerStatistics, new StatisticsView().element, renderPosition.BEFORE_END);

  for (let i = 0; i < MAX_FILM_COUNT; ++i) {
    const filmCard = new FilmCardView(films[i]);

    renderElement(filmsListContainer, filmCard.element, renderPosition.BEFORE_END);
    openPopup(filmCard.element, films[i]);
  }

  document.addEventListener('click', (event) => {
    const aboutFilmBlock = document.querySelector('.film-details');
    const closePopupButton = aboutFilmBlock?.querySelector('.film-details__close-btn');

    if (event.target === closePopupButton) {
      aboutFilmBlock?.remove();
      document.body.classList.remove('hide-overflow');
    }
  });

  window.onkeydown = (event) => {
    const aboutFilmBlock = document.querySelector('.film-details');
    if (event.key === 'Escape') {
      aboutFilmBlock?.remove();
      document.body.classList.remove('hide-overflow');
    }
  };

  if (films.length > MAX_FILM_COUNT) {
    let renderCount = MAX_FILM_COUNT;
    renderElement(filmsListContainer, showMoreBtnView.element, renderPosition.BEFORE_END);

    const showMoreBtn = filmsListContainer.querySelector('.films-list__show-more');
    showMoreBtnView.setClickHandler(() => {
      films.slice(renderCount, renderCount + MAX_FILM_COUNT).forEach((film) => renderElement(filmsListContainer, new FilmCardView(film).element, renderPosition.BEFORE_END));
      renderCount += MAX_FILM_COUNT;
      main.appendChild(showMoreBtn);

      if (renderCount >= films.length) {
        showMoreBtn.remove();
      }
    });
  }
} else {
  document.body.innerHTML = '';
  renderElement(document.body, new EmptyFilmListView().element, renderPosition.BEFORE_END);
}
