'use strict';

const burger_open = document.querySelector('.burger-menu');
const mobile_menu = document.querySelector('.desktop-nav');
const menu_list = document.querySelector('.menu_list');
const burger_close = document.querySelector('.close-menu');
const nav_home = document.querySelector('.nav-home');
const nav_aboutme = document.querySelector('.nav-aboutme');
const nav_footer = document.querySelector('.nav-footer');

nav_home.addEventListener('click', close_menu);
nav_aboutme.addEventListener('click', close_menu);
nav_footer.addEventListener('click', close_menu);
burger_open.addEventListener('click', close_menu);
burger_close.addEventListener('click', close_menu);

function close_menu() {
  menu_list.classList.toggle('mobile_menu_list');
  mobile_menu.classList.toggle('open');
  burger_close.classList.toggle('toggle');
}
