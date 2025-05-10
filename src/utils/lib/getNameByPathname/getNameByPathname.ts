import { pathnameByCategories, pathnameByView } from '@/utils/consts/pathnames';
import type { Categories, ViewName } from '@/utils/types/cards';
import {
   LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   LOCALSTORAGE_TYPE_OF_PRODUCT,
} from '@/utils/consts/storage';

interface Data {
   viewName?: ViewName;
   categoryName?: Categories;
}

/**
 * Возвращает русское название вида или категории из объектов (pathnameByCategories, pathnameByView)
 * @param path название вида или категории из адресной строки (pathname)
 * @param group 'category' | 'view' - выбирается вручную
 */
export const getNameFromList = (path: string, group: 'category' | 'view') => {
   return Object.entries(
      group === 'view' ? pathnameByView : pathnameByCategories,
   ).find(([key, value]) => {
      if (value === path) {
         return key;
      }
   })![0];
};

/**
 * Возвращает объект со свойствами {view, category} (имена на русском языке или undefined),
 * в зависимости от данных в localStorage
 */
export const getNameByLocalStorage = (): Data => {
   const viewName = localStorage.getItem(
      LOCALSTORAGE_TYPE_OF_PRODUCT,
   ) as ViewName;
   const categoryName = localStorage.getItem(
      LOCALSTORAGE_CATEGORY_OF_PRODUCT,
   ) as Categories;

   if (viewName && categoryName) {
      return { viewName, categoryName };
   } else if (viewName) {
      return { viewName, categoryName: undefined };
   } else return { viewName: undefined, categoryName: undefined };
};
// export const getNameByPathname = (): Data => {
//    const pathname = getPathname();
//       const view = localStorage.getItem(LOCALSTORAGE_TYPE_OF_PRODUCT) as ViewName;
//       const categoriesStorage = localStorage.getItem(
//          LOCALSTORAGE_CATEGORY_OF_PRODUCT,
//       ) as Categories;
//       const pathnameCategory = pathnameByCategories[categoriesStorage];
//       const pathnameView = pathnameByView[view];

//       const card = getDataById();

//    let viewPath = '';
//    let categoryPath = '';
//    let arr = [];
//    if (pathname.includes('/')) {
//       arr = pathname.split('/');
//       viewPath = arr[arr.length - 2];
//       categoryPath = arr[arr.length - 1];
//    } else viewPath = pathname;

//    if (categoryPath) {
//       const categoryName = getNameFromList(
//          categoryPath,
//          'category',
//       ) as Categories;
//       const viewName = getNameFromList(viewPath, 'view') as ViewName;

//       return { viewName, categoryName };
//    } else if (viewPath) {
//       const viewName = getNameFromList(viewPath, 'view') as ViewName;

//       return { viewName, categoryName: undefined };
//    } else return { viewName: undefined, categoryName: undefined };
// };
