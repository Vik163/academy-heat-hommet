import { drySystemMontage } from '@/utils/consts/products/sdmData/sdmData';
import { handleCards } from '../../cards-products/cards-products';
import { setLocalStorageByCardId } from '@/utils/lib/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { ObserveCallback, observer } from '@/utils/lib/observer';
import { setModalCall } from '@/blocks/modal-call/scripts/modal-call';
import { $class } from '@/utils/lib/getElement';

const sdmProductionBlock = $class('sdm');
const cards = $class('sdm__list', sdmProductionBlock);

const onClickLink = (id: string) => {
   setLocalStorageByCardId(id);

   redirectOnPage('catalog');
};

const setCards: ObserveCallback = (entry, isLoaded) => {
   if (entry.isIntersecting) {
      if (!isLoaded) {
         const cards = drySystemMontage['Система сухого монтажа'];

         handleCards(cards, sdmProductionBlock);
      }
   }
};

export const setSDM = async () => {
   // ленивая загрузка
   observer(sdmProductionBlock, setCards);
};

// делегирование событий (пришлось на все элементы карточек навесить id)
cards.addEventListener('click', function (e: Event) {
   const target = e.target as HTMLElement;

   if (!target.id) return;
   if (target.tagName.toLowerCase() === 'button') {
      const arrData = target.id.split('|');
      const name = arrData[0];
      const link = arrData[1];
      setModalCall(name, link);
   } else onClickLink(target.id);
});
