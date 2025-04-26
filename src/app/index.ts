import { animationScrolling } from '@/utils/lib/animation-scrolling/animation-scrolling';
import './styles/index.css';
import lozad from '@/utils/lib/lozad/lozad';

const observerLazy = lozad();
observerLazy.observe();

const elements = document.querySelectorAll('.animation-right');
elements.forEach((el) => {
   animationScrolling(el, 'right');
});
