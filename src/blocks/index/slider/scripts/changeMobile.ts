import { $add, $class, $remove } from '@/utils/lib/getElement';

export function changeMobile(e: MediaQueryListEvent, visibleSlides: number) {
   const arrows = $class('splide__arrows');
   if (e.matches) {
      visibleSlides = 1;
      $add('slider__arrows_inactive', arrows);
   } else {
      visibleSlides = 2;
      $remove('slider__arrows_inactive', arrows);
   }

   return visibleSlides;
}
