import { $class } from '@/utils/lib/getElement';

/**
 * Удаляет template карточки
 */
export const removeCardsCatalog = () => {
   const nodesCatalog = document.querySelectorAll('.card-catalog');
   const nodesCards = document.querySelectorAll('.card-product');
   const nodes = nodesCatalog.length > 0 ? nodesCatalog : nodesCards;

   const arr = new Array(nodes.length).fill(0);

   arr.forEach(() => {
      const catalog = $class('card-catalog');
      const card = $class('card-product');
      if (card) card.remove();
      if (catalog) catalog.remove();
   });
};
