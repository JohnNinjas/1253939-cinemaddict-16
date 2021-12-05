import { renderTemplate } from './helpers/renderTemplate';
import { getuserRankTemplate } from './view/user-rank-view';
import { getFiltersTemplate } from '/src/view/filters-view';
import { getSortTemplate } from '/src/view/sort-view';
import { getFilmsListTemplate } from './view/film-list-title-view';
import { getFilmCardTemplate } from './view/film-card-view';
import { getAboutFilmTemplate } from './view/about-film-view';
import { getStatisticsTemplate } from './view/statistics-view';
import { generateFilter } from './mock/filters';
import { films } from './mock/film';
import { FIVE } from './helpers/consts';
import { getShowMoreButton } from './helpers/utils';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const footerStatistics = document.querySelector('.footer__statistics');
const filters = generateFilter(films);

renderTemplate(header, getuserRankTemplate());
renderTemplate(main, getFiltersTemplate(filters));
renderTemplate(main, getSortTemplate());
renderTemplate(main, getFilmsListTemplate());

const filmsList = main.querySelector('.films-list');
const filmsListContainer = filmsList.querySelector('.films-list__container');

renderTemplate(footerStatistics, getStatisticsTemplate());

for (let i = 0; i < FIVE; ++i) {
  renderTemplate(filmsListContainer, getFilmCardTemplate(films[i]));
}

const showFilmInfo = () => {
  const filmCards = document.querySelectorAll('.film-card');
  filmCards.forEach((filmCard, index) => {
    filmCard.addEventListener('click', () => {
      renderTemplate(footer, getAboutFilmTemplate(films[index]));
    });
  });
};

document.addEventListener('click', (event) => {
  const aboutFilmBlock = document.querySelector('.film-details');
  const closePopupButton = aboutFilmBlock?.querySelector('.film-details__close-btn');

  if (event.target === closePopupButton) {
    aboutFilmBlock.remove();
  }
});

if (films.length > FIVE) {
  let renderCount = FIVE;
  renderTemplate(filmsListContainer, getShowMoreButton());

  const showMoreBtn = filmsListContainer.querySelector('.films-list__show-more');
  showMoreBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    films.slice(renderCount, renderCount + FIVE).forEach((film) => renderTemplate(filmsListContainer, getFilmCardTemplate(film)));
    renderCount += FIVE;

    if (renderCount >= films.length) {
      showMoreBtn.remove();
    }
    showFilmInfo();
  });
}

showFilmInfo();
