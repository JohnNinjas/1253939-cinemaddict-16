import { renderPosition } from './consts';

const renderTemplate = (container, template, place = renderPosition.BEFORE_END) => {
  container.insertAdjacentHTML(place, template);
};

export { renderTemplate };
