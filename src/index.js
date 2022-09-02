import { createHomePage } from './hometab.mjs';
import { createMenuPage } from './menutab.mjs';

const content = document.querySelector('#content');

// header div
const header = document.createElement('div');
header.classList.add('header');
header.textContent = 'Obama food';
content.appendChild(header);

// btn-wrapper div
const btnWrapper = document.createElement('div');
btnWrapper.classList.add('btnwrapper');
content.appendChild(btnWrapper);

// home button
const homeBtn = document.createElement('button');
homeBtn.classList.add('btn');
homeBtn.classList.add('hover');
homeBtn.textContent = 'Home';
btnWrapper.appendChild(homeBtn);

// menu button
const menuBtn = document.createElement('button');
menuBtn.classList.add('btn');
menuBtn.textContent = 'Menu';
btnWrapper.appendChild(menuBtn);

// contact button
const contactBtn = document.createElement('button');
contactBtn.classList.add('btn');
contactBtn.textContent = 'Contact';
btnWrapper.appendChild(contactBtn);

// wrapper div
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
content.appendChild(wrapper);

createHomePage(wrapper);

// footer div
const footer = document.createElement('div');
footer.classList.add('footer');
footer.textContent = 'Made by Obama';
content.appendChild(footer);

homeBtn.addEventListener('click', () => {
  if (!homeBtn.classList.contains('hover')) {
    menuBtn.classList.remove('hover');
    contactBtn.classList.remove('hover');
    deleteAllChildNodes(wrapper);

    homeBtn.classList.add('hover');
    createHomePage(wrapper);
  }
});

menuBtn.addEventListener('click', () => {
  if (!menuBtn.classList.contains('hover')) {
    contactBtn.classList.remove('hover');
    homeBtn.classList.remove('hover');
    deleteAllChildNodes(wrapper);

    menuBtn.classList.add('hover');
    createMenuPage(wrapper);
  }
});

contactBtn.addEventListener('click', () => {
  if (!contactBtn.classList.contains('hover')) {
    homeBtn.classList.remove('hover');
    menuBtn.classList.remove('hover');
    deleteAllChildNodes(wrapper);

    contactBtn.classList.add('hover');
  }
});

function deleteAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
