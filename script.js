// 'use strict';

const burgerOpen = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.desktop-nav');
const menuList = document.querySelector('.menu_list');
const burgerClose = document.querySelector('.close-menu');
const navHome = document.querySelector('.nav-home');
const navAboutme = document.querySelector('.nav-aboutme');
const navFooter = document.querySelector('.nav-footer');

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
