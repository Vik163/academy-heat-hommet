import { changeUrl } from '@/utils/lib/changeUrl';
import './contacts.css';
import { setNavbar } from '@/blocks/navbar/navbar';
import type { YMapLocationRequest } from '@yandex/ymaps3-types';
import {
   YMap,
   YMapControls,
   YMapDefaultFeaturesLayer,
   YMapDefaultSchemeLayer,
} from '@yandex/ymaps3-types';
import { MAIN_COORD, ZOOM } from '@/utils/consts/main';
import { setFooter } from '@/blocks/footer/footer';
import { setHeader } from '@/blocks/header/header';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';
import { $id } from '@/utils/lib/getElement';

if (__IS_DEV__) {
   changeUrl('contacts');
}

setLocalStorage('', '', '');

setHeader();
setFooter();

const LOCATION: YMapLocationRequest = {
   center: MAIN_COORD,
   zoom: ZOOM,
};

const map = new YMap(
   $id('map'),
   {
      location: LOCATION,
   },
   [
      // Add a map scheme layer
      new YMapDefaultSchemeLayer({}),
      // Add a layer of geo objects to display the markers
      new YMapDefaultFeaturesLayer({}),
   ],
);

async function main() {
   await ymaps3.ready; // waiting for the main JS API to load.

   const { YMapZoomControl, YMapDefaultMarker } = await import(
      '@yandex/ymaps3-default-ui-theme'
   );

   const controls = new YMapControls({ position: 'left' });
   controls.addChild(
      new YMapZoomControl({
         easing: 'linear',
      }),
   );
   map.addChild(
      new YMapDefaultMarker({
         coordinates: MAIN_COORD,
         title: `Академия Тепла`,
         color: 'red',
         size: 'small',
         iconName: 'fallback',
      }),
   );

   map.addChild(controls);
}

main();
