import { changeUrl } from '@/utils/lib/changeUrl';
import { getNameByLocalStorage } from '@/utils/lib/getNamesGroup';
import type { Categories, ViewName } from '@/utils/types/catalog';
import {
   setLocalStorage,
   setLocalStorageByCardId,
} from '@/utils/lib/setLocalStorage';
import { setModalCall } from '@/blocks/modal-call/scripts/modal-call';
import { $class } from '@/utils/lib/getElement';
import { updatePageCatalog } from './updatePageCatalog';
import { updateCatalogBlock } from './updateCatalogBlock';

const cards = $class('catalog-block__list');

// --- при клике по карточке переходит по ссылке в ее содержимое (карточка продукта или категория каталога) ---
// устанавливает данные в localStorage, меняет url в адресной строке, обновляет страницу
function onClickCard(cardId: string, type?: 'category') {
   if (type === 'category') {
      const { viewName } = getNameByLocalStorage();

      // если нет viewName, значит открыт главный каталог и в id передается вид продукта
      if (viewName) {
         setLocalStorage(viewName!, cardId as Categories, '');
      } else {
         const view = cardId as ViewName;

         setLocalStorage(view, '', '');
      }
      updateCatalogBlock();
   } else {
      setLocalStorageByCardId(cardId);
      updatePageCatalog();
   }
   changeUrl();
}

export const setCatalog = () => {
   // делегирование событий (пришлось на все элементы карточек навесить id)
   cards.addEventListener('click', function (e: Event) {
      const target = e.target as HTMLElement;

      if (target.tagName.toLowerCase() === 'button') {
         setModalCall(target.id);
      } else if (target.className.includes('catalog')) {
         onClickCard(target.id, 'category');
      } else onClickCard(target.id);
   });
};
