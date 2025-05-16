import type { Card } from '@/utils/types/cards';

export const setProduct = (card: Card) => {
   const productBlock = document.querySelector('.product')!;

   const titleProduct = productBlock.querySelector('.product__title')!;
   const imageProduct = productBlock.querySelector(
      '.product__image',
   )! as HTMLImageElement;
   titleProduct.textContent = card.title;
   imageProduct.alt = card.title;
   imageProduct.src = card.imgL!;
};
