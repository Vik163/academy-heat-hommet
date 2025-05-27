import type { Routes } from '@/utils/types/routes';
import { getPathname } from './getPathname';

/**
 * Направляет на указанную в параметре страницу
 * @param page - роут страницы
 */
export const redirectOnPage = (page: Routes) => {
   const path = getPathname();

   const getPath = () => {
      if (
         path === 'contacts' ||
         path === 'catalog' ||
         path === 'politic' ||
         path === 'error'
      )
         return '';
      return path;
   };

   const address = __IS_DEV__
      ? `/${page}`
      : `https://academy-heat-hommet.vercel.app/${page}/${getPath()}`;

   window.location.href = address;
};
