



//Haciendo interactivo el menu

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuHamIcon = document.querySelector('.menu');
const nav = document.querySelector('nav');
menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    nav.classList.toggle('open');
  }


  

