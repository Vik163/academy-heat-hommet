import { getPathname } from '@/utils/lib/getPathname/getPathname';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import type { ViewName } from '@/utils/types/cards';

const links = document.querySelectorAll('.navbar__link');

export const setNavbar = () => {
   const onClick = (e: Event, title: ViewName) => {
      e.preventDefault();

      setLocalStorage(title, '', '');

      const path = getPathname();
      console.log('path:', path);
      redirectOnPage('catalog', path);
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) =>
         onClick(e, link.textContent! as ViewName),
      );
   });
};
