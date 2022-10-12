// 'use strict';

const cardContainer = [
  {
    image: './Icons/picture/card0.jpg',
    title: 'Medical Illustration Sets',
    languages: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    Links: ['#', '#'],
  },
  {
    image: './Icons/picture/card1.png',
    title: 'Tonic',
    languages: ['html', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    Links: ['#', '#'],
  },
  {
    image: './Icons/picture/card2.png',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['html', 'Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    Links: ['#', '#'],
  },
  {
    image: './Icons/picture/card3.png',
    title: 'Facebook 360',
    languages: ['html', 'Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    Links: ['#', '#'],
  },
  {
    image: './Icons/picture/card4.png',
    title: 'Uber Navigation',
    languages: ['html', 'Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    Links: ['#', '#'],
  },
  {
    image: './Icons/picture/card5.jpg',
    title: 'Space Tourism Website',
    languages: ['html', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    Links: [
      'https://yonas44.github.io/space-tourism-website/',
      'https://github.com/yonas44/space-tourism-website',
    ],
  },
];

const burgerOpen = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.desktop-nav');
const menuList = document.querySelector('.menu_list');
const burgerClose = document.querySelector('.close-menu');
const navHome = document.querySelector('.nav-home');
const navAboutme = document.querySelector('.nav-aboutme');
const navFooter = document.querySelector('.nav-footer');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('#modal_close');
const deskModalClose = document.querySelector('#desk-modal-x');
const modalPicture = document.querySelector('.modal_picture');
const modalH1 = document.querySelector('.modal_h1');
const modalList = document.querySelector('.modal_list');
const modalPar = document.querySelector('.modal_p');
const modalBtn = document.querySelector('.btn');
const link1 = document.querySelector('#link1');
const link2 = document.querySelector('#link2');

function closeModal() {
  modal.classList.remove('popup');
}

deskModalClose.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

function displayModal(cardNumber) {
  modal.classList.add('popup');
  const card = cardContainer[cardNumber];
  modalH1.textContent = card.title;
  modalPar.textContent = card.text;
  modalPicture.style.backgroundImage = `url(${card.image})`;

  while (modalList.hasChildNodes()) {
    modalList.removeChild(modalList.firstChild);
  }
  card.languages.map((lang) => {
    const language = document.createElement('li');
    language.innerHTML = lang;
    modalList.appendChild(language);
    return '';
  });

  link1.setAttribute('href', card.Links[0]);
  link2.setAttribute('href', card.Links[1]);
}

function burgerMenu() {
  menuList.classList.toggle('mobile_menu_list');
  mobileMenu.classList.toggle('open');
  burgerClose.classList.toggle('toggle');
}

function closeMenu() {
  menuList.classList.remove('mobile_menu_list');
  mobileMenu.classList.remove('open');
  burgerClose.classList.remove('toggle');
}

modalBtn.addEventListener('click', displayModal);
navHome.addEventListener('click', closeMenu);
navAboutme.addEventListener('click', closeMenu);
navFooter.addEventListener('click', closeMenu);
burgerOpen.addEventListener('click', burgerMenu);
burgerClose.addEventListener('click', burgerMenu);

//Validation function

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

