import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import './catalog.css';
import {
   setLocalStorage,
   setLocalStorageByPathname,
} from '@/utils/lib/setLocalStorage/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setNavbar } from '@/blocks/navbar/navbar';
import { updatePageCatalog } from '@/utils/lib/updatePageCatalog/updatePageCatalog';
import { setProduct } from '@/blocks/catalog/product/product';
import { setBreadCrumbs } from '@/blocks/catalog/bread-crumbs/bread-crumbs';

const card = document.querySelector('.card-catalog');
const logo = document.querySelector('.logo');

if (__IS_DEV__) {
   changeUrl('catalog');
}

setNavbar();

setProduct();

setBreadCrumbs();

// --- первоначальное обновление ---------------
if (!card) updatePageCatalog();

// --- переход по стрелкам браузера --------------
window.addEventListener('popstate', () => {
   setLocalStorageByPathname();
   updatePageCatalog();
});

// // ------- переход на главную страницу -----------------
// logo?.addEventListener('click', function (e: Event) {
//    e.preventDefault();
//    setLocalStorage('', '', '');
//    window.history.pushState(null, '', '/');
//    redirectOnPage('/');
// });
