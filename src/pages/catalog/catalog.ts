import { changeUrl } from '@/utils/lib/changeUrl';
import './catalog.css';
import { setLocalStorageByPathname } from '@/utils/lib/setLocalStorage';
import { updateCatalogBlock } from '@/blocks/catalog/catalog-block/scripts/updateCatalogBlock';
import { setFooter } from '@/blocks/footer/footer';
import { setHeader } from '@/blocks/header/header';
import { $class } from '@/utils/lib/getElement';
import { updateBreadCrumbs } from '@/blocks/catalog/bread-crumbs/scripts/updateBreadCrumbs';
import { setCatalog } from '@/blocks/catalog/catalog-block/scripts/catalog-block';
import { setBreadCrumbs } from '@/blocks/catalog/bread-crumbs/scripts/bread-crumbs';

const card = $class('card-catalog');

if (__IS_DEV__) {
   changeUrl('catalog');
}

setHeader();
setBreadCrumbs();
setCatalog();
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
