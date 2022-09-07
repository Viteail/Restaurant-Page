export const createMenuPage = (wrapper) => {
  const cardStorage = [];
  const paraStorage = [];

  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('cardwrapper');
  wrapper.appendChild(cardWrapper);

  const createCardDivs = () => {
    for (let i = 0; i < 8; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add(`${i}`);
      cardStorage.push(card);
      cardWrapper.appendChild(card);
    }

    cardStorage[0].style.backgroundImage =
      "url('style/images/BigMac.png')";
    cardStorage[1].style.backgroundImage =
      "url('style/images/McChicken.png')";
    cardStorage[2].style.backgroundImage =
      "url('style/images/CheeseBurger.png')";
    cardStorage[3].style.backgroundImage =
      "url('style/images/ChickenMcWrap.jpg')";
    cardStorage[4].style.backgroundImage =
      "url('style/images/FrenchFries.png')";
    cardStorage[5].style.backgroundImage =
      "url('style/images/CherryPie.png')";
    cardStorage[6].style.backgroundImage =
      "url('style/images/LemonadeStrawberry.png')";
    cardStorage[7].style.backgroundImage =
      "url('style/images/AppleJuice.jpg')";

    return createParaDivs();
  };

  const createParaDivs = () => {
    cardStorage.forEach((card) => {
      const divPara = document.createElement('div');
      divPara.classList.add('paraname');
      paraStorage.push(divPara);

      card.appendChild(divPara);
    });
    paraStorage[0].textContent = 'Big Mac';
    paraStorage[1].textContent = 'Chicken Wings';
    paraStorage[2].textContent = 'Cheeseburger';
    paraStorage[3].textContent = 'Chicken McWrap';
    paraStorage[4].textContent = 'French Fries';
    paraStorage[5].textContent = 'Cherry Pie';
    paraStorage[6].textContent = 'Lemonade Strawberry';
    paraStorage[7].textContent = 'Apple Juice';
  };
  return createCardDivs();
};
