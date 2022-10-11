// 'use strict';

const cardContainer = [
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Keeping track of hundreds of components',
    languages: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'React'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
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
