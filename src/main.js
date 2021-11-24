import { renderTemplate, RenderPosition } from './renderTemplate';
import { getuserRankTemplate } from './view/user-rank-view';
import { getMenuTemplate } from './view/menu-view';
import { getFilterTemplate } from './view/filter-view';
import { createFilmsTemplate } from './view/film-list-title-view';
import { getFilmCardTemplate } from './view/film-card-view';
import { getShowMoreTemplate } from './view/show-more-view.js';
import { getAboutFilmTemplate } from './view/about-film-view';
import { getStatisticsTemplate } from './view/statistics-view';

/** Количество карточек фильма в ряду */
const FILM_CARD_COUNT = 5;

const header = document.querySelector('.header');
renderTemplate(header, getuserRankTemplate(), RenderPosition.BEFOREEND);

const main = document.querySelector('.main');
renderTemplate(main, getMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(main, getFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(main, createFilmsTemplate(), RenderPosition.BEFOREEND);

const filmsList = main.querySelector('.films-list');

const footerStatistics = document.querySelector('.footer__statistics');
renderTemplate(footerStatistics, getStatisticsTemplate(), RenderPosition.BEFOREEND);

const filmsListContainer = filmsList.querySelector('.films-list__container');
for (let i = 0; i < FILM_CARD_COUNT; ++i) {
  renderTemplate(filmsListContainer, getFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(filmsList, getShowMoreTemplate(), RenderPosition.BEFOREEND);

renderTemplate(document.body, getAboutFilmTemplate(), RenderPosition.BEFOREEND);