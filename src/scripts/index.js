import 'bootstrap';
import anime from 'animejs/lib/anime.es.js';

const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuBackDrop = document.getElementById('menuBackDrop');
let navOpen = false;

hamburgerBtn.addEventListener('click', function() {
  navOpen = this.classList.contains('nav-open');
  if(navOpen) {
    closeNav(this);
  } else {
    openNav(this);
  }
});

menuBackDrop.addEventListener('click', () => closeNav(hamburgerBtn));

const openNav = (nav) => {
  anime({
    targets: menuBackDrop,
    opacity: 0.65,
    duration: 250,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    begin: () => {
      menuBackDrop.style.display = 'block';
    },
  });

  hamburgerToArrow();

  anime({
    targets: '#mainNav',
    translateX: 200,
    duration: 250,
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });

  navOpen = true;
  nav.classList.add('nav-open');
}

function closeNav(nav) {
  anime({
    targets: menuBackDrop,
    opacity: 0,
    duration: 250,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    complete: () => {
      menuBackDrop.style.display = 'none';
    }
  });
  arrowToHumburger();
  anime({
    targets: '#mainNav',
    translateX: 0,
    opacity: 0,
    duration: 350,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });
  navOpen = false;
  nav.classList.remove('nav-open');
}

const hamburgerToArrow = () => {
  anime({
    targets: '#ham-top-bar',
    duration: 300,
    width: 10,
    y: 6.5,
    rotate: -45,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });

  anime({
    targets: '#ham-mid-bar',
    duration: 300,
    x: 2,
    width: 20,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });

  anime({
    targets: '#ham-bottom-bar',
    width: 10,
    duration: 300,
    y: 5.5,
    rotate: 45,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });
}

const arrowToHumburger = () => {
  anime({
    targets: '#ham-top-bar',
    duration: 300,
    width: 16,
    y: 0,
    rotate: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });

  anime({
    targets: '#ham-mid-bar',
    duration: 300,
    x: 4,
    width: 12,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });

  anime({
    targets: '#ham-bottom-bar',
    width: 16,
    duration: 300,
    y: 12,
    rotate: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });
}