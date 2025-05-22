import { drySystemMontage } from '@/utils/consts/products/dsm/dsm';
import { handleCards } from '../../cards-products/cards-products';
import { setLocalStorageByCardId } from '@/utils/lib/setLocalStorage';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { ObserveCallback, observer } from '@/utils/lib/observer';

const sdmProductionBlock = document.querySelector('.sdm')!;
const cards = sdmProductionBlock.querySelector('.sdm__list')!;

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

   onClickLink(target.id);
});
