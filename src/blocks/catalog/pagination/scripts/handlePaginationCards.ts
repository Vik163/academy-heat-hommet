import { handleCards } from '@/blocks/cards-products/cards-products';
import { removeCardsCatalog } from '../../cards-catalog/scripts/removeCardsCatalog';
import { getPaginateData } from './getPaginateData';
import { onScrollTop } from '@/utils/lib/onScrollTop';

/**
 * Раскидивает каточки
 * @param onClick - функция клика карточки (транзит)
 */
export const handlePaginationCards = (numPage: number) => {
   const { cards } = getPaginateData(numPage);

   removeCardsCatalog();
   handleCards(cards);

   onScrollTop();
};
