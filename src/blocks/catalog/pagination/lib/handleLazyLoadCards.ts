import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Categories, ViewName } from '@/utils/types/catalog';
import { getPaginateData } from './getPaginateData';
import { handleCards } from '@/blocks/cards-products/cards-products';

export const handleLazyLoadCards = (
   entry: IntersectionObserverEntry,
   numPage: number,
) => {
   const viewProduct = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;

   const category = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   ) as Categories;

   // сбрасываю загрузку основного каталога
   if ((viewProduct === 'Хомуты' && !category) || !viewProduct) return;

   if (entry.isIntersecting) {
      const { cards } = getPaginateData(numPage);
      handleCards(cards);
      numPage = numPage + 1;
   }

   return numPage;
};
