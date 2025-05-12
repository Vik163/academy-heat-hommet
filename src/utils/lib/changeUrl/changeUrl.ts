//* ----- убирает .html в адрессной строке для разработки--------------------------

import { getPathname } from '../getPathname/getPathname';

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

export const changeUrl = (page?: 'catalog') => {
   const locationPath = location.pathname;

   const pathname = getPathname();
   const arrPathname = pathname.split('/');
   const viewProducts = arrPathname[0];

   let path = '';
   if (locationPath.includes(`${viewProducts}/`)) {
      path = arrPathname[1];
   } else path = pathname;

   const newURL = page ? `catalog/${path}` : path;

   window.history.pushState(null, '', newURL || '/catalog');
};
