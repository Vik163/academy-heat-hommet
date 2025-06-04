import { changeUrl } from '@/utils/lib/changeUrl';
import './catalog.css';
import { setLocalStorageByPathname } from '@/utils/lib/setLocalStorage';
import {
   setBreadCrumbs,
   updateBreadCrumbs,
} from '@/blocks/catalog/bread-crumbs/bread-crumbs';
import { updateCatalogBlock } from '@/blocks/catalog/catalog-block/catalog-block';
import { setFooter } from '@/blocks/footer/footer';
import { setHeader } from '@/blocks/header/header';
import { $class } from '@/utils/lib/getElement';

const card = $class('card-catalog');

if (__IS_DEV__) {
   changeUrl('catalog');
}

setHeader();
setBreadCrumbs();
setFooter();

// --- первоначальное обновление ---------------
if (!card) {
   updateCatalogBlock();
}

// --- переход по стрелкам браузера --------------
window.addEventListener('popstate', () => {
   setLocalStorageByPathname();
   updateCatalogBlock();
});

window.addEventListener('resize', () => {
   updateBreadCrumbs();
});
