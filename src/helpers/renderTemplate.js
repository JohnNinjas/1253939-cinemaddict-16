import { renderPosition } from './consts';

export const renderTemplate = (container, template, place = renderPosition.BEFORE_END) => {
  container.insertAdjacentHTML(place, template);
};

export const renderElement = (container, element, place) => {
  switch (place) {
    case renderPosition.BEFORE_BEGIN:
      container.before(element);
      break;
    case renderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case renderPosition.BEFORE_END:
      container.append(element);
      break;
    case renderPosition.AFTER_END:
      container.after(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};
