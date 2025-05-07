import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { getPathname } from '@/utils/lib/getPathname/getPathname';
import './catalog.css';
import { catalog } from '@/utils/consts/products/catalogs';
import { getTitleByPathname } from '@/utils/lib/getTitleByPathname/getTitleByPathname';
import { handleCardsCatalog } from '@/blocks/catalog/cards-catalog/cards-catalog';
import { handleCards } from '@/blocks/cards-products/cards-products';
import { getDataByView } from '@/utils/lib/getDataFromStore/getDataFromStore';

const titlePage = document.querySelector('.catalog-block__title')!;

const pathname = getPathname();

if (__IS_DEV__) {
   changeUrl(pathname);
}

const getDataCatalog = () => {
   const title = getTitleByPathname();
   console.log('title:', title);
   if (title) return catalog.find((item) => item.title === title);
};

const onClick = (e: MouseEvent) => {
   console.log('e:', e);
};

const handlePage = () => {
   const page = getDataCatalog();
   console.log('page:', page);
   if (page) {
      titlePage.textContent = page.titlePage;

      if (page.categories) {
         handleCardsCatalog(page.categories, onClick);
      } else {
         const obj = getDataByView();
         const data = Object.values(obj)[0];
         console.log('data:', data);
         handleCards(data, onClick);
      }
   } else handleCardsCatalog(catalog, onClick);
};

handlePage();
