import { loadSrc } from '@/utils/lib/loadSrc/loadSrc';
import type { Card, Catalog } from '@/utils/types/cards';

const list = document.querySelector('.catalog__list');
const template = (
   document.querySelector('#card-catalog') as HTMLTemplateElement
).content;

/**
 * Универсальный блок для встраивания template карточки продукта.
 * Аргументами передются: блок - куда встраиваются, массив с картами
 * Запускается наблюдатель для ленивой загрузки (последняя строчка кода). Аргументы: блок за которым наблюдает и коллбек
 * В коллбек предается entry.isIntersection из observer. Встраиваются карты и запускается анимация
 */
export const handleCardsCatalog = (
   cards: Catalog[],
   onClickLink: (e: MouseEvent) => void,
) => {
   console.log('i');

   //* ==== template ================================
   //* ==== выполняется при появлении блока и если нет встроенных элементов =============
   const card = document.querySelector('.card-product')!;
   console.log('card:', card);
   // если нет встроенных карт, встраивает
   if (!card)
      cards.forEach((c, i) => {
         const cardTemplate = template
            .querySelector('.card-catalog')
            ?.cloneNode(true) as HTMLLIElement;

         if (cardTemplate) {
            const title = cardTemplate.querySelector('.card-catalog__title')!;
            title.textContent = c.title;

            const image = cardTemplate.querySelector(
               '.card-catalog__image',
            )! as HTMLImageElement;
            const newSrc = loadSrc(c.imgL);
            image.src = newSrc;
            image.alt = c.title;

            //* === добавляет параметры товара в id кнопки ============
            // const category = c.category ? `${c.category}&` : '&'; //! & - разделитель
            // const cardId = c.cardId ? `${c.cardId}` : '';
            // link.id = `${c.type}&${category}${cardId}`;

            cardTemplate.addEventListener('click', onClickLink);
         }

         // встраивает на странице
         list?.append(cardTemplate);
      });
};
