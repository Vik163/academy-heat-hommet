import { handleCards } from '@/blocks/cards-products/cards-products';
import { countButtons, limit } from '@/utils/consts/paginate';
import { mountPaginationButtons } from '@/blocks/catalog/pagination/lib/mountPaginationButtons/mountPaginationButtons';
import { Card } from '@/utils/types/cards';
import { getDataByView } from '@/utils/lib/getDataFromStore/getDataFromStore';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import { Categories, ViewName } from '@/utils/types/catalog';
import { removeCardsCatalog } from '../cards-catalog/cards-catalog';

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

const handlePaginationCards = () => {
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

   handleButtons();
};

const с = () => {
   let numFirstBtn = 1;
   return function i() {
      if (numPage > countButtons && numFirstBtn <= pagesAll - countButtons) {
         numFirstBtn = numFirstBtn + 1;
      } else if (numPage < numFirstBtn) numFirstBtn = numFirstBtn - 1;
      return numFirstBtn;
   };
};

const getNumFirstBtn = с();

export const handleButtons = () => {
   const numFirstBtn = getNumFirstBtn();
   buttons.map((el, i) => {
      const numBtn = numFirstBtn + i;

      el.textContent = String(numBtn);
      el['ariaLabel'] = `Go to ${numBtn}`;
      el['ariaSelected'] = `${numPage.toString() === el.textContent}`;

      if (numPage >= pagesAll) {
         rightArrow?.classList.add('pagination__btn-arrow_inactive');
      } else rightArrow?.classList.remove('pagination__btn-arrow_inactive');

      if (numPage < 2) {
         leftArrow?.classList.add('pagination__btn-arrow_inactive');
      } else leftArrow?.classList.remove('pagination__btn-arrow_inactive');

      const isSelected = el.getAttribute('aria-selected');
      if (isSelected === 'true') {
         el.classList.add('pagination__btn_active');
         handlePaginationCards();
      } else {
         el.classList.remove('pagination__btn_active');
      }
   });
};

const decreasePage = () => {
   if (numPage > 1) numPage = numPage - 1;
   handleButtons();
};

const increasePage = () => {
   if (numPage < pagesAll) numPage = numPage + 1;
   handleButtons();
};

export const handlePaginationData = () => {
   const { totalItems, cardsAll } = getPaginateData();

   if (totalItems > limit) {
      leftArrow?.addEventListener('click', decreasePage);
      rightArrow?.addEventListener('click', increasePage);
      buttons = mountPaginationButtons(totalItems);

      buttons.map((btn) => {
         btn.addEventListener('click', (e: Event) => clickBtnPage(e));
      });

      handleButtons();

      paginationBlock.classList.add('pagination_active');
   } else {
      paginationBlock.classList.remove('pagination_active');
      handleCards(cardsAll);
   }
};
