console.log('href:', window.location.href);
console.log('pathname:', location.pathname);

var newURL = location.pathname.split('.')[0];
console.log('newURL:', newURL);
if (window.history != undefined && window.history.pushState != undefined)
   window.history.pushState(null, '', newURL);
