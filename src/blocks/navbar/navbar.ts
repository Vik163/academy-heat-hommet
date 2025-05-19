import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { ViewName } from '@/utils/types/catalog';

const links = document.querySelectorAll('.navbar__link');

export const setNavbar = () => {
   // перезагружаю страницы принудительно. Лучше работает история браузера
   const onClick = (e: Event, title: ViewName) => {
      e.preventDefault();

      // const path = location.pathname;

      // localStorage
      setLocalStorage('catalog', title, '', '');

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
