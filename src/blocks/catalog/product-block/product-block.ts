import type { Card } from '@/utils/types/cards';
import 'lightgallery/css/lightgallery.css';
import { handleImagesView } from './lib/handleImagesView';
import { pastText } from '@/utils/lib/pastText';
import { setModalCall } from '@/blocks/modal-call/modal-call';
import { $add, $class, $remove } from '@/utils/lib/getElement';

const productInfoBlock = $class('product__info');
const productDescription = $class('product__description');
const newImg = $class('product__image-add') as HTMLImageElement;
let currentCard: Card;

const setTitle = () => {
   const titleProduct = $class('product__title');
   titleProduct.textContent = currentCard.title;
};

function clickProductBlock(e: Event) {
   const target = e.target as HTMLImageElement;

   if (target.nodeName.toLowerCase() === 'img') {
      const index = currentCard.imgL?.indexOf(target.src)!;
      const arrLinks = currentCard.imgL!;
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
      setModalCall(currentCard.title);
   }
}

export const setProduct = (card: Card) => {
   currentCard = card;

   setTitle();
   handleImagesView(card);
   if (card.description) {
      pastText(productDescription, card.description, 'product');
      $remove('product__description_inactive', productDescription);
   } else $add('product__description_inactive', productDescription);
};

productInfoBlock.addEventListener('click', clickProductBlock);
