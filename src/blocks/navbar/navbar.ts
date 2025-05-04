import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import type { ViewName } from '@/utils/types/cards';

const links = document.querySelectorAll('.navbar__link');

export const setNavbar = () => {
   const onClick = (e: Event, title: ViewName) => {
      e.preventDefault();

      setLocalStorage(title, '', '');

      redirectOnPage('catalog');
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) =>
         onClick(e, link.textContent! as ViewName),
      );
   });
};
