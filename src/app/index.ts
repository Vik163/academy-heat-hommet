import { animationScrolling } from '@/utils/lib/animation-scrolling/animation-scrolling';
import './styles/index.css';
import lozad from '@/utils/lib/lozad/lozad';
import { slider } from '@/blocks/slider/slider';
import { handleOwn } from '@/blocks/own/own';
const arr = window.location.href.split('/');
const location = arr[arr.length - 1];
console.log('location:', location);
// === ленивая загрузка фотографий ==========
const observerLazy = lozad();
observerLazy.observe();

// === анимация при скролле вправо ================================
const elementsOnRight = document.querySelectorAll('.animation-right');
const hommet = document.querySelector('.hommet');
const marquee = document.querySelector('.marquee');
elementsOnRight.forEach((el) => {
   animationScrolling(el, 'right');
});

// === слайдер =====
if (location !== 'catalog') {
   slider();
} else {
   hommet?.classList.add('destroy');
   marquee?.classList.add('destroy');
}

// === собственное производство =====

handleOwn();
