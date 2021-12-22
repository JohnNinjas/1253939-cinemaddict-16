import { createElement } from '/src/helpers/renderTemplate';

const getUserRankTemplate = () => (
  `<section class="header__profile profile">
      <p class="profile__rating">Movie buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
);

export default class UserRankView {
  #element = null;

  get template() {
    return getUserRankTemplate();
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
