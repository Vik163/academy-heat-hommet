import type { Card } from '@/utils/types/cards';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

const lg = document.getElementById('animated-thumbnails-gallery')!;
const plugin = lightGallery(lg);

const productBlock = document.querySelector('.product')!;
const productInfoBlock = document.querySelector('.product__info')!;
const newImg = productBlock.querySelector(
   '.product__image-add',
) as HTMLImageElement;
let currentCard: Card;

function clickProductBlock(e: Event) {
   const target = e.target as HTMLImageElement;

   if (target.nodeName.toLowerCase() === 'img') {
      const index = currentCard.imgL?.indexOf(target.src)!;
      const arrLinks = currentCard.imgL!;
      if (arrLinks.length! > index + 1) {
         newImg.src = arrLinks[index + 1];
         newImg.alt = currentCard.title;
         setProduct(currentCard, arrLinks[index]);
      } else {
         newImg.src = arrLinks[index - 1];
         newImg.alt = currentCard.title;
         setProduct(currentCard, arrLinks[index]);
      }
   } else {
      console.log('button:');
   }
}

/**
 * Монтирует страницу продукта
 * Создает экземпляр lightGallery и вешает на нее слушатель lgBeforeOpen в которм обновляет ее экземпляр
 * @param card - карточка продукта
 */
export const setProduct = (card: Card, link?: string) => {
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
   img.alt = currentCard.title;

   if (arrImgSmall.length! > 1) {
      arrImgSmall.forEach((c, i) => {
         if (i > 0) {
            if (!document.querySelector('.modal__image-add')) {
               const newA = document.createElement('a');
               newA.classList.add('modal__image-add')!;
               newA.setAttribute('data-src', '');
               newA.setAttribute('data-lg-size', '2400-2400');
               lg.append(newA);

               const newI = document.createElement('img');
               newI.classList.add('product__image_inactive')!;
               newA.append(newI);
            }

            if (!link) {
               newImg.classList.add('product__image-add_active');
               newImg.src = card.imgL![i];
               newImg.alt = card.title;
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
   }
};

// событие срабатывает перед открытием https://www.lightgalleryjs.com/docs/events/
lg.addEventListener('lgBeforeOpen', function (e) {
   plugin.refresh(); // обновляет экземпляр галереи

   // меняю принудительно стили оверлея
   const bg = document.querySelector('.lg-backdrop') as HTMLDivElement;
   bg.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
});

productInfoBlock.addEventListener('click', clickProductBlock);
