const startAnimation = (entries: any[]) => {
   entries.forEach((entry) => {
      entry.target.classList.toggle(
         'slide-in-from-right',
         entry.isIntersecting,
      );
   });
};

type Dir = 'right' | 'left' | 'up' | 'down';

const classByDirections = (dir: Dir) => {
   switch (dir) {
      case 'right':
         return 'on-right';
      case 'left':
         return 'on-left';
      case 'down':
         return 'on-down';

      default:
         return 'on-up';
   }
};

export const animationScrolling = (el: Element, direction: Dir) => {
   const observerAnimation = new IntersectionObserver((entries: any[]) => {
      entries.forEach((entry) => {
         entry.target.classList.toggle(
            classByDirections(direction),
            entry.isIntersecting,
         );
      });
   });

   observerAnimation.observe(el);
};

// const options = { root: null, rootMargin: '0px', threshold: 1 };
