import type { Card } from '@/utils/types/cards';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

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

   lightGallery(document.getElementById('animated-thumbnails-gallery')!, {
      // plugins: [lgThumbnail],
      // addClass: 'lg-custom-thumbnails',
      // // Remove the starting animations.
      // // This can be done by overriding CSS as well
      // appendThumbnailsTo: '.lg-outer',
   });

   const bg = document.querySelector('.lg-backdrop') as HTMLDivElement;
   bg.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
};
