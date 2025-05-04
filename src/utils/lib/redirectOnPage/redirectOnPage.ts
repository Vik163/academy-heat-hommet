export const redirectOnPage = (page: 'catalog' | 'conatacts', path: string) => {
   console.log('path:', path);
   const address = __IS_DEV__
      ? `${page}.html`
      : `https://academy-heat-hommet.vercel.app/${page}/${path}`;
   // window.location.href = address;
};
