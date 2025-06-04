import { countButtons } from '@/utils/consts/paginate';
import { handlePaginationCards } from './handlePaginationCards';

const paginationBlock = document.querySelector('.pagination')!;
const leftArrow = paginationBlock.querySelector('.pagination__btn-arrow-left');
const rightArrow = paginationBlock.querySelector(
   '.pagination__btn-arrow-right',
);

let numPage = 1;
let pagesAll: number;

// Использовал замыкание для определения номера первой кнопки в ряду
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

/**
 * Заполняет кнопки данными, определяет с какого номера они начинаются
 * Управляет видимостью кнопок-стрелок
 * Определяет активную кнопку и навешивает ей класс
 * На активной кнопке вызывается функция handlePaginationCards (раскидывает карты)
 * @param nPage - номер выбранной страницы
 * @param pAll - всего страницы
 * @param buttons - количество смонтированных кнопок
 */
export const handleButtons = (
   nPage: number,
   pAll: number,
   buttons: HTMLButtonElement[],
) => {
   numPage = nPage;
   pagesAll = pAll;
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
         handlePaginationCards(nPage);
      } else {
         el.classList.remove('pagination__btn_active');
      }
   });
};
