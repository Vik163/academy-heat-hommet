import { ownProductionCards } from '@/utils/consts/own-production';
import { handleCards } from '../cards-products/cards-products';
import catalogPage from '@/pages/catalog.html';
import {
   // addQueryParams,
   getQueryParams,
} from '@/utils/lib/query-params/query-params';

const ownProductionBlock = document.querySelector('.own')!;

export const handleOwn = async () => {
   console.log(window.location.href);

   const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      const btnId = target.id;
      const arr = target.id.split('&');

      const params = {
         type: arr[0],
         stype: arr[1],
         _id: arr[2],
      };

      // console.log(addQueryParams(params)); // сохраняет url в истории

      const address = __IS_DEV__
         ? `catalog.html${getQueryParams(params)}`
         : `https://academy-heat-hommet.vercel.app/catalog${getQueryParams(params)}`;
      console.log('address:', address);
      window.location.href = address;
   };

   handleCards(ownProductionBlock, ownProductionCards, onClick);
};
