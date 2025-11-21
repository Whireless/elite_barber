const mainNav = document.querySelector('.main-nav');
const openMenu = document.querySelector('.main-nav__button--open');
const closeMenu = document.querySelector('.main-nav__button--close');
const menuBlock = document.querySelector('.main-nav__block');
const navLinks = document.querySelectorAll('.main-nav__link');

// Закрытие мобильного меню после нажатия пункта

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBlock.classList.remove('main-nav__block--open');
  });
});

// Открытие меню

openMenu.addEventListener('click', () => {
  menuBlock.classList.add('main-nav__block--open');
});

// Закрытие меню

closeMenu.addEventListener('click', () => {
  menuBlock.classList.remove('main-nav__block--open');
});

if (window.matchMedia("(min-width: 375px) and (max-width: 767px)").matches) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 360) {
      mainNav.classList.add('main-nav--scroll');
    } else {
      mainNav.classList.remove('main-nav--scroll');
    }
  });
} else if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 500) {
      mainNav.classList.add('main-nav--scroll');
    } else {
      mainNav.classList.remove('main-nav--scroll');
    }
  });
}
