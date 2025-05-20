import { handleCards } from '@/blocks/cards-products/cards-products';
import { limit } from '@/utils/consts/paginate';
import { mountPaginationButtons } from '@/blocks/catalog/pagination/lib/mountPaginationButtons/mountPaginationButtons';
import { getDataByView } from '@/utils/lib/getDataFromStore';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Categories, ViewName } from '@/utils/types/catalog';
import { removeCardsCatalog } from '../cards-catalog/cards-catalog';
import { handleButtons } from './lib/handlePaginationButtons/handlePaginationButtons';

let numPage = 1;
let pagesAll: number;
let buttons: HTMLButtonElement[];
let totalItems = 0;

const paginationBlock = document.querySelector('.pagination')!;
const leftArrow = paginationBlock.querySelector('.pagination__btn-arrow-left');
const rightArrow = paginationBlock.querySelector(
   '.pagination__btn-arrow-right',
);

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

   if (totalItems > limit) {
      if (!paginationBlock.classList.contains('pagination_active')) {
         buttons = mountPaginationButtons(totalItems);
      }

      buttons.map((btn) => {
         btn.addEventListener('click', (e: Event) => clickBtnPage(e));
      });

      handleButtons(numPage, pagesAll, buttons);

      paginationBlock.classList.add('pagination_active');
   } else {
      paginationBlock.classList.remove('pagination_active');
      handleCards(cardsAll);
   }
};

leftArrow?.addEventListener('click', decreasePage);
rightArrow?.addEventListener('click', increasePage);
