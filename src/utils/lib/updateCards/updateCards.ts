import { catalog } from '@/utils/consts/products/catalogs';
import { Catalog } from '@/utils/types/cards';
import {
   handleCardsCatalog,
   removeCardsCatalog,
} from '@/blocks/catalog/cards-catalog/cards-catalog';
import { getDataByView } from '../getDataFromStore/getDataFromStore';
import { handleCards } from '@/blocks/cards-products/cards-products';

export const updateCards = (obj: Catalog, onClick: (e: MouseEvent) => void) => {
   if (obj) {
      if (obj.categories) {
         removeCardsCatalog();
         handleCardsCatalog(obj.categories, onClick);
      } else {
         const obj = getDataByView();
         const data = Object.values(obj)[0];
         removeCardsCatalog();
         handleCards(data, onClick);
      }
   } else handleCardsCatalog(catalog, onClick);
};
