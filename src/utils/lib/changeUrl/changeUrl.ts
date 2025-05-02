//* ----- убирает .html в адрессной строке --------------------------
export const changeUrl = () => {
   const newURL = location.pathname.split('.')[0];
   console.log('newURL:', newURL);
   // if (window.history != undefined && window.history.pushState != undefined)
   window.history.replaceState(null, '', newURL);
};
