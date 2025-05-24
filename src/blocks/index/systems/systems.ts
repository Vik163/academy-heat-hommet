import { redirectOnPage } from '@/utils/lib/redirectOnPage';

const links = document.querySelectorAll('.systems__item-link');
export const setSystems = () => {
   links.forEach((link) => {
      link.addEventListener('click', function (e: Event) {
         e.preventDefault();
         redirectOnPage('catalog');
      });
   });
};
