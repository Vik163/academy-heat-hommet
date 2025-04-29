// ------- ленивая загрузка --------------------
//! -------- передаем в коллбек аргументом пересечение (boolean)
export type ObserveCallback = (intersection: boolean, ...args: any) => void;

export const observeElement = (el: Element, callback: ObserveCallback) => {
   const observerAnimation = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry) => callback(entry.isIntersecting));
      },
   );

   observerAnimation.observe(el);
};
