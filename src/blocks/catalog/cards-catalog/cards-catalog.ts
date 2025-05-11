import { loadSrc } from '@/utils/lib/loadSrc/loadSrc';
import type { Catalog } from '@/utils/types/catalog';

const list = document.querySelector('.cards');
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
   onClickLink: (e: MouseEvent, type: 'product' | 'category') => void,
) => {
   //* ==== template ================================
   //* ==== выполняется при появлении блока и если нет встроенных элементов =============
   const card = document.querySelector('.card-product')!;
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

            //* === добавляет категорию товара в id кнопки ============
            const category = c.title;
            cardTemplate.id = category;

            cardTemplate.addEventListener('click', (e) =>
               onClickLink(e, 'category'),
            );
         }

         // встраивает на странице
         list?.append(cardTemplate);
      });
};

/**
 * Удаляет template карточки
 */
export const removeCardsCatalog = () => {
   const nodesCatalog = document.querySelectorAll('.card-catalog');
   const nodesCards = document.querySelectorAll('.card-product');
   const nodes = nodesCatalog.length > 0 ? nodesCatalog : nodesCards;

   const arr = new Array(nodes.length).fill(0);

   arr.forEach(() => {
      const catalog = document.querySelector('.card-catalog')!;
      const card = document.querySelector('.card-product')!;
      if (card) card.remove();
      if (catalog) catalog.remove();
   });
};
