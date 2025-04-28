import { loadSrc } from '@/utils/lib/load-src/loadSrc';
import { catalogs } from '../../utils/consts/catalogs';
import Splide from '@splidejs/splide';

import '@splidejs/splide/css/core';

const list = document.querySelector('.splide__list');
const template = document.querySelector('#slider-item') as HTMLTemplateElement;
const linkTemplate = template.content;

// построен на html-template
export const slider = () => {
   catalogs.forEach((c, i) => {
      const linkContainer = linkTemplate
         .querySelector('.slider-item')
         ?.cloneNode(true) as HTMLLIElement;

      const linkElement = linkContainer.querySelector(
         '.slider-item__link',
      ) as HTMLAnchorElement;

      if (i % 2 === 0)
         linkElement.classList.add('slider-item__link_color_light');

      if (linkElement) {
         linkElement.href = c.link;

         const title = linkElement.querySelector('.slider-item__title')!;
         title.textContent = c.title;

         const description = linkElement.querySelector(
            '.slider-item__description',
         )!;
         description.textContent = c.description;

         const image = linkElement.querySelector(
            '.slider-item__image',
         )! as HTMLImageElement;
         const newSrc = loadSrc(c.imgL);
         image.src = newSrc;
         image.alt = c.title;
      }
      // отображаем на странице
      list?.append(linkContainer);
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
