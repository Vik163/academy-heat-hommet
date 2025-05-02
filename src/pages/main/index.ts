import { animationScrolling } from '@/utils/lib/animation-scrolling/animation-scrolling';
import './index.css';
import lozad from '@/utils/lib/lozad/lozad';
import { slider } from '@/blocks/slider/slider';
import { handleOwn } from '@/blocks/own/own';

//TODO для разрабтки ===========================
if (__IS_DEV__ && location.pathname !== '/') {
   console.log('isDev');

   location.href = `${location.pathname}.html${location.search}`;
}

// === ленивая загрузка фотографий ==========
const observerLazy = lozad();
observerLazy.observe();

// === анимация при скролле вправо ================================
const elementsOnRight = document.querySelectorAll('.animation-right');

elementsOnRight.forEach((el) => {
   animationScrolling(el, 'right');
});

// === слайдер =====
slider();

// === собственное производство =====

handleOwn();
