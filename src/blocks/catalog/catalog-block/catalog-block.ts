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
import { pastText } from '@/utils/lib/pastText';
import { getDataById } from '@/utils/lib/getDataFromStore';
import { setProduct } from '../product-block/product-block';
import { setModalCall } from '@/blocks/modal-call/modal-call';
import { $add, $class, $remove } from '@/utils/lib/getElement';

const productBlock = $class('product');
const catalogBlock = $class('catalog-block');
const cards = $class('catalog-block__list', catalogBlock);
const catalogDescription = $class('catalog__description', catalogBlock);
const titleCatalogElement = $class('catalog-block__title', catalogBlock);

/**
 *  обновление страницы: заголовок, карточки (пока catalog или товар)
 *  если в адресной строке нет вида продуктов, то переходит на главную страницу
 */
export const updatePageCatalog = () => {
   const card = getDataById();

   if (card) {
      $add('product_active', productBlock);
      $add('catalog-block_inactive', catalogBlock);

      setProduct(card);
   } else {
      $remove('product_active', productBlock);
      $remove('catalog-block_inactive', catalogBlock);
   }

   updateBreadCrumbs();
};
// --- при клике по карточке переходит по ссылке в ее содержимое (карточка продукта или категория каталога) ---
// устанавливает данные в localStorage, меняет url в адресной строке, обновляет страницу
function onClickCard(cardId: string, type?: 'category') {
   if (type === 'category') {
      const { viewName } = getNameByLocalStorage();

      // если нет viewName, значит открыт главный каталог и в id передается вид продукта
      if (viewName) {
         setLocalStorage(viewName!, cardId as Categories, '');
      } else {
         const view = cardId as ViewName;

         setLocalStorage(view, '', '');
      }
      updateCatalogBlock();
   } else {
      setLocalStorageByCardId(cardId);
      updatePageCatalog();
   }
   changeUrl();
}
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

      console.log('updateCatalogBlock -> updateCards -> handlePaginationCards');

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

// делегирование событий (пришлось на все элементы карточек навесить id)
cards.addEventListener('click', function (e: Event) {
   const target = e.target as HTMLElement;

   if (target.tagName.toLowerCase() === 'button') {
      setModalCall(target.id);
   } else if (target.className.includes('catalog')) {
      onClickCard(target.id, 'category');
   } else onClickCard(target.id);
});
