import { getPathname } from '../getPathname/getPathname';

export const redirectOnPage = (page?: 'catalog' | 'contacts') => {
   const path = getPathname();

   // console.log('page:', page);
   const addressPage = page ? page : 'catalog';

   const address = __IS_DEV__
      ? `${page}.html`
      : `https://academy-heat-hommet.vercel.app/${addressPage}/${path}`;
   window.location.href = address;
};
