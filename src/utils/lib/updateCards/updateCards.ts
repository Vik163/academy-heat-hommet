import { catalog } from '@/utils/consts/products/catalogs';
import type { Catalog, Categories, ViewName } from '@/utils/types/catalog';
import {
   handleCardsCatalog,
   removeCardsCatalog,
} from '@/blocks/catalog/cards-catalog/cards-catalog';
import {
   getDataByCategory,
   getDataByView,
} from '../getDataFromStore/getDataFromStore';
import { handleCards } from '@/blocks/cards-products/cards-products';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';

/**
 * Обновляет карточки каталога или товаров (template)
 * Перед обновлением удаляет (template)
 * @param obj - карточка каталога
 * @param onClick - транзит из handleCards или handleCardsCatalog
 */
export const updateCards = (
   obj: Catalog,
   onClick: (e: MouseEvent, type: 'product' | 'category') => void,
) => {
   if (obj) {
      if (obj.categories) {
         removeCardsCatalog();
         handleCardsCatalog(obj.categories, onClick);
      } else {
         const obj = getDataByView();

         const categoryProducts = localStorage.getItem(
            LOCALSTORAGE_CATEGORY_OF_PRODUCT,
         )! as Categories;

         const typeProducts = localStorage.getItem(
            LOCALSTORAGE_TYPE_OF_PRODUCT,
         ) as ViewName;

         const data = obj[categoryProducts || typeProducts];

         removeCardsCatalog();
         handleCards(data!, onClick);
      }
   } else handleCardsCatalog(catalog, onClick);
};
