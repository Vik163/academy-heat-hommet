import { pathnameByCategory, pathnameByView } from '@/utils/consts/pathnames';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Category, ViewName } from '@/utils/types/cards';
import { getDataById } from '../getDataFromStore/getDataFromStore';

/**
 *  Возвращает pathname (английск) по переданным данным в localStorage
 */
export const getPathname = () => {
   const view = localStorage.getItem(LOCALSTORAGE_TYPE_OF_PRODUCT) as ViewName;
   const categoryStorage = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   ) as Category;

   console.log('view:', view);
   const pathnameView = pathnameByView[view];
   console.log('pathnameView:', pathnameView);
   const pathnameCategory = pathnameByCategory[categoryStorage];

   const card = getDataById();

   if (card) {
      return card.pathname!;
   }
   if (pathnameCategory) {
      return `${pathnameView}${pathnameCategory}`;
   }
   return pathnameView;
};
