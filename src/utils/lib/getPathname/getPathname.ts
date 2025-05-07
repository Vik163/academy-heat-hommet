import { pathnameByCategories, pathnameByView } from '@/utils/consts/pathnames';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Categories, ViewName } from '@/utils/types/cards';
import { getDataById } from '../getDataFromStore/getDataFromStore';

/**
 *  Возвращает pathname (английск) по переданным данным в localStorage
 */
export const getPathname = () => {
   const view = localStorage.getItem(LOCALSTORAGE_TYPE_OF_PRODUCT) as ViewName;
   const categoriesStorage = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   ) as Categories;

   const pathnameView = pathnameByView[view];
   const pathnameCategory = pathnameByCategories[categoriesStorage];

   const card = getDataById();

   if (card) {
      return card.pathname!;
   }
   if (pathnameView && pathnameCategory) {
      return `${pathnameView}/${pathnameCategory}`;
   }
   if (pathnameView) {
      return pathnameView;
   }
   return '';
};
