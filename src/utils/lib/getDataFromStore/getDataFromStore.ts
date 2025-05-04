import { clamps } from '@/utils/consts/catalog/clamps/clamps';
import { drySystemMontage } from '@/utils/consts/catalog/dsm/dsm';
import { industrialFasteners } from '@/utils/consts/catalog/industrial-fasteners/industrial-fasteners';
import { profFasteners } from '@/utils/consts/catalog/prof-fasteners/prof-fasteners';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_PRODUCT_ID,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import type { Category, ViewName, ViewProducts } from '@/utils/types/cards';

/**
 *  возвращает данные по view в localStorage
 */
export const getDataByView = (): ViewProducts => {
   const typeProducts = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;

   switch (typeProducts) {
      case 'Промышленный крепеж':
         return industrialFasteners;

      case 'Профессиональный крепеж':
         return profFasteners;

      case 'Система сухого монтажа':
         return drySystemMontage;

      case 'Хомуты':
         return clamps;

      default:
         return drySystemMontage;
   }
};

/**
 *   возвращает данные по category в localStorage
 */
export const getDataByCategory = () => {
   const typeProducts: ViewProducts = getDataByView();
   const categoryProducts = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   )! as Category;

   if (typeProducts[categoryProducts]) return typeProducts[categoryProducts];
};

/**
 *  возвращает карту по id в localStorage
 */
export const getDataById = () => {
   const categoryProducts = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   )! as Category;
   const idCard = localStorage.getItem(LOCALSTORAGE_PRODUCT_ID);

   if (categoryProducts) {
      const category = getDataByCategory();
      if (category)
         if (idCard) {
            return category.find((card) => card.cardId === idCard);
         }
   }
};
