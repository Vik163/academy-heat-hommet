import type { Routes } from '@/utils/types/routes';
import { getPathname } from '../getPathname/getPathname';

/**
 * Направляет на указанную в параметре страницу
 * @param page - роут страницы
 */
export const redirectOnPage = (page: Routes) => {
   const path = getPathname();
   console.log('path:', path);
   const pathPage = path === 'catalog' ? '/catalog' : path;
   console.log('pathPage:', pathPage);

   const address = __IS_DEV__
      ? pathPage
      : `https://academy-heat-hommet.vercel.app/${page}/${path}`;
   console.log('address:', address);
   window.location.href = address;
};
