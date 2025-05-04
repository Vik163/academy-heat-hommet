export const redirectOnPage = (page: 'catalog' | 'conatacts', path: string) => {
   const address = __IS_DEV__
      ? `${page}.html`
      : `https://academy-heat-hommet.vercel.app/${page}.html`;
   window.location.href = address;
};
