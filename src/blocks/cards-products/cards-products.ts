import { animationScrolling } from '@/utils/lib/animationScrolling';
import { ObserveCallback, observer } from '@/utils/lib/observer';
import type { Card } from '@/utils/types/cards';

const list = document.querySelector('.cards');
const template = (
   document.querySelector('#card-product') as HTMLTemplateElement
).content;

const getCards = (cards: Card[], block?: Element) => {
   const currentList = block ? block.querySelector('.cards') : list;
   cards.forEach((c, i) => {
      const cardTemplate = template
         .querySelector('.card-product')
         ?.cloneNode(true) as HTMLLIElement;

      if (cardTemplate) {
         const cardId = c.cardId ? `${c.cardId}` : '';
         cardTemplate.id = cardId;

         const title = cardTemplate.querySelector('.card-product__title')!;
         title.textContent = c.title;
         title.id = cardId;

         const imageContainer = cardTemplate.querySelector(
            '.card-product__image-container',
         )!;
         imageContainer.id = cardId;

         const image = cardTemplate.querySelector(
            '.card-product__image',
         )! as HTMLImageElement;
         if (c.imgL) {
            image.src = c.imgL[0];
            image.alt = c.title;
         }
         image.id = cardId;

         const link = cardTemplate.querySelector(
            '.card-product__link',
         ) as HTMLButtonElement;
         //* === добавляет параметры товара в id кнопки ============
         link.id = cardId;
      }

      // встраивает на странице
      currentList?.append(cardTemplate);

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
export const handleCards = (cards: Card[], block?: Element) => {
   //* ==== template ================================
   //* ==== выполняется при появлении блока и если нет встроенных элементов =============
   const getCardsObserver: ObserveCallback = (intersection) => {
      const currentCard = block
         ? block.querySelector('.card-product')
         : document.querySelector('.card-product');

      // const card = document.querySelector('.card-product');
      // если нет встроенных карт, встраивает

      const intersect = block ? intersection : true;
      if (!currentCard && intersect) getCards(cards, block);
   };
   //* ---------------------------------------------

   //* ======= ставлю наблюдателя =============
   if (block) {
      observer(block, getCardsObserver);
   } else {
      getCards(cards, block);
   }
};
