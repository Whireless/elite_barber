const openMenu = document.querySelector('.main-nav__button--open');
const closeMenu = document.querySelector('.main-nav__button--close');

const menuBlock = document.querySelector('.main-nav__block');

const navLinks = document.querySelectorAll('.main-nav__link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBlock.classList.remove('main-nav__block--open');
  });
});

openMenu.addEventListener('click', () => {
  menuBlock.classList.add('main-nav__block--open');
});

closeMenu.addEventListener('click', () => {
  menuBlock.classList.remove('main-nav__block--open');
});
