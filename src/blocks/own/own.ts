import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../cards-products/cards-products';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import type { Category, ViewName } from '@/utils/types/cards';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';

const ownProductionBlock = document.querySelector('.own')!;

export const setOwn = async () => {
   const onClickLink = (e: MouseEvent) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const arrBtnId = link.id.split('&');
      const view = arrBtnId[0] as ViewName;
      const category = arrBtnId[1] as Category;
      const cardId = arrBtnId[2];

      setLocalStorage(view, category, cardId);

      redirectOnPage('catalog');
   };

   handleCards(ownProductionBlock, ownProductionCards, onClickLink);
};
