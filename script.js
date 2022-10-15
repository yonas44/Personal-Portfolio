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

// Navigation menu
const burgerOpen = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.desktop-nav');
const menuList = document.querySelector('.menu_list');
const burgerClose = document.querySelector('.close-menu');
const navHome = document.querySelector('.nav-home');
const navAboutme = document.querySelector('.nav-aboutme');
const navFooter = document.querySelector('.nav-footer');

// Modal elements
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

// Navigation functions

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

// Validation

const footerName = document.getElementById('footer-name');
const email = document.getElementById('email');
const contactForm = document.querySelector('#form');
const footerSpan = document.querySelector('#footer-span');
const formReset = document.querySelector('#form-reset');
let emailValue = '';

function validator(event) {
  if (event.data !== null) {
    if (event.data.toLowerCase() !== event.data) {
      footerSpan.textContent = 'Please use LOWERCASE letters, Thanks!';
      footerSpan.style.display = 'block';
    } else if (email.validity.typeMismatch) {
      footerSpan.textContent = 'please type a valid Email here!';
      footerSpan.style.display = 'block';
    } else {
      footerSpan.textContent = '';
    }
  } else if (event.data === null) {
    footerSpan.style.display = 'none';
  }
}

email.addEventListener('input', (event) => {
  footerSpan.style.display = 'none';
  validator(event);
});

contactForm.addEventListener('submit', (event) => {
  emailValue = email.value;
  if (emailValue.toLowerCase() !== emailValue) {
    footerSpan.textContent = 'Form NOT SENT, Please use LOWERCASE letters on email, Thanks!';
    footerSpan.style.display = 'block';
    event.preventDefault();
  }
});

// Session storage

const sessionObj = {
  fullName: '',
  email: '',
  textArea: '',
};

const fullName = document.querySelector('#footer-name');
const textArea = document.querySelector('#message');
let str;

if (localStorage.test === undefined) {
  localStorage.setItem('test', JSON.stringify(sessionObj));
}
const testValue = localStorage.getItem('test');
const testValueObj = JSON.parse(testValue);
fullName.value = testValueObj.fullName;
email.value = testValueObj.email;
textArea.value = testValueObj.textArea;

function stringifier() {
  str = JSON.stringify(sessionObj);
  localStorage.setItem('test', str);
}

function displayReset() {
  if (footerName.value !== '' || email.value !== '' || textArea.value !== '') {
    formReset.style.display = 'inline-block';
  } else formReset.style.display = 'none';
}

// displayReset();

formReset.addEventListener('click', () => {
  formReset.style.display = 'none';
  footerSpan.style.display = 'none';
  localStorage.removeItem('test');
  email.value = '';
  footerName.value = '';
  textArea.value = '';
});

fullName.addEventListener('input', (event) => {
  sessionObj.fullName = event.target.value;
  stringifier();
  displayReset();
});

email.addEventListener('input', (event) => {
  sessionObj.email = event.target.value;
  stringifier();
  displayReset();
});
textArea.addEventListener('input', (event) => {
  sessionObj.textArea = event.target.value;
  stringifier();
  displayReset();
});
