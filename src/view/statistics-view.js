import { createElement } from '/src/helpers/renderTemplate';

const getStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class StatisticsView {
  #element = null;

  get template() {
    return getStatisticsTemplate();
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
