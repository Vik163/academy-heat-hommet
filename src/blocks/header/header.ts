import { type ObserveCallback, observer } from '@/utils/lib/observer';
import { setNavbar } from '../navbar/navbar';
import { setModalCall } from '../modal-call/scripts/modal-call';
import { $add, $class, $remove, $toggle } from '@/utils/lib/getElement';

const headerBlock = $class('header');
const mainObserver = $class('main__observer');
const phoneContainer = $class('header__phone-container', headerBlock);
const btn = $class('header__btn', headerBlock);
const btnMenu = $class('header__btn-menu', headerBlock);
const navbar = $class('navbar', headerBlock);
const navbarOverlay = $class('navbar__overlay', headerBlock);

const handleHeader: ObserveCallback = (entry) => {
   if (!entry.isIntersecting) {
      $add('header_active', headerBlock);
      $add('main__observer_active', mainObserver);
   } else {
      $remove('header_active', headerBlock);
      $remove('main__observer_active', mainObserver);
   }
};

const onClickMenu = () => {
   $toggle('navbar_mobile', navbar);
   $toggle('header__btn-menu_type_close', btnMenu);
   $toggle('header__phone-container_type_mobile', phoneContainer);
   $toggle('navbar__overlay_active', navbarOverlay);
};

export const setHeader = () => {
   btn?.addEventListener('click', () => setModalCall());
   btnMenu?.addEventListener('click', onClickMenu);
   navbarOverlay?.addEventListener('click', onClickMenu);

   if (mainObserver) observer(mainObserver, handleHeader);

   setNavbar();
};
