//* ----- убирает .html в адрессной строке для разработки--------------------------
export const changeUrl = () => {
   const newURL = location.pathname.split('.')[0];
   // if (window.history != undefined && window.history.pushState != undefined)
   window.history.replaceState(null, '', newURL);
};
