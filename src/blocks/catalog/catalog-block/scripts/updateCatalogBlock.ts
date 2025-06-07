import { getDataFromCatalog } from '@/utils/lib/getDataFromCatalog';
import { $class } from '@/utils/lib/getElement';
import { updateCards } from '@/utils/lib/updateCards';
import type { Catalog } from '@/utils/types/catalog';
import { updatePageCatalog } from './updatePageCatalog';
import { titleCatalog } from '@/utils/consts/products/catalogs';
import { pastHtml } from '@/utils/lib/pastHtml';

const catalogBlock = $class('catalog-block');
const titleCatalogElement = $class('catalog-block__title', catalogBlock);

/**
 * Обновление карточек каталога
 * @param updatePageCatalog - функция обновления контента страницы catalog. Передается аргументом для вызова при клике карточки
 */
export const updateCatalogBlock = () => {
   const { view, category } = getDataFromCatalog()!;

   if (!view) {
      titleCatalogElement.textContent = titleCatalog;

      updateCards(undefined);
   } else {
      const obj: Catalog = category! || view!;
      titleCatalogElement.textContent = obj.titlePage;

      updateCards(obj);

      if (obj.text) {
         pastHtml(obj.text, 'catalog__description', catalogBlock);
      }
   }
   updatePageCatalog();
};
