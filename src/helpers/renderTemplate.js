import { renderPosition } from '../helpers/consts';

export const renderElement = (container, element, place = renderPosition.BEFORE_END) => {
  container[place](element);
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};
