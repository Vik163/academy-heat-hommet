import { animationScrolling } from '@/utils/lib/animation-scrolling/animation-scrolling';
import './styles/index.css';
import lozad from '@/utils/lib/lozad/lozad';
import { slider } from '@/blocks/slider/slider';

// === ленивая загрузка фотографий ==========
const observerLazy = lozad();
observerLazy.observe();

// === анимация при скролле ================================
const elements = document.querySelectorAll('.animation-right');
elements.forEach((el) => {
   animationScrolling(el, 'right');
});

// === слайдер =====
slider();
