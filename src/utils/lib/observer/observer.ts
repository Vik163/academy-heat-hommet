// ------- ленивая загрузка --------------------
//! -------- передаем в коллбек аргументом пересечение (boolean)
export type ObserveCallback = (
   entry: IntersectionObserverEntry,
   ...args: any
) => void;

export const observeElement = (el: Element, callback: ObserveCallback) => {
   const observerAnimation = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry) => callback(entry));
      },
   );

   observerAnimation.observe(el);
};
