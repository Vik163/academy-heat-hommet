import { animationScrolling } from '@/utils/lib/animationScrolling/animationScrolling';
import './index.css';
import lozad from '@/utils/lib/lozad/lozad';
import { setSlider } from '@/blocks/slider/slider';
import { setOwn } from '@/blocks/own/own';
import { setNavbar } from '@/blocks/navbar/navbar';

//TODO для разрабтки ===========================
if (__IS_DEV__ && location.pathname !== '/') {
   location.href = `/catalog.html`;
}

setNavbar();

// === ленивая загрузка фотографий ==========
const observerLazy = lozad();
observerLazy.observe();

// === анимация при скролле вправо ================================
const elementsOnRight = document.querySelectorAll('.animation-right');

elementsOnRight.forEach((el) => {
   animationScrolling(el, 'right');
});

// === слайдер =====
setSlider();

// === собственное производство =====

setOwn();
