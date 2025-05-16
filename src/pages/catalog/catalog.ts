import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import './catalog.css';
import { setLocalStorageByPathname } from '@/utils/lib/setLocalStorage/setLocalStorage';
import { setNavbar } from '@/blocks/navbar/navbar';
import { setProduct } from '@/blocks/catalog/product-block/product-block';
import { setBreadCrumbs } from '@/blocks/catalog/bread-crumbs/bread-crumbs';
import { updateCatalogBlock } from '@/blocks/catalog/catalog-block/catalog-block';
import { LOCALSTORAGE_CATALOG } from '@/utils/consts/storage';
import { getDataById } from '@/utils/lib/getDataFromStore/getDataFromStore';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';

const catalogBlock = document.querySelector('.catalog-block')!;
const productBlock = document.querySelector('.product')!;
const card = document.querySelector('.card-catalog');

if (__IS_DEV__) {
   changeUrl('catalog');
}

setNavbar();

setBreadCrumbs();

/**
 *  обновление страницы: заголовок, карточки (пока catalog или товар)
 *  если в адресной строке нет вида продуктов, то переходит на главную страницу
 */
export const updatePageCatalog = () => {
   const card = getDataById();
   const catalog = localStorage.getItem(LOCALSTORAGE_CATALOG);

   if (!catalog) {
      redirectOnPage('/');
   } else if (card) {
      productBlock.classList.add('product_active');
      catalogBlock.classList.add('catalog-block_inactive');

      setProduct(card);
   } else {
      productBlock.classList.remove('product_active');
      catalogBlock.classList.remove('catalog-block_inactive');
   }
};

// --- первоначальное обновление ---------------
if (!card) {
   updatePageCatalog();
   updateCatalogBlock(updatePageCatalog);
}

// --- переход по стрелкам браузера --------------
window.addEventListener('popstate', () => {
   setLocalStorageByPathname();
   updatePageCatalog();
   updateCatalogBlock(updatePageCatalog);
});
