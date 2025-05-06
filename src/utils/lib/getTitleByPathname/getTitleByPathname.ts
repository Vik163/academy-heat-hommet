import { pathnameByView } from '@/utils/consts/pathnames';
import { getPathname } from '../getPathname/getPathname';

export const getTitleByPathname = () => {
   const pathname = getPathname();

   let path = '';
   let arr = [];
   if (pathname.includes('/')) {
      arr = pathname.split('/');
      path = arr[arr.length - 1];
   } else path = pathname;

   if (arr.length === 0 && path) {
      return Object.entries(pathnameByView).find(([key, value]) => {
         if (value === path) {
            return key;
         }
      })![0];
   } else return '';
};
