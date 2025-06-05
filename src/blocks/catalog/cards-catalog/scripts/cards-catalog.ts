import { $class, $id, $remove } from '@/utils/lib/getElement';
import { loadSrc } from '@/utils/lib/loadSrc';
import type { Catalog } from '@/utils/types/catalog';
import { removeCardsCatalog } from './removeCardsCatalog';

const list = $class('cards');
const template = ($id('card-catalog') as HTMLTemplateElement).content;

/**
 * Универсальный блок для встраивания template карточки продукта.
 * Аргументами передются: блок - куда встраиваются, массив с картами
 * Запускается наблюдатель для ленивой загрузки (последняя строчка кода). Аргументы: блок за которым наблюдает и коллбек
 * В коллбек предается entry.isIntersection из observer. Встраиваются карты и запускается анимация
 */
export const handleCardsCatalog = (cards: Catalog[]) => {
   const paginationBlock = $class('pagination')!;
   removeCardsCatalog();
   // При откате назад класс не удаляется (не перезагружается страница)
   $remove('pagination_active', paginationBlock);

   //* ==== template ================================
   //* ==== выполняется при появлении блока и если нет встроенных элементов =============
   const card = $class('card-product');
   // если нет встроенных карт, встраивает
   if (!card)
      cards.forEach((c, i) => {
         const cardTemplate = template
            .querySelector('.card-catalog')
            ?.cloneNode(true) as HTMLLIElement;

         if (cardTemplate) {
            const title = $class('card-catalog__title', cardTemplate);
            title.textContent = c.title;
            title.id = c.title;

            const image = $class(
               'card-catalog__image',
               cardTemplate,
            ) as HTMLImageElement;
            const newSrc = loadSrc(c.imgL);
            image.src = newSrc;
            image.alt = c.title;
            image.id = c.title;

            //* === добавляет категорию товара в id кнопки ============
            const category = c.title;
            cardTemplate.id = category;
         }

         // встраивает на странице
         list?.append(cardTemplate);
      });
};
