export const renderTemplate = (container, template) => {
  container.insertAdjacentHTML('beforeend', template);
};

export const renderElement = (container, element, place) => {
  container[place](element);
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};
