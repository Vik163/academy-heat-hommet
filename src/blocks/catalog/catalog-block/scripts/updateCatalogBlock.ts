import { getDataFromCatalog } from '@/utils/lib/getDataFromCatalog';
import { $add, $class, $remove } from '@/utils/lib/getElement';
import { pastText } from '@/utils/lib/pastText';
import { updateCards } from '@/utils/lib/updateCards';
import type { Catalog } from '@/utils/types/catalog';
import { updatePageCatalog } from './updatePageCatalog';
import { titleCatalog } from '@/utils/consts/products/catalogs';

const catalogBlock = $class('catalog-block');
const catalogDescription = $class('catalog__description', catalogBlock);
const titleCatalogElement = $class('catalog-block__title', catalogBlock);

/**
 * Обновление карточек каталога
 * @param updatePageCatalog - функция обновления контента страницы catalog. Передается аргументом для вызова при клике карточки
 */
export const updateCatalogBlock = () => {
   const { view, category } = getDataFromCatalog()!;

   if (!view) {
      $remove('catalog__description_active', catalogDescription);
      titleCatalogElement.textContent = titleCatalog;

      updateCards(undefined);
   } else {
      const obj: Catalog = category! || view!;
      titleCatalogElement.textContent = obj.titlePage;

      updateCards(obj);

      if (obj.titlePage) {
         $add('catalog__description_active', catalogDescription);
         const titleDescription = $class(
            'catalog__description-title',
            catalogDescription,
         );
         titleDescription.textContent = obj.titleText!;

         if (obj.text && catalogDescription)
            pastText(catalogDescription, obj.text, 'catalog');
      } else $remove('catalog__description_active', catalogDescription);
   }
   updatePageCatalog();
};
