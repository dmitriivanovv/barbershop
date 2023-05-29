const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const modalLink = document.querySelector('.js-login');
const modalPopup = document.querySelector('.modal-login');
const modalClose = document.querySelector(".modal-close");
modalLink.addEventListener("click", function(evt) {
evt.preventDefault();
modalPopup.classList.add('modal-login--show');
});

modalLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.remove('modal-login--show');
});