import type { Routes } from '@/utils/types/routes';
import { getPathname } from '../getPathname/getPathname';

/**
 * Направляет на указанную в параметре страницу
 * @param page - роут страницы
 */
export const redirectOnPage = (page: Routes) => {
   const path = getPathname();

   const address = __IS_DEV__
      ? `${page}`
      : `https://academy-heat-hommet.vercel.app/${page}/${path}`;
   window.location.href = address;
};
