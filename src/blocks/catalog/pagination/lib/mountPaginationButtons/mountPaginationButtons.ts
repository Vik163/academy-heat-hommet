import { countButtons } from '@/utils/consts/paginate';
import { getLimitPagination } from '@/utils/lib/getLimitPagination';

let pagesAll: number;
let buttonsVisible: number;

const paginationBlock = document.querySelector('.pagination')!;
const limit = getLimitPagination();

export const mountPaginationButtons = (
   totalItems: number,
): HTMLButtonElement[] => {
   const template = (
      document.querySelector('#pagination-item') as HTMLTemplateElement
   ).content;
   const list: HTMLUListElement = paginationBlock.querySelector(
      '.pagination__container',
   )!;

   // удаляет старые при монтировании новых
   const btns = document.querySelectorAll('.pagination__item');
   if (btns.length > 0) {
      btns.forEach((btn) => btn.remove());
   }

   pagesAll = Math.ceil(totalItems / limit);
   buttonsVisible = pagesAll < countButtons ? pagesAll : countButtons;

   const newArr = new Array(buttonsVisible).fill(0);

   const buttons = newArr.map(() => {
      const liItem = template
         .querySelector('.pagination__item')
         ?.cloneNode(true) as HTMLLIElement;
      const btnItem: HTMLButtonElement =
         liItem.querySelector('.pagination__btn')!;

      list.append(liItem);

      return btnItem;
   });
   return buttons;
};
