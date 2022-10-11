// 'use strict';

const cardContainer = [
  {
    image: './Icons/picture/modal_picture.png',
    title: 'First Project',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: 'Icons/picture/space-tourism.jpg',
    title: 'Second Project',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Third Project',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'React'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: 'Icons/picture/space-tourism.jpg',
    title: 'Fourth Project',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: './Icons/picture/modal_picture.png',
    title: 'Fifth Project',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    liveLink: 'https://yonas44.github.io/space-tourism-website/',
    sourceLink: 'https://github.com/yonas44/space-tourism-website',
  },
  {
    image: 'Icons/picture/space-tourism.jpg',
    title: 'Sixth Project',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
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
const modalPicture = document.querySelector('.modal_picture');
const modalH1 = document.querySelector('.modal_h1');
const modalList = document.querySelector('.modal_list');
const modalPar = document.querySelector('.modal_p');

modalClose.addEventListener('click', function () {
  modal.classList.remove('popup');
});

function displayModal(cardNumber) {
  modal.classList.add('popup');
  let card = cardContainer[cardNumber];
  modalH1.textContent = card.title;
  modalPicture.style.backgroundImage = `url(${card.image})`;

  while (modalList.hasChildNodes()) {
    modalList.removeChild(modalList.firstChild);
  }
  card.languages.map(lang => {
    let language = document.createElement('li');
    language.innerHTML = lang;
    modalList.appendChild(language);
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

navHome.addEventListener('click', closeMenu);
navAboutme.addEventListener('click', closeMenu);
navFooter.addEventListener('click', closeMenu);
burgerOpen.addEventListener('click', burgerMenu);
burgerClose.addEventListener('click', burgerMenu);
