import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../../cards-products/cards-products';
import { setLocalStorageByCardId } from '@/utils/lib/setLocalStorage/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { ObserveCallback, observer } from '@/utils/lib/observer/observer';

const ownProductionBlock = document.querySelector('.own')!;

const onClickLink = (e: MouseEvent) => {
   e.preventDefault();
   const link = e.currentTarget as HTMLButtonElement;

   setLocalStorageByCardId(link.id);

   redirectOnPage('catalog');
};

const setCards: ObserveCallback = (entry, isLoaded) => {
   if (entry.isIntersecting) {
      if (!isLoaded) {
         handleCards(ownProductionCards, onClickLink, ownProductionBlock);
      }
   }
};

export const setOwn = async () => {
   // ленивая загрузка
   observer(ownProductionBlock, setCards);
};
