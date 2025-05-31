import { sertificatsLinks } from '@/utils/consts/sertificats';
import { $add, $class, $id, $remove } from '@/utils/lib/getElement';
import { loadSrc } from '@/utils/lib/loadSrc';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import type { LightGallery } from 'lightgallery/lightgallery';
import thumbnails from 'lightgallery/plugins/thumbnail';
import zoom from 'lightgallery/plugins/zoom';

const sertificatsBlock = $class('sertificats');
const galleryList = $class('sertificats__gallery');
const lg = $id('customize-thumbnails-gallery');
let plugin: LightGallery;

export const setSertificats = () => {
   if (sertificatsBlock) {
      const isExistNodes = galleryList.childNodes;
      if (isExistNodes.length === 0)
         sertificatsLinks.forEach((obj) => {
            const imgL = loadSrc(obj.imgL);
            const imgB = loadSrc(obj.img);

            const a = document.createElement('a');
            a.href = imgB;
            lg.append(a);

            const img = document.createElement('img');
            img.src = imgL;
            img.alt = obj.alt;

            a.append(img);
         });
      plugin = lightGallery(lg, {
         plugins: [thumbnails, zoom],
         // thumbnails
         thumbHeight: '100px',
         thumbWidth: 80,
         addClass: 'lg-custom-thumbnails', // кастомные стили
         // Remove the starting animations.
         // This can be done by overriding CSS as well
         appendThumbnailsTo: '.lg-outer', // кастомные стили
         // zoom
         allowMediaOverlap: true,
         actualSize: true, // иконка лупы увеличивает до истинного размера
         // showZoomInOutIcons: true, // отображет две лупы (+-)
         //scale: 0.5, // eсли две иконки, то указывает масштаб увеличения
      });
      plugin.openGallery();

      setTimeout(() => {
         $add('sertificats_active', sertificatsBlock);
      }, 500);
   }
};

if (sertificatsBlock) {
   lg.addEventListener('lgBeforeClose', () => {
      $remove('sertificats_active', sertificatsBlock);
   });

   lg.addEventListener('lgAfterClose', () => {
      plugin.destroy();
   });
}
