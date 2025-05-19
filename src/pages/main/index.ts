import { animationScrolling } from '@/utils/lib/animationScrolling';
import './index.css';
import lozad from '@/utils/lib/lozad';
import { setSlider } from '@/blocks/index/slider/slider';
import { setOwn } from '@/blocks/index/own/own';
import { setHeader } from '@/blocks/header/header';

// === ленивая загрузка фотографий ==========
const observerLazy = lozad();
observerLazy.observe();

//TODO для разрабтки ===========================
if (__IS_DEV__ && location.pathname !== '/') {
   const locationPath = location.pathname;
   locationPath === '/index.html'
      ? window.history.pushState(null, '', '/')
      : (location.href = `/catalog.html`);
}

setHeader();

// === анимация при скролле вправо ================================
const elementsOnRight = document.querySelectorAll('.animation-right');

elementsOnRight.forEach((el) => {
   animationScrolling(el, 'right');
});

// === слайдер =====
setSlider();

window.onload = function () {
   // === собственное производство =====
   setOwn();
};
