import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { ViewName } from '@/utils/types/catalog';
import { setSertificats } from '../sertificats/sertificats';

const navbar = document.querySelector('.navbar')!;
const links = navbar.querySelectorAll('.link');

export const setNavbar = () => {
   // перезагружаю страницы принудительно. Лучше работает история браузера
   const onClickLinkCatalog = (e: Event, title: ViewName) => {
      e.preventDefault();

      setLocalStorage('catalog', title, '', '');

      // получает путь и переходит на страницу
      redirectOnPage('catalog');
   };

   const onClickLinkSertificats = (e: Event) => {
      e.preventDefault();
      setSertificats();
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) => {
         if (link.id === 'Сертификаты') {
            onClickLinkSertificats(e);
         } else onClickLinkCatalog(e, link.id as ViewName);
      });
   });
};
