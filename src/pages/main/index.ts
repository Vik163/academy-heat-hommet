import { animationScrolling } from '@/utils/lib/animationScrolling';
import './index.css';
import lozad from '@/utils/lib/lozad';
import { setSlider } from '@/blocks/index/slider/scripts/slider';
import { setHeader } from '@/blocks/header/header';
import { setSDM } from '@/blocks/index/sdm/sdm';
import { setSystems } from '@/blocks/index/systems/systems';
import { setFooter } from '@/blocks/footer/footer';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';

// === ленивая загрузка фотографий ==========
const observerLazy = lozad();
observerLazy.observe();

//! для разрабтки ===========================
if (__IS_DEV__ && location.pathname !== '/') {
   const locationPath = location.pathname;
   if (locationPath === '/index.html') {
      window.history.pushState(null, '', '/');
   } else if (locationPath === '/contacts') {
      location.href = `/contacts.html`;
   } else if (locationPath === '/politic') {
      location.href = `/politic.html`;
   } else if (locationPath === '/errors') {
      location.href = `/errors.html`;
   } else location.href = `/catalog.html`;
} else {
   setLocalStorage('', '', '');
}
//! ==========================================

// === анимация при скролле вправо ================================
const elementsOnRight = document.querySelectorAll('.animation-right');

elementsOnRight.forEach((el) => {
   animationScrolling(el, 'right');
});

setHeader();

// === слайдер =====
setSlider();

setSystems();

// === система сухого монтажа =====
setSDM();

setFooter();
