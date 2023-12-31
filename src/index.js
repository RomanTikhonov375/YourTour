import './index.scss';
import logoBlack from './images/YourTour_black.svg';
import logo from './images/header-logo.svg';

const header = document.querySelector('.header__wrapper');
const headerLogo = document.querySelector('.header__logo');

function onCrollHandler() {
    let y = window.scrollY;
    if (y > 450) {
        header.style.position = 'fixed';
        headerLogo.src = logoBlack;
        header.classList.add('header__scroll')
    } else {
        header.classList.remove('header__scroll')
        header.style.position = 'relative';
        headerLogo.src = logo;
    }
}

function onScroll() {
    window.addEventListener('scroll', onCrollHandler);
}

window.onload = function() {
  onScroll();
};