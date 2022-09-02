export const createMenuPage = (wrapper) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('cardwrapper');
  wrapper.appendChild(cardWrapper);
  for (let i = 0; i < 8; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    cardWrapper.appendChild(card)
  }
};
