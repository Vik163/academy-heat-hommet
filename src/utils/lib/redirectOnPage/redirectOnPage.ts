export const redirectOnPage = (page: 'catalog' | 'conatacts') => {
   const address = __IS_DEV__
      ? `${page}.html`
      : `https://academy-heat-hommet.vercel.app/${page}`;
   window.location.href = address;
};
