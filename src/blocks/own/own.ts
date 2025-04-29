import { ownProduction } from '@/utils/consts/own-production';
import { animationScrolling } from '@/utils/lib/animation-scrolling/animation-scrolling';
import { ObserveCallback, observeElement } from '@/utils/lib/observer/observer';

const block = document.querySelector('.own')!;
const list = document.querySelector('.own__cards');
const template = (document.querySelector('#card') as HTMLTemplateElement)
   .content;

//* ==== template ================================
//* ==== выполняется при появлении блока и если нет встроенных элементов =============
const getCards: ObserveCallback = (intersection) => {
   const card = document.querySelector('.card');
   // если нет встроенных карт, встраивает
   if (!card && intersection)
      ownProduction.forEach((c, i) => {
         const cardTemplate = template
            .querySelector('.card')
            ?.cloneNode(true) as HTMLLIElement;

         if (cardTemplate) {
            const title = cardTemplate.querySelector('.card__title')!;
            title.textContent = c.title;

            const image = cardTemplate.querySelector(
               '.card__image',
            )! as HTMLImageElement;
            image.src = c.imgL;
            image.alt = c.title;

            const link = cardTemplate.querySelector(
               '.card__link',
            ) as HTMLAnchorElement;
            link.href = c.link;
         }
         // встраивает на странице
         list?.append(cardTemplate);

         //* === запускает анимацию ==========
         animationScrolling(cardTemplate, 'up');
      });
};

// ======= ставлю наблюдателя =============
export const ownProd = () => {
   observeElement(block, getCards);
};
