import type { Routes } from '@/utils/types/routes';
import { getPathname } from '../getPathname/getPathname';

/**
 * Направляет на указанную в параметре страницу
 * @param page - роут страницы
 */
export const redirectOnPage = (page: Routes) => {
   const path = getPathname();
   const pathPage = path === 'catalog' ? '' : path === '' ? '/' : path;

   const address = __IS_DEV__
      ? pathPage
      : `https://academy-heat-hommet.vercel.app/${page}/${pathPage}`;
   window.location.href = address;
};
