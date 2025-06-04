import { limit } from '@/utils/consts/paginate';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import { getDataByView } from '@/utils/lib/getDataFromStore';
import type { Categories, ViewName } from '@/utils/types/catalog';

let totalItems = 0;

export function getPaginateData(numPage: number) {
   const obj = getDataByView();

   const categoryProducts = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   )! as Categories;

   const typeProducts = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;

   const cardsAll = obj[categoryProducts || typeProducts]!;
   totalItems = cardsAll.length;
   const numPagesAll = Math.ceil(totalItems / limit);
   const firstIndex = (numPage - 1) * limit;
   const secondIndex = numPage * limit;

   const cards = cardsAll.slice(firstIndex, secondIndex);

   return { totalItems, cardsAll, cards, numPagesAll };
}
