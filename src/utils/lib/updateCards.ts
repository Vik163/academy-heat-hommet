import { catalog } from '@/utils/consts/products/catalogs';
import type { Catalog } from '@/utils/types/catalog';
import {
   handleCardsCatalog,
   removeCardsCatalog,
} from '@/blocks/catalog/cards-catalog/cards-catalog';
import { handlePaginationData } from '@/blocks/catalog/pagination/pagination';
import { $class, $remove } from './getElement';

const paginationBlock = $class('pagination')!;

/**
 * Обновляет карточки каталога или товаров (template)
 * Перед обновлением удаляет (template)
 * @param obj - карточка каталога
 */
export const updateCards = (obj?: Catalog) => {
   if (obj) {
      if (obj.categories) {
         removeCardsCatalog();
         handleCardsCatalog(obj.categories);

         // При откате назад класс не удаляется (не перезагружается страница)
         $remove('pagination_active', paginationBlock);
      } else {
         removeCardsCatalog();
         handlePaginationData();
      }
   } else {
      $remove('pagination_active', paginationBlock);

      removeCardsCatalog();
      handleCardsCatalog(catalog);
   }
};
