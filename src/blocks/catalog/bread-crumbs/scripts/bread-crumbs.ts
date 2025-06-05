import { mobileSize } from '@/utils/consts/adaptive';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import { $class, $id } from '@/utils/lib/getElement';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import type { Categories, ViewName } from '@/utils/types/catalog';
import { changeClassesLinkCategory } from './changeClassesLinkCategory';

const linkCatalog = $id('bread-crumbs-link-catalog');
const linkBlockView = $id('bread-crumbs-view');
const linkBlockCategory = $id('bread-crumbs-category');

const linkView = $class('bread-crumbs__link', linkBlockView);
const linkCategory = $class('bread-crumbs__link', linkBlockCategory);

let isMobile = window.matchMedia(`(max-width: ${mobileSize})`).matches;

const clickView = (e: Event) => {
   e.preventDefault();
   const target = e.target as HTMLElement;
   const title = target.textContent;
   setLocalStorage(title as ViewName, '', '');

   redirectOnPage('catalog');
};

const clickCategory = (e: Event) => {
   e.preventDefault();
   const typeProducts = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;
   const target = e.target as HTMLElement;
   const title = target.textContent;
   setLocalStorage(typeProducts, title as Categories, '');

   redirectOnPage('catalog');
};

const clickCatalog = (e: Event) => {
   e.preventDefault();
   setLocalStorage('', '', '');

   redirectOnPage('catalog');
};

export const setBreadCrumbs = () => {
   linkCatalog?.addEventListener('click', (e) => clickCatalog(e));
   linkView?.addEventListener('click', (e) => clickView(e));
   linkCategory?.addEventListener('click', (e) => clickCategory(e));
};

window.addEventListener('resize', function (e) {
   isMobile = window.matchMedia(`(max-width: ${mobileSize})`).matches;

   const categoriesProducts = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   )! as Categories;

   if (isMobile) {
      changeClassesLinkCategory('remove', linkBlockCategory, linkView);
   } else {
      changeClassesLinkCategory('add', linkBlockCategory, linkView);

      linkCategory.textContent = categoriesProducts;
   }
});
