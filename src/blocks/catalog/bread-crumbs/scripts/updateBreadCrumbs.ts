import { mobileSize } from '@/utils/consts/adaptive';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_PRODUCT_ID,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import { $add, $class, $id, $remove } from '@/utils/lib/getElement';

import type { Categories, ViewName } from '@/utils/types/catalog';
import { changeClassesLinkCategory } from './changeClassesLinkCategory';

const linkCatalog = $id('bread-crumbs-link-catalog');
const linkBlockView = $id('bread-crumbs-view');
const linkBlockCategory = $id('bread-crumbs-category');

const linkView = $class('bread-crumbs__link', linkBlockView);
const linkCategory = $class('bread-crumbs__link', linkBlockCategory);

let isMobile = window.matchMedia(`(max-width: ${mobileSize})`).matches;

export const updateBreadCrumbs = () => {
   const typeProducts = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;

   const categoriesProducts = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   )! as Categories;

   const productId = localStorage.getItem(LOCALSTORAGE_PRODUCT_ID)!;

   if (!typeProducts) {
      changeClassesLinkCategory('remove', linkBlockView, linkCatalog);
   }
   if (typeProducts && linkView) {
      linkView.textContent = typeProducts;
      changeClassesLinkCategory('add', linkBlockView, linkCatalog);
      changeClassesLinkCategory('remove', linkBlockCategory, linkView);
   }
   if (categoriesProducts && linkCategory && !isMobile) {
      if (typeProducts !== categoriesProducts) {
         linkCategory.textContent = categoriesProducts;
         $add('bread-crumbs__item_active', linkBlockCategory);
      }

      $add('bread-crumbs__link_active', linkView);
   }
   if (productId && linkCategory) {
      $add('bread-crumbs__link_active', linkCategory);
   } else $remove('bread-crumbs__link_active', linkCategory);
};
