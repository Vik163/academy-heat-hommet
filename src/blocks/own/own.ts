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

      const address = __IS_DEV__
         ? 'catalog.html'
         : `https://academy-heat-hommet.vercel.app/catalog/${target.id}`;
      window.location.href = address;
   };

   handleCards(ownProductionBlock, ownProductionCards, onClick);
};
