import { removeElement } from '@/utils/lib/removeElement';

/**
 * Удаляет template карточки
 */
export const removeCardsCatalog = () => {
   const nodesCatalog = document.querySelectorAll('.card-catalog');
   const nodesCards = document.querySelectorAll('.card-product');
   const nodes = nodesCatalog.length > 0 ? nodesCatalog : nodesCards;

   const arr = new Array(nodes.length).fill(0);

   arr.forEach(() => {
      removeElement('card-product');
      removeElement('card-catalog');
   });
};
