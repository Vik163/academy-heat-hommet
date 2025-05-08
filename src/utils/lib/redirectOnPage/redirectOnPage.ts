import { getPathname } from '../getPathname/getPathname';

export const redirectOnPage = (page?: 'catalog' | '') => {
   const path = getPathname();

   const addressPage = page ? page : 'catalog';
   console.log('redirectOnPage:', addressPage);

   const address = __IS_DEV__
      ? `${page}`
      : `https://academy-heat-hommet.vercel.app/${addressPage}/${path}`;
   window.location.href = address;
};
