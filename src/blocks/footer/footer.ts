import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { ViewName } from '@/utils/types/catalog';
import { setSertificats } from '../sertificats/sertificats';
import { Routes } from '@/utils/types/routes';

const footer = document.querySelector('.footer')!;
const links = footer.querySelectorAll('.footer__link');

export const setFooter = () => {
   // перезагружаю страницы принудительно. Лучше работает история браузера
   const onClickLinkCatalog = (title: ViewName) => {
      setLocalStorage(title, '', '');

      // получает путь и переходит на страницу
      redirectOnPage('catalog');
   };

   const onClickLinkSertificats = () => {
      setSertificats();
   };

   const onClickLinkPage = (page: Routes) => {
      console.log('page:', page);
      setLocalStorage('', '', '');
      redirectOnPage(page);
   };

   links.forEach((link) => {
      link.addEventListener('click', (e) => {
         e.preventDefault();

         if (link.id === 'politic') {
            onClickLinkPage('politic');
         } else if (link.id === 'sertificats') {
            onClickLinkSertificats();
         } else if (link.id === 'contacts') {
            onClickLinkPage('contacts');
         } else onClickLinkCatalog(link.id as ViewName);
      });
   });
};
