import { catalog } from '@/utils/consts/products/catalogs';
import type { Catalog } from '@/utils/types/catalog';
import {
   handleCardsCatalog,
   removeCardsCatalog,
} from '@/blocks/catalog/cards-catalog/cards-catalog';
import { handlePaginationData } from '@/blocks/catalog/pagination/pagination';

/**
 * Обновляет карточки каталога или товаров (template)
 * Перед обновлением удаляет (template)
 * @param obj - карточка каталога
 * @param onClick - транзит из handleCards или handleCardsCatalog
 */
export const updateCards = (
   onClick: (e: MouseEvent, type: 'product' | 'category') => void,
   obj?: Catalog,
) => {
   if (obj) {
      if (obj.categories) {
         removeCardsCatalog();
         handleCardsCatalog(obj.categories, onClick);
      } else {
         removeCardsCatalog();
         handlePaginationData();
      }
   } else {
      removeCardsCatalog();
      handleCardsCatalog(catalog, onClick);
   }
};
