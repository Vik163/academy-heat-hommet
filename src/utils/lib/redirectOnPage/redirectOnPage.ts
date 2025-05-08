import { getPathname } from '../getPathname/getPathname';

export const redirectOnPage = (page?: 'catalog' | 'index') => {
   const path = getPathname();

   const addressPage = page ? page : 'catalog';
   console.log('redirectOnPage:', addressPage);

   const address = __IS_DEV__
      ? `${page}.html`
      : `https://academy-heat-hommet.vercel.app/${addressPage}/${path}`;
   window.location.href = address;
};
