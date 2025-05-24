import { pathnameByCategories, pathnameByView } from '@/utils/consts/pathnames';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Categories, ViewName } from '@/utils/types/catalog';
import { getDataById } from './getDataFromStore';

/**
 *  Возвращает pathname (английск) по данным в localStorage
 */
export const getPathname = () => {
   const view = localStorage.getItem(LOCALSTORAGE_TYPE_OF_PRODUCT) as ViewName;
   const categoriesStorage = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   ) as Categories;

   const pathnameCategory = pathnameByCategories[categoriesStorage];
   const pathnameView = pathnameByView[view];

   const card = getDataById();

   if (card) {
      return card.pathname!;
   } else if (pathnameView && !pathnameCategory) {
      return pathnameView;
   } else if (pathnameView && pathnameCategory) {
      return `${pathnameView}/${pathnameCategory}`;
   } else return '';
};
