import { catalogs } from '../../../../utils/consts/catalogs';

const nav = document.querySelector('.navbar');
const template = document.querySelector('#nav__link') as HTMLTemplateElement;
const linkTemplate = template.content;

export const navbar = () => {
   catalogs.forEach((c) => {
      const linkElement = linkTemplate
         .querySelector('.nav__link')
         ?.cloneNode(true) as HTMLAnchorElement;

      if (linkElement) {
         linkElement.href = c.link;
         linkElement.textContent = c.title;
      }
      // отображаем на странице
      nav?.append(linkElement);
   });
};
