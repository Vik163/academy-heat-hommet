import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../../cards-products/cards-products';
import { setLocalStorageByCardId } from '@/utils/lib/setLocalStorage/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';

const ownProductionBlock = document.querySelector('.own')!;

export const setOwn = async () => {
   const onClickLink = (e: MouseEvent) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLButtonElement;

      setLocalStorageByCardId(link.id);

      redirectOnPage('catalog');
   };

   handleCards(ownProductionCards, onClickLink, ownProductionBlock);
};
