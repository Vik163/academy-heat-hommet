import { titleCatalog } from '@/utils/consts/products/catalogs';
import { changeUrl } from '@/utils/lib/changeUrl';
import { getNameByLocalStorage } from '@/utils/lib/getNamesGroup';
import type { Catalog, Categories, ViewName } from '@/utils/types/catalog';
import {
   setLocalStorage,
   setLocalStorageByCardId,
} from '@/utils/lib/setLocalStorage';
import { getDataFromCatalog } from '@/utils/lib/getDataFromCatalog';
import { updateCards } from '@/utils/lib/updateCards';
import { updateBreadCrumbs } from '../bread-crumbs/bread-crumbs';

const catalogBlock = document.querySelector('.catalog-block')!;
const titleCatalogElement = catalogBlock.querySelector(
   '.catalog-block__title',
)!;

// --- при клике по карточке переходит по ссылке в ее содержимое (карточка продукта или категория каталога) ---
// устанавливает данные в localStorage, меняет url в адресной строке, обновляет страницу
function onClickCard(
   e: MouseEvent,
   type: 'product' | 'category',
   updatePageCatalog: () => void,
) {
   const link = e.currentTarget as HTMLDivElement;
   const cardId = link.id;

   if (type === 'category') {
      const { viewName } = getNameByLocalStorage();

      // если нет viewName, значит открыт главный каталог и в id передается вид продукта
      if (viewName) {
         setLocalStorage('catalog', viewName!, cardId as Categories, '');
      } else {
         const view = link.id as ViewName;

         setLocalStorage('catalog', view, '', '');
      }
   } else {
      setLocalStorageByCardId(cardId);
      updatePageCatalog();
   }
   changeUrl();

   updateCatalogBlock(updatePageCatalog);
}

/**
 * Обновление карточек каталога
 * @param updatePageCatalog - функция обновления контента страницы catalog. Передается аргументом для вызова при клике карточки
 */
export const updateCatalogBlock = (updatePageCatalog: () => void) => {
   const { view, category } = getDataFromCatalog()!;

   if (!view) {
      const cardCatalog = document.querySelector('#Профессиональный крепеж')!;
      titleCatalogElement.textContent = titleCatalog;
      if (!cardCatalog)
         updateCards(
            (e, type) => onClickCard(e, type, updatePageCatalog)!,
            undefined,
         );
   } else {
      const obj: Catalog = category! || view!;
      titleCatalogElement.textContent = obj.titlePage;
      updateCards((e, type) => onClickCard(e, type, updatePageCatalog)!, obj);
   }

   updateBreadCrumbs();
};
