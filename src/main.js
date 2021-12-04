import { renderTemplate } from './helpers/renderTemplate';
import { getuserRankTemplate } from './view/user-rank-view';
import { getMenuTemplate } from './view/menu-view';
import { getFilterTemplate } from './view/filter-view';
import { createFilmsTemplate } from './view/film-list-title-view';
import { getFilmCardTemplate } from './view/film-card-view';
import { getShowMoreTemplate } from './view/show-more-view.js';
// import { getAboutFilmTemplate } from './view/about-film-view';
import { getStatisticsTemplate } from './view/statistics-view';
import { films } from './mock/film';
import { FIVE } from './helpers/consts';


const header = document.querySelector('.header');
renderTemplate(header, getuserRankTemplate());

const main = document.querySelector('.main');
renderTemplate(main, getMenuTemplate());
renderTemplate(main, getFilterTemplate());
renderTemplate(main, createFilmsTemplate());

const filmsList = main.querySelector('.films-list');

const footerStatistics = document.querySelector('.footer__statistics');
renderTemplate(footerStatistics, getStatisticsTemplate());

const filmsListContainer = filmsList.querySelector('.films-list__container');

for (let i = 0; i < FIVE; ++i) {
  renderTemplate(filmsListContainer, getFilmCardTemplate(films[i]));
}

renderTemplate(filmsList, getShowMoreTemplate());

// renderTemplate(document.body, getAboutFilmTemplate());
