import { mobileSize, noteSize, padSize } from '../consts/adaptive';

export const detectMobile = () => {
   const isMobile = window.matchMedia(`(max-width: ${mobileSize})`).matches;
   const isPad = window.matchMedia(`(max-width: ${padSize})`).matches;
   const isNote = window.matchMedia(`(max-width: ${noteSize})`).matches;

   return { isMobile, isPad, isNote };
};
