import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import './catalog.css';
import {
   setLocalStorage,
   setLocalStorageByPathname,
} from '@/utils/lib/setLocalStorage/setLocalStorage';
import type { Categories } from '@/utils/types/cards';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setNavbar } from '@/blocks/navbar/navbar';
import { updatePage } from '@/utils/lib/updatePage/updatePage';

const card = document.querySelector('.card-catalog');
const logo = document.querySelector('.logo');

if (__IS_DEV__) {
   changeUrl('catalog');
}

setNavbar();

// --- первоначальное обновление ---------------
if (!card) updatePage();

// --- переход по стрелкам браузера --------------
window.addEventListener('popstate', () => {
   setLocalStorageByPathname();
   updatePage();
});

// ------- переход на главную страницу -----------------
logo?.addEventListener('click', function (e: Event) {
   e.preventDefault();
   setLocalStorage('', '', '');
   window.history.pushState(null, '', '/');
   redirectOnPage('/');
});
