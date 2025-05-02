//* ----- убирает .html в адрессной строке для разработки--------------------------
export const changeUrl = () => {
   const newURL = location.pathname.split('.')[0];
   const url = `${newURL}${location.search}`;
   console.log('location.pathname:', location.search);
   console.log('newURL:', newURL);
   window.history.replaceState(null, '', url);
};
