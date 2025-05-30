import { type ObserveCallback, observer } from '@/utils/lib/observer';
import { setNavbar } from '../navbar/navbar';
import { setModalCall } from '../modal-call/modal-call';

const headerBlock = document.querySelector('.header')!;
const mainObserver = document.querySelector('.main__observer')!;
const phoneContainer = headerBlock.querySelector('.header__phone-container');
const btn = headerBlock.querySelector('.header__btn');
const btnMenu = headerBlock.querySelector('.header__btn-menu');
const navbar = headerBlock.querySelector('.navbar');
const navbarOverlay = headerBlock.querySelector('.navbar__overlay');

const handleHeader: ObserveCallback = (entry) => {
   if (!entry.isIntersecting) {
      headerBlock.classList.add('header_active');
      mainObserver.classList.add('main__observer_active');
   } else {
      headerBlock.classList.remove('header_active');
      mainObserver.classList.remove('main__observer_active');
   }
};

const onClickMenu = () => {
   navbar?.classList.toggle('navbar_mobile');
   btnMenu?.classList.toggle('header__btn-menu_type_close');
   phoneContainer?.classList.toggle('header__phone-container_type_mobile');
   navbarOverlay?.classList.toggle('navbar__overlay_active');
};

export const setHeader = () => {
   btn?.addEventListener('click', () => setModalCall());
   btnMenu?.addEventListener('click', onClickMenu);
   navbarOverlay?.addEventListener('click', onClickMenu);

   if (mainObserver) observer(mainObserver, handleHeader);

   setNavbar();
};
