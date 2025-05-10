import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_PRODUCT_ID,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Categories, ViewName } from '@/utils/types/catalog';
import { getNameFromList } from '../getNamesGroup/getNamesGroup';

/**
 *  устанавливает данные товаров в localstorage
 */
export const setLocalStorage = (
   view: ViewName | '',
   categories: Categories | '',
   cardId: string,
) => {
   localStorage.setItem(LOCALSTORAGE_TYPE_OF_PRODUCT, view);
   localStorage.setItem(LOCALSTORAGE_CATEGORY_OF_PRODUCT, categories);
   localStorage.setItem(LOCALSTORAGE_PRODUCT_ID, cardId);
};

/**
 *  работает на слушателе 'popstate' - стрелки истории браузера
 *  устанавливает группы товаров в localstorage по группам в адресной строке
 *  если групп в адресной строке нет, то localstorage пустой (для перехода на главную страницу)
 */
export const setLocalStorageByPathname = () => {
   const locationPath = location.pathname;

   const view = localStorage.getItem(LOCALSTORAGE_TYPE_OF_PRODUCT);
   const category = localStorage.getItem(LOCALSTORAGE_CATEGORY_OF_PRODUCT);

   const arrPathname = locationPath.slice(1).split('/').slice(1); // убираю /catalog

   const viewName = arrPathname[0]
      ? (getNameFromList(arrPathname[0], 'view') as ViewName)
      : undefined;
   const categoryName = arrPathname[1]
      ? (getNameFromList(arrPathname[1], 'category') as Categories)
      : undefined;

   if (arrPathname.length > 1) {
      if (arrPathname[0] === 'product') {
         setLocalStorage(
            view as ViewName,
            category as Categories,
            arrPathname[1],
         );
      } else {
         setLocalStorage(viewName!, categoryName!, '');
      }
   } else if (arrPathname.length === 1) {
      setLocalStorage(viewName as ViewName, '', '');
   } else setLocalStorage('', '', '');
};
