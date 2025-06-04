import { handleCards } from '@/blocks/cards-products/cards-products';
import { mountPaginationButtons } from '@/blocks/catalog/pagination/lib/mountPaginationButtons';
import { removeCardsCatalog } from '../cards-catalog/cards-catalog';
import { handleButtons } from './lib/handlePaginationButtons';
import { $add, $class, $contains, $remove } from '@/utils/lib/getElement';
import { getLimitPagination } from '@/utils/lib/getLimitPagination';
import { mobileSize } from '@/utils/consts/adaptive';
import { observer } from '@/utils/lib/observer';
import { getPaginateData } from './lib/getPaginateData';
import { handleLazyLoadCards } from './lib/handleLazyLoadCards';

let numPage = 1;
let pagesAll: number;
let buttons: HTMLButtonElement[];

const isMobile = window.matchMedia(`(max-width: ${mobileSize})`).matches;
const limit = getLimitPagination();
const paginationBlock = $class('pagination');
const leftArrow = $class('pagination__btn-arrow-left', paginationBlock);
const rightArrow = $class('pagination__btn-arrow-right', paginationBlock);
const observerBlock = $class('paginate-observer');

const onLazyLoadCards = (entry: IntersectionObserverEntry) => {
   numPage = handleLazyLoadCards(entry, numPage) || 1;
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
   const { totalItems, cardsAll, numPagesAll } = getPaginateData(numPage);
   pagesAll = numPagesAll;

   // удаляет карты только не в мобильной версии
   if (!($contains('product_active', $class('product')) && isMobile)) {
      removeCardsCatalog();
   }

   // монтирует кнопки пагинации
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

      // наблюдатель
      observer(observerBlock, onLazyLoadCards);
   } else {
      $remove('pagination_active', paginationBlock);
      handleCards(cardsAll);
   }
};

leftArrow?.addEventListener('click', decreasePage);
rightArrow?.addEventListener('click', increasePage);
