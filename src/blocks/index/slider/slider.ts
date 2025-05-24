import { loadSrc } from '@/utils/lib/loadSrc';
import { catalog } from '../../../utils/consts/products/catalogs';
import Splide from '@splidejs/splide';

import '@splidejs/splide/css/core';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import type { ViewName } from '@/utils/types/catalog';

const list = document.querySelector('.splide__list');
const template = (document.querySelector('#slider-item') as HTMLTemplateElement)
   .content;

const onClickLink = (e: Event) => {
   e.preventDefault();
   const link = e.currentTarget as HTMLAnchorElement;
   const view = link.id as ViewName;

   setLocalStorage(view, '', '');

   redirectOnPage('catalog');
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

         btn.addEventListener('click', onClickLink);
      }
      // отображаем на странице
      list?.append(templateContainer);
   });

   // включаю слайдер
   new Splide('.splide', {
      autoWidth: true,
      autoplay: true,
      type: 'loop',
      interval: 5000, // интервал перемещения
      speed: 1500, // transition
      perPage: 2, // количество отображаемых слайдов
      perMove: 1, // количество перемещаемых слайдов
      focus: 0,
      omitEnd: true,
      classes: {
         arrows: 'splide__arrows slider__arrows',
         arrow: 'splide__arrow slider__arrow',
         // prev: 'splide__arrow--prev your-class-prev',
         // next: 'splide__arrow--next your-class-next',
      },
   }).mount();
};
