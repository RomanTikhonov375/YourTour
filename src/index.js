import './index.scss';
import logoBlack from './images/YourTour_black.svg';
import logo from './images/header-logo.svg';

const header = document.querySelector('.header__wrapper');
const headerLogo = document.querySelector('.header__logo');
const headerTitle = document.querySelector('.header__title');

function onCrollHandler() {
    let y = window.scrollY;
    if (y > 450) {
        headerTitle.style.paddingTop = '33.78px';
        header.style.position = 'fixed';
        headerLogo.src = logoBlack;
        header.classList.add('header__scroll')
    } else {
        header.classList.remove('header__scroll')
        header.style.position = 'relative';
        headerLogo.src = logo;
        headerTitle.style.paddingTop = '0';
    }
}

function onScroll() {
    window.addEventListener('scroll', onCrollHandler);
}

window.onload = function() {
  onScroll();
};