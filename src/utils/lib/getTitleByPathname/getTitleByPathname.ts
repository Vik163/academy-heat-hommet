import { pathnameByView } from '@/utils/consts/pathnames';
import { getPathname } from '../getPathname/getPathname';

export const getTitleByPathname = () => {
   const pathname = getPathname();

   let view = '';
   let arr = [];
   if (pathname.includes('/')) {
      arr = pathname.split('/');
      view = arr[arr.length - 2];
   } else view = pathname;

   if (view) {
      return Object.entries(pathnameByView).find(([key, value]) => {
         if (value === view) {
            return key;
         }
      })![0];
   }
   // else if (arr.length === 2 && view) {
   //    return Object.entries(pathnameByView).find(([key, value]) => {
   //       if (value === view) {
   //          return key;
   //       }
   //    })![0];
   // }
   else return '';
};
