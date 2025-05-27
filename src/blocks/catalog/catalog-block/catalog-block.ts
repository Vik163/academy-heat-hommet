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

const productBlock = document.querySelector('.product')!;
const catalogBlock = document.querySelector('.catalog-block')!;
const cards = catalogBlock.querySelector('.catalog-block__list')!;
const catalogDescription = catalogBlock.querySelector('.catalog__description')!;
const titleCatalogElement = catalogBlock.querySelector(
   '.catalog-block__title',
)!;

/**
 *  обновление страницы: заголовок, карточки (пока catalog или товар)
 *  если в адресной строке нет вида продуктов, то переходит на главную страницу
 */
export const updatePageCatalog = () => {
   const card = getDataById();

   if (card) {
      productBlock.classList.add('product_active');
      catalogBlock.classList.add('catalog-block_inactive');

      setProduct(card);
   } else {
      productBlock.classList.remove('product_active');
      catalogBlock.classList.remove('catalog-block_inactive');
   }
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
   } else {
      setLocalStorageByCardId(cardId);
      updatePageCatalog();
   }
   changeUrl();

   updateCatalogBlock();
}

/**
 * Обновление карточек каталога
 * @param updatePageCatalog - функция обновления контента страницы catalog. Передается аргументом для вызова при клике карточки
 */
export const updateCatalogBlock = () => {
   updatePageCatalog();
   const { view, category } = getDataFromCatalog()!;

   if (!view) {
      const cardCatalog = document.querySelector('#Профессиональный крепеж')!;
      catalogDescription.classList.remove('catalog__description_active');
      titleCatalogElement.textContent = titleCatalog;
      if (!cardCatalog) updateCards(undefined);
   } else {
      const obj: Catalog = category! || view!;
      titleCatalogElement.textContent = obj.titlePage;

      updateCards(obj);

      if (obj.titlePage) {
         catalogDescription.classList.add('catalog__description_active');
         const titleDescription = catalogDescription.querySelector(
            '.catalog__description-title',
         )!;
         titleDescription.textContent = obj.titleText!;

         if (obj.text && catalogDescription)
            pastText(catalogDescription, obj.text, 'catalog');
      } else catalogDescription.classList.remove('catalog__description_active');
   }

   updateBreadCrumbs();
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
