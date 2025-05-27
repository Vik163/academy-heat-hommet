//* ----- убирает .html в адрессной строке для разработки--------------------------

import { Routes } from '../types/routes';
import { getPathname } from './getPathname';

/**
 * для dev-server.
 * Функция добавления роутов в адрессной строке
 * 1. проверяет путь в адресной строке
 * 2. получает путь сформированный по данным в localStorage
 * 3. разбивает в массив
 * 4. проверяет если в адресной строке уже есть вид продукта, полученный из пути (localStorage),
 * добавляет только категорию, иначе добавляет вид и категорию.
 * @param page - добавляется только когда надо перейти на страницу catalog
 */

export const changeUrl = (page?: Routes) => {
   const locationPath = location.pathname;

   const pathname = getPathname();

   const arrPathname = pathname.split('/');

   const viewProducts = Boolean(arrPathname[0]) ? arrPathname[0] : null;

   let path = '';

   if (viewProducts && locationPath.includes(`${viewProducts}/`)) {
      path = arrPathname[1];
   } else path = pathname;

   const getUrl = () => {
      if (
         page === 'catalog' &&
         path !== 'contacts' &&
         path !== 'politic' &&
         path !== 'errors'
      ) {
         return `catalog/${path}`;
      } else if (page === 'contacts') {
         return '/contacts';
      } else if (page === 'politic') {
         return '/politic';
      } else if (page === 'errors') {
         return '/errors';
      } else {
         return '';
      }
   };

   const newURL = getUrl() || path;

   window.history.pushState(null, '', newURL || '/catalog');
};
