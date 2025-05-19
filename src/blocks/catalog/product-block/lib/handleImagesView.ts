import type { Card } from '@/utils/types/cards';

import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import mediumZoom from 'lightgallery/plugins/mediumZoom';

const lg = document.getElementById('animated-thumbnails-gallery')!;

const plugin = lightGallery(lg, {
   plugins: [mediumZoom],
   backgroundColor: 'rgba(0, 0, 0, 0.9)',
   getCaptionFromTitleOrAlt: false,
});

const productBlock = document.querySelector('.product')!;
const newImg = productBlock.querySelector(
   '.product__image-add',
) as HTMLImageElement;
let currentCard: Card;

/**
 * Монтирует страницу продукта
 * Создает экземпляр lightGallery и вешает на нее слушатель lgBeforeOpen в которм обновляет ее экземпляр
 * @param card - карточка продукта
 */

export const handleImagesView = (card: Card, link?: string) => {
   currentCard = card;
   const titleProduct = productBlock.querySelector('.product__title')!;
   const arrImgBig = currentCard.imgB!;
   const arrImgSmall = currentCard.imgL!;

   const imageProduct = productBlock.querySelector(
      '.modal__image',
   )! as HTMLLinkElement;

   titleProduct.textContent = currentCard.title;
   const imgB = link ? arrImgBig[arrImgSmall.indexOf(link)] : arrImgBig[0];
   imageProduct.setAttribute('data-src', imgB);

   const img = document.querySelector('.product__image') as HTMLImageElement;
   img.src = link || arrImgSmall[0];

   if (arrImgSmall.length! > 1) {
      arrImgSmall.forEach((c, i) => {
         if (i > 0) {
            if (!document.querySelector('.modal__image-add')) {
               const newA = document.createElement('a');
               newA.classList.add('modal__image-add')!;
               newA.setAttribute('data-src', '');
               newA.setAttribute('data-lg-size', '1000-1000');
               lg.append(newA);

               const newI = document.createElement('img');
               newI.classList.add('product__image_inactive')!;
               newA.append(newI);
            }

            if (!link) {
               newImg.classList.add('product__image-add_active');
               newImg.src = card.imgL![i];
            }

            const imageProductAdd =
               productBlock.querySelector('.modal__image-add')!;
            if (c === link) {
               const el = arrImgBig.find((e, ind) => i !== ind)!;
               imageProductAdd.setAttribute('data-src', el);
            } else imageProductAdd.setAttribute('data-src', arrImgBig[i]);
         }
      });
   } else {
      newImg.classList.remove('product__image-add_active');
   }
};

// событие срабатывает перед открытием https://www.lightgalleryjs.com/docs/events/
lg.addEventListener('lgBeforeOpen', function (e) {
   plugin.refresh(); // обновляет экземпляр галереи

   // // меняю принудительно стили оверлея
   // const bg = document.querySelector('.lg-backdrop') as HTMLDivElement;
   // bg.classList.add('backdrop_active');
   // bg.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
});
