//* ----- убирает .html в адрессной строке для разработки--------------------------

export const changeUrl = (pathname: string) => {
   const path = `/${pathname}`;

   const newURL = `catalog${path}`;
   // if (window.history != undefined && window.history.pushState != undefined)
   window.history.replaceState(null, '', newURL);
};
