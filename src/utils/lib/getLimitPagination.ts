import { limit, limitMobile, limitPad } from '@/utils/consts/paginate';
import { mobileSize, padSize } from '../consts/adaptive';

const isMobile = window.matchMedia(`(max-width: ${mobileSize})`).matches;
const isPad = window.matchMedia(`(max-width: ${padSize})`).matches;

export function getLimitPagination() {
   if (isMobile) {
      return limitMobile;
   } else if (isPad) {
      return limitPad;
   } else return limit;
}
