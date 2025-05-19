import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_PRODUCT_ID,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { Categories, ViewName } from '@/utils/types/catalog';

const linkCatalog = document.querySelector('#bread-crumbs-link-catalog');
const linkBlockView = document.querySelector('#bread-crumbs-view');
const linkBlockCategory = document.querySelector('#bread-crumbs-category');

const linkView = linkBlockView?.querySelector('.bread-crumbs__link');
const linkCategory = linkBlockCategory?.querySelector('.bread-crumbs__link');

export const updateBreadCrumbs = () => {
   const typeProducts = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;

   const categoriesProducts = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   )! as Categories;

   const productId = localStorage.getItem(LOCALSTORAGE_PRODUCT_ID)!;

   if (!typeProducts) {
      linkBlockView?.classList.remove('bread-crumbs__item_active');
      linkCatalog?.classList.remove('bread-crumbs__link_active');
   }
   if (typeProducts && linkView) {
      linkView.textContent = typeProducts;
      linkBlockView?.classList.add('bread-crumbs__item_active');
      linkCatalog?.classList.add('bread-crumbs__link_active');
      linkBlockCategory?.classList.remove('bread-crumbs__item_active');
      linkView?.classList.remove('bread-crumbs__link_active');
   }
   if (categoriesProducts && linkCategory) {
      if (typeProducts !== categoriesProducts) {
         linkCategory.textContent = categoriesProducts;
         linkBlockCategory?.classList.add('bread-crumbs__item_active');
      }

      linkView?.classList.add('bread-crumbs__link_active');
   }
   if (productId && linkCategory) {
      linkCategory.classList.add('bread-crumbs__link_active');
   } else linkCategory?.classList.remove('bread-crumbs__link_active');
};

const clickView = (e: Event) => {
   e.preventDefault();
   const target = e.target as HTMLElement;
   const title = target.textContent;
   setLocalStorage('catalog', title as ViewName, '', '');

   redirectOnPage('catalog');
};

const clickCategory = (e: Event) => {
   e.preventDefault();
   const typeProducts = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;
   const target = e.target as HTMLElement;
   const title = target.textContent;
   setLocalStorage('catalog', typeProducts, title as Categories, '');

   redirectOnPage('catalog');
};

const clickCatalog = (e: Event) => {
   e.preventDefault();
   setLocalStorage('catalog', '', '', '');

   redirectOnPage('catalog');
};

export const setBreadCrumbs = () => {
   linkCatalog?.addEventListener('click', (e) => clickCatalog(e));
   linkView?.addEventListener('click', (e) => clickView(e));
   linkCategory?.addEventListener('click', (e) => clickCategory(e));
};
