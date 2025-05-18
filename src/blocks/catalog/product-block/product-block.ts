import type { Card } from '@/utils/types/cards';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

const lg = document.getElementById('animated-thumbnails-gallery')!;
const plugin = lightGallery(lg);

/**
 * Монтирует страницу продукта
 * Создает экземпляр lightGallery и вешает на нее слушатель lgBeforeOpen в которм обновляет ее экземпляр
 * @param card - карточка продукта
 */
export const setProduct = (card: Card) => {
   const productBlock = document.querySelector('.product')!;

   const titleProduct = productBlock.querySelector('.product__title')!;
   const imageProduct = productBlock.querySelector(
      '.product__image',
   )! as HTMLLinkElement;
   titleProduct.textContent = card.title;
   imageProduct.setAttribute('data-src', card.imgB!);

   const img = document.querySelector('.modal__image') as HTMLImageElement;
   img.src = card.imgL!;
   img.alt = card.title;
};

// событие срабатывает перед открытием https://www.lightgalleryjs.com/docs/events/
lg.addEventListener('lgBeforeOpen', function (e) {
   plugin.refresh(); // обновляет экземпляр галереи
   // меняю принудительно стили оверлея
   const bg = document.querySelector('.lg-backdrop') as HTMLDivElement;
   bg.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
});
