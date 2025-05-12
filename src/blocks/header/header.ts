import {
   type ObserveCallback,
   observeElement,
} from '@/utils/lib/observer/observer';
import { setNavbar } from '../navbar/navbar';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';

const headerBlock = document.querySelector('.header')!;
const mainObserver = document.querySelector('.main__observer')!;
const btns = document.querySelectorAll('.header__btn');

const handleHeader: ObserveCallback = (entry) => {
   if (!entry.isIntersecting) {
      headerBlock.classList.add('header_active');
      mainObserver.classList.add('main__observer_active');
   } else {
      headerBlock.classList.remove('header_active');
      mainObserver.classList.remove('main__observer_active');
   }
};

export const setHeader = () => {
   const onClick = (title: string) => {
      // localStorage
      if (title) {
         setLocalStorage('catalog', '', '', '');

         // получает путь и переходит на страницу
         redirectOnPage('catalog');
      }
   };

   btns.forEach((btn) => {
      btn.addEventListener('click', () => onClick(btn.id));
   });
   observeElement(mainObserver, handleHeader);
   setNavbar();
};
