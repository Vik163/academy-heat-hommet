import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import { updatePage } from '@/utils/lib/updatePage/updatePage';
import type { ViewName } from '@/utils/types/cards';

const links = document.querySelectorAll('.navbar__link');

export const setNavbar = () => {
   const onClick = (e: Event, title: ViewName) => {
      e.preventDefault();

      const path = location.pathname;

      // localStorage
      setLocalStorage(title, '', '');

      // получает путь и переходит на страницу
      if (path.includes('catalog')) {
         console.log('path:', path);

         changeUrl();
         updatePage();
      } else redirectOnPage('catalog');
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) => onClick(e, link.id as ViewName));
   });
};
