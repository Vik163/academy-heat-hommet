import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../../cards-products/cards-products';
import { setLocalStorageByCardId } from '@/utils/lib/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { ObserveCallback, observer } from '@/utils/lib/observer';

const ownProductionBlock = document.querySelector('.own')!;
const cards = ownProductionBlock.querySelector('.own__list')!;

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

   onClickLink(target.id);
});
