import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_PRODUCT_ID,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Categories, ViewName } from '@/utils/types/cards';

/**
 *  устанавливает данные товаров в localstorage
 */
export const setLocalStorage = (
   view: ViewName | '',
   categories: Categories | '',
   cardId: string,
) => {
   localStorage.setItem(LOCALSTORAGE_TYPE_OF_PRODUCT, view);
   localStorage.setItem(LOCALSTORAGE_CATEGORY_OF_PRODUCT, categories);
   localStorage.setItem(LOCALSTORAGE_PRODUCT_ID, cardId);
};
