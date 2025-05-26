import { type ObserveCallback, observer } from '@/utils/lib/observer';
import { setNavbar } from '../navbar/navbar';
import { setModalCall } from '../modal-call/modal-call';

const headerBlock = document.querySelector('.header')!;
const mainObserver = document.querySelector('.main__observer')!;
const btn = document.querySelector('.header__btn');

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
   const onClick = () => {
      setModalCall();
   };

   btn?.addEventListener('click', onClick);

   observer(mainObserver, handleHeader);

   setNavbar();
};
