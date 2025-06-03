import { handleCards } from '@/blocks/cards-products/cards-products';
import { mountPaginationButtons } from '@/blocks/catalog/pagination/lib/mountPaginationButtons/mountPaginationButtons';
import { getDataByView } from '@/utils/lib/getDataFromStore';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Categories, ViewName } from '@/utils/types/catalog';
import { removeCardsCatalog } from '../cards-catalog/cards-catalog';
import { handleButtons } from './lib/handlePaginationButtons/handlePaginationButtons';
import { $add, $class, $contains, $remove } from '@/utils/lib/getElement';
import { getLimitPagination } from '@/utils/lib/getLimitPagination';
import { mobileSize } from '@/utils/consts/adaptive';
import { observer } from '@/utils/lib/observer';

const isMobile = window.matchMedia(`(max-width: ${mobileSize})`).matches;

const limit = getLimitPagination();
let numPage = 1;
let pagesAll: number;
let buttons: HTMLButtonElement[];
let totalItems = 0;

const paginationBlock = $class('pagination');
const leftArrow = $class('pagination__btn-arrow-left', paginationBlock);
const rightArrow = $class('pagination__btn-arrow-right', paginationBlock);

const observerBlock = $class('paginate-observer');

function getPaginateData() {
   const obj = getDataByView();

   const categoryProducts = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   )! as Categories;

   const typeProducts = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;

   const cardsAll = obj[categoryProducts || typeProducts]!;
   totalItems = cardsAll.length;
   pagesAll = Math.ceil(totalItems / limit);
   const firstIndex = (numPage - 1) * limit;
   const secondIndex = numPage * limit;

   const cards = cardsAll.slice(firstIndex, secondIndex);

   return { totalItems, cardsAll, cards };
}

/**
 * Раскидивает каточки
 * @param onClick - функция клика карточки (транзит)
 */
export const handlePaginationCards = () => {
   const { cards } = getPaginateData();

   removeCardsCatalog();
   handleCards(cards);

   window.scrollTo({
      top: 0,
      behavior: 'smooth',
   });
};

const handleLazyLoadCards = (entry: IntersectionObserverEntry) => {
   if (entry.isIntersecting) {
      const { cards } = getPaginateData();
      handleCards(cards);

      numPage = numPage + 1;
   }
};

const clickBtnPage = (e: Event) => {
   const btn = e.target as HTMLButtonElement;
   const numberBtn = +btn.textContent!;
   numPage = numberBtn;

   handleButtons(numPage, pagesAll, buttons);
};

const decreasePage = () => {
   if (numPage > 1) numPage = numPage - 1;
   handleButtons(numPage, pagesAll, buttons);
};

const increasePage = () => {
   if (numPage < pagesAll) numPage = numPage + 1;
   handleButtons(numPage, pagesAll, buttons);
};

/**
 * Управляет видимостью всего блока и навешивает слушатели на кнопки
 */
export const handlePaginationData = () => {
   const { totalItems, cardsAll } = getPaginateData();

   if (totalItems > limit && !isMobile) {
      if (!$contains('pagination_active', paginationBlock)) {
         buttons = mountPaginationButtons(totalItems);
      }

      buttons.map((btn) => {
         btn.addEventListener('click', (e: Event) => clickBtnPage(e));
      });

      handleButtons(numPage, pagesAll, buttons);

      $add('pagination_active', paginationBlock);
   } else if (isMobile) {
      $remove('pagination_active', paginationBlock);

      observer(observerBlock, handleLazyLoadCards);
   } else {
      $remove('pagination_active', paginationBlock);
      handleCards(cardsAll);
   }
};

leftArrow?.addEventListener('click', decreasePage);
rightArrow?.addEventListener('click', increasePage);
