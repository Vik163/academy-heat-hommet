import type { Card } from '@/utils/types/cards';
import 'lightgallery/css/lightgallery.css';
import { handleImagesView } from './handleImagesView';
import { setModalCall } from '@/blocks/modal-call/scripts/modal-call';
import { $class } from '@/utils/lib/getElement';
import { pastHtml } from '@/utils/lib/pastHtml';
import { removeElement } from '@/utils/lib/removeElement';

const productInfoBlock = $class('product__info');
const productDescription = $class('product__description');
const newImg = $class('product__image-add') as HTMLImageElement;
const titleDescription = $class(
   'product__description-title',
   productDescription,
);
let currentCard: Card;

const setTitle = () => {
   const titleProduct = $class('product__title');
   titleProduct.textContent = currentCard.title;
};

function clickProductBlock(e: Event) {
   const target = e.target as HTMLImageElement;
   const arrLinks = currentCard.imgL!;
   if (target.nodeName.toLowerCase() === 'img') {
      const index = currentCard.imgL?.indexOf(target.src)!;

      if (arrLinks.length! > index + 1) {
         newImg.src = arrLinks[index + 1];
         setTitle();
         handleImagesView(currentCard, arrLinks[index]);
      } else {
         setTitle();
         newImg.src = arrLinks[index - 1];
         handleImagesView(currentCard, arrLinks[index]);
      }
   } else {
      setModalCall(currentCard.title, arrLinks[0]);
   }
}

export const setProduct = (card: Card) => {
   currentCard = card;

   setTitle();

   handleImagesView(card);

   if (card.description) {
      pastHtml(
         card.description,
         'product__description-texts',
         productDescription,
      );
   } else {
      removeElement('product__description-texts');
      titleDescription.textContent = '';
   }
};

productInfoBlock.addEventListener('click', clickProductBlock);
