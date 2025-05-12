import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import { updatePageCatalog } from '@/utils/lib/updatePageCatalog/updatePageCatalog';
import type { ViewName } from '@/utils/types/catalog';

const links = document.querySelectorAll('.navbar__link');

export const setNavbar = () => {
   const onClick = (e: Event, title: ViewName) => {
      e.preventDefault();

      // const path = location.pathname;

      // localStorage
      setLocalStorage(title, '', '');

      // получает путь и переходит на страницу
      redirectOnPage('catalog');
      // if (path.includes('catalog')) {
      //    changeUrl();
      //    updatePageCatalog();
      // } else redirectOnPage('catalog');
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) => onClick(e, link.id as ViewName));
   });
};
