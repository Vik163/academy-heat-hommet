import { loadSrc } from '@/utils/lib/loadSrc';
import { catalog } from '../../../utils/consts/products/catalogs';
import Splide from '@splidejs/splide';

import '@splidejs/splide/css/core';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import type { ViewName } from '@/utils/types/catalog';
import { mobileSize } from '@/utils/consts/adaptive';
import { detectMobile } from '@/utils/lib/detectMobile';

const { isMobile } = detectMobile();

let visibleSlides = 2;

const list = document.querySelector('.splide__list');
const template = (document.querySelector('#slider-item') as HTMLTemplateElement)
   .content;

function changeMobile(e: MediaQueryListEvent, splide: Splide) {
   const arrows = document.querySelector('.splide__arrows');
   if (e.matches) {
      visibleSlides = 1;
      arrows?.classList.add('slider__arrows_inactive');
   } else {
      visibleSlides = 2;
      arrows?.classList.remove('slider__arrows_inactive');
   }
   splide.refresh();
}

const onClickLink = (e: Event) => {
   e.preventDefault();
   const target = e.target as HTMLAnchorElement;
   if (target.tagName.toLowerCase() === 'button') {
      const view = target.id as ViewName;

      setLocalStorage(view, '', '');

      redirectOnPage('catalog');
   }
};

// построен на html-template
export const setSlider = () => {
   catalog.forEach((c, i) => {
      const templateContainer = template
         .querySelector('.slider-item')
         ?.cloneNode(true) as HTMLLIElement;

      const container = templateContainer.querySelector(
         '.slider-item__container',
      ) as HTMLElement;

      if (i % 2 === 0)
         container.classList.add('slider-item__container_color_light');

      if (container) {
         const title = container.querySelector('.slider-item__title')!;
         title.textContent = c.title;

         const description = container.querySelector(
            '.slider-item__description',
         )!;
         description.textContent = c.description!;

         const image = container.querySelector(
            '.slider-item__image',
         )! as HTMLImageElement;
         const newSrc = loadSrc(c.imgL);
         image.src = newSrc;
         image.alt = c.title;

         const btn = container.querySelector(
            '.slider-item__btn',
         ) as HTMLButtonElement;

         btn.id = `${c.title}`;
      }
      // отображаем на странице
      list?.append(templateContainer);
   });

   const classes: Record<string, string> = {
      arrows: isMobile
         ? 'splide__arrows  slider__arrows_inactive'
         : 'splide__arrows  slider__arrows',
      arrow: 'splide__arrow slider__arrow',
   };

   // включаю слайдер
   const splide = new Splide('.splide', {
      autoWidth: true,
      autoplay: true,
      type: 'loop',
      interval: 5000, // интервал перемещения
      speed: 1500, // transition
      perPage: visibleSlides, // количество отображаемых слайдов
      perMove: 1, // количество перемещаемых слайдов
      focus: 0,
      omitEnd: true,
      classes,
   }).mount();

   list?.addEventListener('click', onClickLink);

   window
      .matchMedia(`(max-width: ${mobileSize})`)
      .addEventListener('change', (e) => changeMobile(e, splide));
};
