export const redirectOnPage = (page: 'catalog' | 'contacts', path: string) => {
   const address = __IS_DEV__
      ? `${page}.html`
      : `https://academy-heat-hommet.vercel.app/${page}/${path}`;
   window.location.href = address;
};
