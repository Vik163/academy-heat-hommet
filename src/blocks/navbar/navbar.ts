import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { ViewName } from '@/utils/types/catalog';
import { setSertificats } from '../sertificats/sertificats';

const navbar = document.querySelector('.navbar')!;
const links = navbar.querySelectorAll('.navbar__link');

export const setNavbar = () => {
   // перезагружаю страницы принудительно. Лучше работает история браузера
   const onClickLinkCatalog = (title: ViewName) => {
      setLocalStorage('catalog', title, '', '');

      // получает путь и переходит на страницу
      redirectOnPage('catalog');
   };

   const onClickLinkSertificats = () => {
      setSertificats();
   };

   const onClickLinkContacts = () => {
      setLocalStorage('contacts', '', '', '');
      redirectOnPage('contacts');
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) => {
         e.preventDefault();

         if (link.id === 'sertificats') {
            onClickLinkSertificats();
         } else if (link.id === 'contacts') {
            onClickLinkContacts();
         } else onClickLinkCatalog(link.id as ViewName);
      });
   });
};
