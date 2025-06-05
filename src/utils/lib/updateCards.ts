import { catalog } from '@/utils/consts/products/catalogs';
import type { Catalog } from '@/utils/types/catalog';
import { handlePaginationData } from '@/blocks/catalog/pagination/scripts/pagination';
import { handleCardsCatalog } from '@/blocks/catalog/cards-catalog/scripts/cards-catalog';

/**
 * Обновляет карточки каталога или товаров (template)
 * Перед обновлением удаляет (template)
 * @param obj - карточка каталога
 */
export const updateCards = (obj?: Catalog) => {
   if (obj) {
      if (obj.categories) {
         handleCardsCatalog(obj.categories);
      } else {
         handlePaginationData();
      }
   } else {
      handleCardsCatalog(catalog);
   }
};
