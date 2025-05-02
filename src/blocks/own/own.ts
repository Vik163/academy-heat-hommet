import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../cards-products/cards-products';
import catalogPage from '@/pages/catalog.html';

const ownProductionBlock = document.querySelector('.own')!;

export const handleOwn = async () => {
   console.log(window.location.href);

   const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      const btnId = target.id;
      console.log('e:', target.id);

      if (__IS_DEV__) window.location.href = 'catalog';
   };

   handleCards(ownProductionBlock, ownProductionCards, onClick);
};
