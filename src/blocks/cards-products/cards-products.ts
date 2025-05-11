import { animationScrolling } from '@/utils/lib/animationScrolling/animationScrolling';
import { ObserveCallback, observeElement } from '@/utils/lib/observer/observer';
import type { Card } from '@/utils/types/cards';

const list = document.querySelector('.cards');
const template = (
   document.querySelector('#card-product') as HTMLTemplateElement
).content;

const getCards = (
   cards: Card[],
   onClickLink: (e: MouseEvent, type: 'product' | 'category') => void,
   block?: Element,
) => {
   cards.forEach((c, i) => {
      const cardTemplate = template
         .querySelector('.card-product')
         ?.cloneNode(true) as HTMLLIElement;

      if (cardTemplate) {
         const title = cardTemplate.querySelector('.card-product__title')!;
         title.textContent = c.title;

         if (c.imgL) {
            const image = cardTemplate.querySelector(
               '.card-product__image',
            )! as HTMLImageElement;
            image.src = c.imgL;
            image.alt = c.title;
         }

         const link = cardTemplate.querySelector(
            '.card-product__link',
         ) as HTMLButtonElement;
         //* === добавляет параметры товара в id кнопки ============
         // const category = c.category ? `${c.category}&` : '&'; //! & - разделитель
         // const cardId = c.cardId ? `${c.cardId}` : '';
         // link.id = `${c.type}&${category}${cardId}`;
         const cardId = c.cardId ? `${c.cardId}` : '';
         link.id = cardId;

         link.addEventListener('click', (e) => onClickLink(e, 'product'));

         const btn = cardTemplate.querySelector(
            '.card-product__btn',
         ) as HTMLButtonElement;

         //* === слушатель на кнопку ============
         // btn.addEventListener('click', onClickLink);
      }

      // встраивает на странице
      list?.append(cardTemplate);

      //* === запускает анимацию ==========
      if (block) animationScrolling(cardTemplate, 'up');
   });
};

/**
 * Универсальный блок для встраивания template карточки продукта.
 * Аргументами передются: блок - куда встраиваются, массив с картами
 * Запускается наблюдатель для ленивой загрузки (последняя строчка кода). Аргументы: блок за которым наблюдает и коллбек
 * В коллбек предается entry.isIntersection из observer. Встраиваются карты и запускается анимация
 */
export const handleCards = (
   cards: Card[],
   onClickLink: (e: MouseEvent, type: 'product' | 'category') => void,
   block?: Element,
) => {
   //* ==== template ================================
   //* ==== выполняется при появлении блока и если нет встроенных элементов =============
   const getCardsObserver: ObserveCallback = (intersection) => {
      const card = document.querySelector('.card-product');
      // если нет встроенных карт, встраивает
      console.log('cards:', cards);

      const intersect = block ? intersection : true;
      if (!card && intersect) getCards(cards, onClickLink, block);
   };
   //* ---------------------------------------------

   //* ======= ставлю наблюдателя =============
   if (block) {
      observeElement(block, getCardsObserver);
   } else getCards(cards, onClickLink, block);
};
