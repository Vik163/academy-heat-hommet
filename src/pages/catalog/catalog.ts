import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';

console.log('a:', window.location.href);
console.log('h:', window.history);

if (location.pathname !== '/' && !location.pathname.endsWith('.html')) {
   console.log('location.pathname:', location.pathname);

   const address = __IS_DEV__
      ? `${location.pathname}.html`
      : `https://academy-heat-hommet.vercel.app${location.pathname}.html`;
   location.href = address;
}

changeUrl();

console.log('b:', window.location.href);
