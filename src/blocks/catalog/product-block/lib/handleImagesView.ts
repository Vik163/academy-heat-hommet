import { $add, $class, $id, $remove } from '@/utils/lib/getElement';
import { loadSrc } from '@/utils/lib/loadSrc';
import type { Card } from '@/utils/types/cards';

import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

const lg = $id('animated-thumbnails-gallery');

const plugin = lightGallery(lg, {
   allowMediaOverlap: true, // увеличивает изображение на всю высоту экрана
});

const productBlock = $class('product');
const newImg = $class('product__image-add', productBlock) as HTMLImageElement;
let currentCard: Card;

/**
 * Монтирует изображения на странице продукта
 * Создает экземпляр lightGallery и вешает на нее слушатель lgBeforeOpen в которм обновляет ее экземпляр
 * @param card - карточка продукта
 */

export const handleImagesView = (card: Card, link?: string) => {
   currentCard = card;

   const img = $class('product__image') as HTMLImageElement;

   // если нет изображения показывает заглушку
   if (card.imgL) {
      $remove('product__image-no-img', img); // заглушка

      const arrImgBig = currentCard.imgB!;
      const arrImgSmall = currentCard.imgL!;

      const imageProduct = $class(
         'modal__image',
         productBlock,
      ) as HTMLLinkElement;

      const imgB = link ? arrImgBig[arrImgSmall.indexOf(link)] : arrImgBig[0];
      imageProduct.setAttribute('data-src', imgB);

      img.src = link || arrImgSmall[0];

      if (arrImgSmall.length! > 1) {
         arrImgSmall.forEach((c, i) => {
            if (i > 0) {
               if (!$class('modal__image-add')) {
                  const newA = document.createElement('a');
                  $add('modal__image-add', newA);
                  newA.setAttribute('data-src', '');
                  newA.setAttribute('data-lg-size', '1000-1000');
                  lg.append(newA);

                  const newI = document.createElement('img');
                  $add('product__image_inactive', newI);
                  newA.append(newI);
               }

               if (!link) {
                  $add('product__image-add_active', newImg);
                  newImg.src = card.imgL![i];
               }

               const imageProductAdd = $class('modal__image-add', productBlock);
               if (c === link) {
                  const el = arrImgBig.find((e, ind) => i !== ind)!;
                  imageProductAdd.setAttribute('data-src', el);
               } else imageProductAdd.setAttribute('data-src', arrImgBig[i]);
            }
         });
      } else {
         $remove('product__image-add_active', newImg);
      }
   } else {
      // Заглушка "нет изображения"
      img.classList.add('product__image-no-img');
      img.src = loadSrc('#');
   }
};

// событие срабатывает перед открытием https://www.lightgalleryjs.com/docs/events/
lg.addEventListener('lgBeforeOpen', function (e) {
   plugin.refresh(); // обновляет экземпляр галереи
});
