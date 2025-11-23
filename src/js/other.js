const buttonUp = document.querySelector('.main-footer__button-up');

buttonUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 600) {
    buttonUp.classList.add('main-footer__button-up--visually');
  } else {
    buttonUp.classList.remove('main-footer__button-up--visually');
  }
});
