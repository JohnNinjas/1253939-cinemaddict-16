import UserRankView from '../view/user-rank-view';
import FiltersView from '../view/filters-view';
import SortView from '../view/sort-view';
import FilmListTitleView from '../view/film-list-title-view';
import ShowMoreButton from '../view/show-more-btn-view';
import StatisticsView from '../view/statistics-view';
import FilmCardView from '../view/film-card-view';
import { films } from '../mock/film';
import { generateFilter } from '../mock/filters';
import { renderElement } from '../helpers/renderTemplate';
import { MAX_FILM_COUNT } from '../helpers/consts';
import { openPopup } from '../helpers/utils';
import EmptyFilmListView from '../view/empty-film-list-view';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footerStatistics = document.querySelector('.footer__statistics');


export default class MovieListPresenter {
  filters = generateFilter(films);

  #userRankView = new UserRankView();
  #filtersView = new FiltersView(this.filters);
  #sortView = new SortView();
  #filmListTitleView = new FilmListTitleView();
  #showMoreBtnView = new ShowMoreButton();
  #statisticsView = new StatisticsView();
  #emptyFilmListView =  new EmptyFilmListView();

  init () {
    if (films.length > 0) {
      this.renderUserAvatar();
      this.renderFilters();
      this.renderSortBtns();
      this.renderFilmListTitle();
      this.renderFilms();
      this.renderShowMoreBtnExt();
      this.renderStatistics();
      this.closePopUpHandler();
      this.closePopUpHandlerOnEsc();
    } else {
      document.body.innerHTML = '';
      this.renderEmptyFilmList();
    }
  }


  renderUserAvatar () {
    renderElement(header, this.#userRankView.element);
  }

  renderFilters () {
    renderElement(main, this.#filtersView.element);
  }

  renderSortBtns () {
    renderElement(main, this.#sortView.element);
  }

  renderFilmListTitle () {
    renderElement(main, this.#filmListTitleView.element);
  }

  renderFilms() {
    const filmsList = main?.querySelector('.films-list');
    const filmsListContainer = filmsList?.querySelector('.films-list__container');

    for (let i = 0; i < MAX_FILM_COUNT; ++i) {
      const filmCard = new FilmCardView(films[i]);

      renderElement(filmsListContainer, filmCard.element);
      openPopup(filmCard.element, films[i]);
    }
  }

  renderShowMoreBtn() {
    const filmsList = main?.querySelector('.films-list');
    const filmsListContainer = filmsList?.querySelector('.films-list__container');

    renderElement(filmsListContainer, this.#showMoreBtnView.element);
  }

  renderEmptyFilmList () {
    renderElement(document.body, this.#emptyFilmListView.element);
  }

  renderShowMoreBtnExt () {
    const filmsList = main?.querySelector('.films-list');
    const filmsListContainer = filmsList?.querySelector('.films-list__container');

    if (films.length > MAX_FILM_COUNT) {
      let renderCount = MAX_FILM_COUNT;

      this.renderShowMoreBtn();

      const showMoreBtn = filmsListContainer.querySelector('.films-list__show-more');

      this.#showMoreBtnView.setClickHandler(() => {
        films.slice(renderCount, renderCount + MAX_FILM_COUNT).forEach((film) => {
          renderElement(filmsListContainer, new FilmCardView(film).element);
          this.renderShowMoreBtn();
        });
        renderCount += MAX_FILM_COUNT;

        if (renderCount >= films.length) {
          showMoreBtn.remove();
        }
      });
    }
  }

  renderStatistics () {
    renderElement(footerStatistics, this.#statisticsView.element);
  }

  closePopUpHandler () {
    document.addEventListener('click', (event) => {
      const aboutFilmBlock = document.querySelector('.film-details');
      const closePopupButton = aboutFilmBlock?.querySelector('.film-details__close-btn');

      if (event.target === closePopupButton) {
        aboutFilmBlock?.remove();
        document.body.classList.remove('hide-overflow');
      }
    });
  }

  closePopUpHandlerOnEsc () {
    window.onkeydown = (event) => {
      const aboutFilmBlock = document.querySelector('.film-details');
      if (event.key === 'Escape') {
        aboutFilmBlock?.remove();
        document.body.classList.remove('hide-overflow');
      }
    };
  }
}
