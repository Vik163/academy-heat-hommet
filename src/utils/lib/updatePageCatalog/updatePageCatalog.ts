import type { Catalog, Categories, ViewName } from '@/utils/types/catalog';
import { updateCards } from '../updateCards/updateCards';
import { getDataFromCatalog } from '../getDataFromCatalog/getDataFromCatalog';
import { getNameByLocalStorage } from '../getNamesGroup/getNamesGroup';
import {
   setLocalStorage,
   setLocalStorageByCardId,
} from '../setLocalStorage/setLocalStorage';
import { changeUrl } from '../changeUrl/changeUrl';
import { redirectOnPage } from '../redirectOnPage/redirectOnPage';
import { getDataById } from '../getDataFromStore/getDataFromStore';
import { updateBreadCrumbs } from '@/blocks/catalog/bread-crumbs/bread-crumbs';
import { LOCALSTORAGE_CATALOG } from '@/utils/consts/storage';

const catalogBlock = document.querySelector('.catalog-block')!;

const titleCatalog = document.querySelector('.catalog-block__title')!;
const productBlock = document.querySelector('.product')!;

// --- при клике по карточке переходит по ссылке в ее содержимое (карточка продукта или категория каталога) ---
// устанавливает данные в localStorage, меняет url в адресной строке, обновляет страницу
function onClickCard(e: MouseEvent, type: 'product' | 'category') {
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
   } else setLocalStorageByCardId(cardId);

   changeUrl();

   updatePageCatalog();
}
/**
 *  обновление страницы: заголовок, карточки (пока catalog или товар)
 *  если в адресной строке нет вида продуктов, то переходит на главную страницу
 */
export const updatePageCatalog = () => {
   const card = getDataById();
   const catalog = localStorage.getItem(LOCALSTORAGE_CATALOG);

   if (!catalog) {
      redirectOnPage('/');
   } else if (card) {
      productBlock.classList.add('product_active');
      const titleProduct = productBlock.querySelector('.product__title')!;
      titleProduct.textContent = card.title;

      catalogBlock.classList.add('catalog-block_inactive');
   } else {
      productBlock.classList.remove('product_active');
      catalogBlock.classList.remove('catalog-block_inactive');

      const { view, category } = getDataFromCatalog()!;

      if (!view) {
         const cardCatalog = document.querySelector(
            '#Профессиональный крепеж',
         )!;
         titleCatalog.textContent =
            'КАТАЛОГ ПРОДУКЦИИ ПРОИЗВОДСТВЕННОЙ КОМПАНИИ ХОММЕТ';
         console.log('КАТАЛОГ ПРОДУКЦИИ ПРОИЗВОДСТВЕННОЙ КОМПАНИИ ХОММЕТ');
         if (!cardCatalog) updateCards(onClickCard!, undefined);
      } else {
         const obj: Catalog = category! || view!;
         titleCatalog.textContent = obj.titlePage;
         updateCards(onClickCard!, obj);
      }
   }

   updateBreadCrumbs();
};
