import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../../cards-products/cards-products';
import { setLocalStorageByCardId } from '@/utils/lib/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { ObserveCallback, observer } from '@/utils/lib/observer';
import { setModalCall } from '@/blocks/modal-call/modal-call';
import { $class } from '@/utils/lib/getElement';

const ownProductionBlock = $class('own');
const cards = $class('own__list', ownProductionBlock);

const onClickLink = (id: string) => {
   setLocalStorageByCardId(id);

   redirectOnPage('catalog');
};

const setCards: ObserveCallback = (entry, isLoaded) => {
   if (entry.isIntersecting) {
      if (!isLoaded) {
         handleCards(ownProductionCards, ownProductionBlock);
      }
   }
};

export const setOwn = async () => {
   // ленивая загрузка
   observer(ownProductionBlock, setCards);
};

// делегирование событий (пришлось на все элементы карточек навесить id)
cards.addEventListener('click', function (e: Event) {
   const target = e.target as HTMLElement;

   if (target.tagName.toLowerCase() === 'button') {
      setModalCall(target.id);
   } else onClickLink(target.id);
});
