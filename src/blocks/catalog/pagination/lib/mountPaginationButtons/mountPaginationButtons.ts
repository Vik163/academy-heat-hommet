import { countButtons, limit } from '@/utils/consts/paginate';

let pagesAll: number;
let buttonsVisible: number;

const paginationBlock = document.querySelector('.pagination')!;

export const mountPaginationButtons = (
   totalItems: number,
): HTMLButtonElement[] => {
   const template = (
      document.querySelector('#pagination-item') as HTMLTemplateElement
   ).content;
   const list: HTMLUListElement = paginationBlock.querySelector(
      '.pagination__container',
   )!;

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
