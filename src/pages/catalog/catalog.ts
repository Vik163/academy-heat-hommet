import { changeUrl } from '@/utils/lib/changeUrl';
import './catalog.css';
import { setLocalStorageByPathname } from '@/utils/lib/setLocalStorage';
import { setNavbar } from '@/blocks/navbar/navbar';
import { setBreadCrumbs } from '@/blocks/catalog/bread-crumbs/bread-crumbs';
import { updateCatalogBlock } from '@/blocks/catalog/catalog-block/catalog-block';

const card = document.querySelector('.card-catalog');

if (__IS_DEV__) {
   changeUrl('catalog');
}

setNavbar();

setBreadCrumbs();

// --- первоначальное обновление ---------------
if (!card) {
   updateCatalogBlock();
}

// --- переход по стрелкам браузера --------------
window.addEventListener('popstate', () => {
   setLocalStorageByPathname();
   updateCatalogBlock();
});
