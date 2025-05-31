import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { ViewName } from '@/utils/types/catalog';
import { setSertificats } from '../sertificats/sertificats';
import { Routes } from '@/utils/types/routes';
import { $class } from '@/utils/lib/getElement';

const footer = $class('footer');
const links = footer.querySelectorAll('.footer__link');
const dateBlock = $class('footer__date')!;
const date = new Date().getFullYear();

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

   dateBlock.textContent = date.toString();
};
