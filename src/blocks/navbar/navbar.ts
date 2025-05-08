import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import type { ViewName } from '@/utils/types/cards';

const links = document.querySelectorAll('.navbar__link');

export const setNavbar = () => {
   const onClick = (e: Event, title: ViewName) => {
      e.preventDefault();

      const path = location.pathname;
      console.log('path:', path);

      // localStorage
      setLocalStorage(title, '', '');

      // получает путь и переходит на страницу
      path.includes('catalog') ? changeUrl() : redirectOnPage('catalog');
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) => onClick(e, link.id as ViewName));
   });
};
