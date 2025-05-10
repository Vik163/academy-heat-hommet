import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../../cards-products/cards-products';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import type { Categories, ViewName } from '@/utils/types/catalog';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';

const ownProductionBlock = document.querySelector('.own')!;

export const setOwn = async () => {
   const onClickLink = (e: MouseEvent) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLButtonElement;
      const arrBtnId = link.id.split('&');
      const view = arrBtnId[0] as ViewName;
      const category = arrBtnId[1] as Categories;
      const cardId = arrBtnId[2];

      setLocalStorage(view, category, cardId);

      redirectOnPage('catalog');
   };

   handleCards(ownProductionCards, onClickLink, ownProductionBlock);
};
