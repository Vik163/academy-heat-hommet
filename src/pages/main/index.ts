import { animationScrolling } from '@/utils/lib/animationScrolling';
import './index.css';
import lozad from '@/utils/lib/lozad';
import { setSlider } from '@/blocks/index/slider/slider';
import { setOwn } from '@/blocks/index/own/own';
import { setHeader } from '@/blocks/header/header';
import { setSDM } from '@/blocks/index/sdm/sdm';
import { setSystems } from '@/blocks/index/systems/systems';
import { setFooter } from '@/blocks/footer/footer';

const dateBlock = document.querySelector('.footer__date')!;
const date = new Date().getFullYear();

function init() {
   // === ленивая загрузка фотографий ==========
   const observerLazy = lozad();
   observerLazy.observe();

   // устанавливаю по умолчанию каталог, чтобы по ссылке из html сразу туда перейти
   // if (location.pathname === '/') setLocalStorage('catalog', '', '', '');

   //TODO для разрабтки ===========================
   if (__IS_DEV__ && location.pathname !== '/') {
      const locationPath = location.pathname;
      if (locationPath === '/index.html') {
         window.history.pushState(null, '', '/');
      } else if (locationPath === '/contacts') {
         location.href = `/contacts.html`;
      } else if (locationPath === '/politic') {
         location.href = `/politic.html`;
      } else location.href = `/catalog.html`;
   }

   // === анимация при скролле вправо ================================
   const elementsOnRight = document.querySelectorAll('.animation-right');

   elementsOnRight.forEach((el) => {
      animationScrolling(el, 'right');
   });
}

init();

setHeader();

// === слайдер =====
setSlider();

setSystems();

setFooter();

window.onload = function () {
   // === собственное производство =====
   setOwn();

   setSDM();

   dateBlock.textContent = date.toString();
};
