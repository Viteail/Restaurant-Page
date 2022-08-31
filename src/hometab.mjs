const content = document.querySelector('#content');

export const createHomePage = (wrapper) => {
  const homePage = document.createElement('div');
  homePage.classList.add('homepage');
  wrapper.appendChild(homePage);

  const bigPara = document.createElement('p');
  bigPara.classList.add('bigtext');
  bigPara.textContent = 'ABOUT';
  homePage.appendChild(bigPara);

  const paraDescription = document.createElement('p');
  paraDescription.classList.add('description');
  paraDescription.textContent =
    'Best food in the world, recommended by many popular people.';
  homePage.appendChild(paraDescription);
};
