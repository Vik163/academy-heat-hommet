import { pathnameByCategory, pathnameByView } from '@/utils/consts/pathnames';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';
import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { getDataById } from '@/utils/lib/getDataFromStore/getDataFromStore';
import type { Category, ViewName } from '@/utils/types/cards';

const view = localStorage.getItem(LOCALSTORAGE_TYPE_OF_PRODUCT) as ViewName;
const categoryStorage = localStorage.getItem(
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
) as Category;

console.log('view:', view);
const pathnameView = pathnameByView[view];
console.log('pathnameView:', pathnameView);
const pathnameCategory = pathnameByCategory[categoryStorage];

const getPathname = () => {
   const card = getDataById();

   if (!card) {
      return pathnameCategory;
   }
   return card.pathname!;
};

console.log('card:', getPathname());

if (__IS_DEV__) {
   changeUrl(getPathname() || pathnameView);
}
