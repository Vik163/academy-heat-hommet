import type { Card } from '@/utils/types/cards';
import 'lightgallery/css/lightgallery.css';
import { handleImagesView } from './lib/handleImagesView/handleImagesView';

const productInfoBlock = document.querySelector('.product__info')!;
const newImg = document.querySelector(
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
         handleImagesView(currentCard, arrLinks[index]);
      } else {
         newImg.src = arrLinks[index - 1];
         handleImagesView(currentCard, arrLinks[index]);
      }
   } else {
      console.log('button:');
   }
}

export const setProduct = (card: Card) => {
   currentCard = card;

   handleImagesView(card);
};

productInfoBlock.addEventListener('click', clickProductBlock);
