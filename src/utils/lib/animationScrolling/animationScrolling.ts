import { ObserveCallback, observeElement } from '../observer/observer';

type Dir = 'right' | 'left' | 'up' | 'down';

const classByDirections = (dir: Dir) => {
   switch (dir) {
      case 'right':
         return 'on-right';
      case 'left':
         return 'on-left';
      case 'down':
         return 'on-down';
      case 'up':
         return 'on-up';
      default:
         return 'on-up';
   }
};

const toggleClass: ObserveCallback = (entry, el: Element, direction: Dir) => {
   el.classList.toggle(classByDirections(direction), entry.isIntersecting);
};

/**
 * Добавляет или удаляет класс css
 * @param el - Элемент
 * @param direction - направление "right" | "left" | "up" | "down"
 */
export const animationScrolling = (el: Element, direction: Dir) => {
   observeElement(el, (intersection) =>
      toggleClass(intersection, el, direction),
   );

   // const observerAnimation = new IntersectionObserver((entries: any[]) => {
   //    entries.forEach((entry) => {
   //       entry.target.classList.toggle(
   //          classByDirections(direction),
   //          entry.isIntersecting,
   //       );
   //    });
   // });

   // observerAnimation.observe(el);
};

// const options = { root: null, rootMargin: '0px', threshold: 1 };
