import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';

const links = document.querySelectorAll('.systems__item-link');
export const setSystems = () => {
   links.forEach((link) => {
      link.addEventListener('click', function (e: Event) {
         e.preventDefault();
         setLocalStorage('', '', '');
         redirectOnPage('catalog');
      });
   });
};
