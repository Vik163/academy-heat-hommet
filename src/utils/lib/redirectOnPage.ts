import type { Routes } from '@/utils/types/routes';
import { getPathname } from './getPathname';

/**
 * Направляет на указанную в параметре страницу
 * @param page - роут страницы
 */
export const redirectOnPage = (page: Routes) => {
   console.log('page:', page);
   const path = getPathname();
   console.log('path:', path);
   const getUrl = () => {
      if (page === 'contacts') return '/contacts.html';
      return '';
   };

   const getPath = () => {
      if (path === 'contacts') return '';
      if (path === 'catalog') return '';
      return path;
   };
   const pathPage = path === '' ? '/' : path;
   console.log('getPath():', getPath());
   const address = __IS_DEV__
      ? `/${page}`
      : `https://academy-heat-hommet.vercel.app/${page}/${getPath()}`;
   console.log('address:', address);
   window.location.href = address;
};
