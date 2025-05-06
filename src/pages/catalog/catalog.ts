import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { getPathname } from '@/utils/lib/getPathname/getPathname';
import './catalog.css';
import { catalog } from '@/utils/consts/products/catalogs';
import { getTitleByPathname } from '@/utils/lib/getTitleByPathname/getTitleByPathname';
import { handleCardsCatalog } from '@/blocks/cards-catalog/cards-catalog';

const titlePage = document.querySelector('.catalog__title')!;

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
   if (page) {
      titlePage.textContent = page.titlePage;
   }

   handleCardsCatalog(catalog, onClick);
};

handlePage();
