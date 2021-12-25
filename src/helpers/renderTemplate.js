import { renderPosition } from './consts';

export const renderTemplate = (container, template, place = renderPosition.BEFORE_END) => {
  container.insertAdjacentHTML(place, template);
};

export const renderElement = (container, element, place) => {
  container[place](element);
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};
