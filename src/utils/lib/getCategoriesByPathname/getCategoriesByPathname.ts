import { pathnameByCategories, pathnameByView } from '@/utils/consts/pathnames';
import { getPathname } from '../getPathname/getPathname';
import { Categories, ViewName } from '@/utils/types/cards';

interface Data {
   viewName: ViewName;
   categoryName?: Categories;
}

const getName = (path: string, group: 'category' | 'view') => {
   return Object.entries(
      group === 'view' ? pathnameByView : pathnameByCategories,
   ).find(([key, value]) => {
      if (value === path) {
         return key;
      }
   })![0];
};

export const getCategoriesByPathname = (): Data => {
   const pathname = getPathname();

   let viewPath = '';
   let categoryPath = '';
   let arr = [];
   if (pathname.includes('/')) {
      arr = pathname.split('/');
      viewPath = arr[arr.length - 2];
      categoryPath = arr[arr.length - 1];
   } else viewPath = pathname;

   if (categoryPath) {
      const categoryName = getName(categoryPath, 'category') as Categories;
      const viewName = getName(viewPath, 'view') as ViewName;

      return { viewName, categoryName };
   } else {
      const viewName = getName(viewPath, 'view') as ViewName;

      return { viewName, categoryName: undefined };
   }
};
