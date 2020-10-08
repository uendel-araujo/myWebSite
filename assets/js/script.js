/* ANIMAÇÃO DO TOP-HEADER E SEUS CONTEUDOS */
const logo = document.querySelector('.logo');
const menuMobile = document.querySelector('.menu-mobile');
const mainMenuUl = document.querySelector('.main-menu ul ');
const menuItemHeader = document.querySelectorAll('.menu-list-header-item');
const nomeDevelop = document.querySelector('.name-develop');
const PsHeader = document.querySelectorAll('.content-header p');
const tl = gsap.timeline();

window.onload = () => {
  menuMobile.addEventListener('click', () => {
    if (mainMenuUl.style.display == 'flex') {
      mainMenuUl.style.display = 'none';
      gsap.fromTo(mainMenuUl, { opacity: 1 }, { opacity: 0, duration: 1 });
    } else {
      mainMenuUl.style.display = 'flex';
      gsap.fromTo(mainMenuUl, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  });
}

function screen() {
  if (window.matchMedia("(min-width: 700px)").matches) {
    tl.fromTo(logo, { x: -500 }, { duration: .4, x: 0 });
    tl.fromTo(menuItemHeader, { scale: 0 }, { duration: .5, scale: 1, stagger: .2 });
    tl.fromTo(nomeDevelop, { x: -1000 }, { duration: .8, x: 0 });
    tl.fromTo(PsHeader, { x: -700 }, { duration: .8, x: 0, stagger: .5 });
  } else {
    tl.fromTo(logo, { x: -500 }, { duration: .4, x: 0 });
    tl.fromTo(menuItemHeader, { scale: 0 }, { duration: 0, scale: 1 });
    tl.fromTo(nomeDevelop, { x: -500 }, { duration: .8, x: 0 });
    tl.fromTo(PsHeader, { x: -300 }, { duration: 1, x: 0, stagger: .7 });
  }
}

screen();


/** */