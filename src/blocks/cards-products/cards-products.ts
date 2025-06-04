import { animationScrolling } from '@/utils/lib/animationScrolling';
import { $add, $class, $id, $remove } from '@/utils/lib/getElement';
import lozad from '@/utils/lib/lozad';
import { ObserveCallback, observer } from '@/utils/lib/observer';
import type { Card } from '@/utils/types/cards';

const list = $class('cards');
const template = ($id('card-product') as HTMLTemplateElement).content;

const getCards = (cards: Card[], block?: HTMLElement) => {
   const currentList = block ? $class('cards', block) : list;
   cards.forEach((c, i) => {
      const cardTemplate = template
         .querySelector('.card-product')
         ?.cloneNode(true) as HTMLLIElement;

      if (cardTemplate) {
         const cardId = c.cardId ? `${c.cardId}` : '';
         cardTemplate.id = cardId;

         const title = $class('card-product__title', cardTemplate);
         title.textContent = c.title;
         title.id = cardId;

         const imageContainer = $class(
            'card-product__image-container',
            cardTemplate,
         );
         imageContainer.id = cardId;

         const image = $class(
            'card-product__image',
            cardTemplate,
         ) as HTMLImageElement;
         if (c.imgL) {
            $remove('card-product__no-image', image);

            //* --- ленивая загрузка --------------------
            image.setAttribute('data-src', c.imgL[0]);
            image.alt = c.title;
         } else {
            // заглушка "нет изображения"
            image.setAttribute('data-src', '#');
            $add('card-product__no-image', image);
         }

         image.id = cardId;

         const link = $class('card-product__link', cardTemplate);
         //* === добавляет параметры товара в id кнопки ============
         link.id = cardId;

         const btn = $class('card-product__btn', cardTemplate);

         //* === добавляет параметры товара в id кнопки ============
         btn.id = c.title;
      }

      // встраивает на странице
      currentList?.append(cardTemplate);

      //* === запускает анимацию ==========
      if (block) animationScrolling(cardTemplate, 'up');
   });

   //* --- устанавливает наблюдателя ленивой загрузки изображений по их классу
   const observer = lozad('.card-product__image');
   observer.observe();
};

/**
 * Универсальный блок для встраивания template карточки продукта.
 * Аргументами передются: блок - куда встраиваются, массив с картами
 * Запускается наблюдатель для ленивой загрузки (последняя строчка кода). Аргументы: блок за которым наблюдает и коллбек
 * В коллбек предается entry.isIntersection из observer. Встраиваются карты и запускается анимация
 * -- ленивая загрузка изображений
 */
export const handleCards = (cards: Card[], block?: HTMLElement) => {
   //* ==== template ================================
   //* ==== выполняется при появлении блока и если нет встроенных элементов =============
   const getCardsObserver: ObserveCallback = (intersection) => {
      const currentCard = block
         ? $class('card-product', block)
         : $class('card-product');

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
