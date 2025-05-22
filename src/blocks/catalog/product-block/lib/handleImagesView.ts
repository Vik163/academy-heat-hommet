import type { Card } from '@/utils/types/cards';

import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

const lg = document.getElementById('animated-thumbnails-gallery')!;

const plugin = lightGallery(lg, {
   allowMediaOverlap: true, // увеличивает изображение на всю высоту экрана
});

const productBlock = document.querySelector('.product')!;
const newImg = productBlock.querySelector(
   '.product__image-add',
) as HTMLImageElement;
let currentCard: Card;

/**
 * Монтирует изображения на странице продукта
 * Создает экземпляр lightGallery и вешает на нее слушатель lgBeforeOpen в которм обновляет ее экземпляр
 * @param card - карточка продукта
 */

export const handleImagesView = (card: Card, link?: string) => {
   currentCard = card;

   const img = document.querySelector('.product__image') as HTMLImageElement;

   // если нет изображения показывает заглушку
   if (card.imgL) {
      img.classList.remove('product__image-no-img'); // заглушка

      const arrImgBig = currentCard.imgB!;
      const arrImgSmall = currentCard.imgL!;

      const imageProduct = productBlock.querySelector(
         '.modal__image',
      )! as HTMLLinkElement;

      const imgB = link ? arrImgBig[arrImgSmall.indexOf(link)] : arrImgBig[0];
      imageProduct.setAttribute('data-src', imgB);

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
   } else img.classList.add('product__image-no-img');
};

// событие срабатывает перед открытием https://www.lightgalleryjs.com/docs/events/
lg.addEventListener('lgBeforeOpen', function (e) {
   plugin.refresh(); // обновляет экземпляр галереи
});
