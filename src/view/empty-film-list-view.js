import AbstractView from '../view/abstract-view.js';

const getEmptyFilmList = () => (
  `<div>
    <header class="header">
      <h1 class="header__logo logo">Cinemaddict</h1>
    </header>
    <main class="main">
      <nav class="main-navigation">
        <div class="main-navigation__items">
          <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
          <a href="#watchlist" class="main-navigation__item">Watchlist
            <span class="main-navigation__item-count">0</span>
          </a>
          <a href="#history" class="main-navigation__item">History
            <span class="main-navigation__item-count">0</span>
          </a>
          <a href="#favorites" class="main-navigation__item">Favorites
            <span class="main-navigation__item-count">0</span>
          </a>
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>
    <section class="films">
      <section class="films-list">
        <h2 class="films-list__title">There are no movies in our database</h2>
      </section>
    </section>
    </main>
    <footer class="footer">
      <section class="footer__logo logo logo--smaller">Cinemaddict</section>
      <section class="footer__statistics">
        <p>0 movies inside</p>
      </section>
    </footer>
    </div>
`);

export default class EmptyFilmListView extends AbstractView {
  get template() {
    return getEmptyFilmList();
  }
}
