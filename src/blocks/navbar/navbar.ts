import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { ViewName } from '@/utils/types/catalog';
import { setSertificats } from '../sertificats/sertificats';
import { $class } from '@/utils/lib/getElement';

const navbar = $class('navbar');
const links = navbar.querySelectorAll('.nav-links__link');

export const setNavbar = () => {
   // перезагружаю страницы принудительно. Лучше работает история браузера
   const onClickLinkCatalog = (title: ViewName) => {
      setLocalStorage(title, '', '');

      // получает путь и переходит на страницу
      redirectOnPage('catalog');
   };

   const onClickLinkSertificats = () => {
      setSertificats();
   };

   const onClickLinkContacts = () => {
      setLocalStorage('', '', '');
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
