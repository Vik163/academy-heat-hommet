import { catalog } from '@/utils/consts/products/catalogs';
import type { Catalog } from '@/utils/types/catalog';
import {
   handleCardsCatalog,
   removeCardsCatalog,
} from '@/blocks/catalog/cards-catalog/cards-catalog';
import { handlePaginationData } from '@/blocks/catalog/pagination/pagination';

const paginationBlock = document.querySelector('.pagination')!;

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

         // При откате назад класс не удаляется (не перезагружается страница)
         paginationBlock.classList.remove('pagination_active');
      } else {
         removeCardsCatalog();
         handlePaginationData(onClick);
      }
   } else {
      paginationBlock.classList.remove('pagination_active');

      removeCardsCatalog();
      handleCardsCatalog(catalog, onClick);
   }
};
