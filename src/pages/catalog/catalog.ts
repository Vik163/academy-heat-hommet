import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { getPathname } from '@/utils/lib/getPathname/getPathname';
import './catalog.css';
import { catalog } from '@/utils/consts/products/catalogs';
import { getTitleByPathname } from '@/utils/lib/getTitleByPathname/getTitleByPathname';
import {
   handleCardsCatalog,
   removeCardsCatalog,
} from '@/blocks/catalog/cards-catalog/cards-catalog';
import { handleCards } from '@/blocks/cards-products/cards-products';
import { getDataByView } from '@/utils/lib/getDataFromStore/getDataFromStore';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import { Catalog, Categories, ViewName } from '@/utils/types/cards';

const titlePage = document.querySelector('.catalog-block__title')!;
const card = document.querySelector('.card-catalog');

if (__IS_DEV__) {
   changeUrl('catalog');
}
window.addEventListener('popstate', () => {
   const data = getDataCatalog()!;
   handlePage(data);
});

/**
 *  Возвращает объект из каталога по виду продукта, полученного из pathname (localStorage)
 */
function getDataCatalog() {
   const title = getTitleByPathname();
   if (title) return catalog.find((item) => item.title === title);
}

const handlePage = (obj: Catalog) => {
   if (obj) {
      titlePage.textContent = obj.titlePage;

      if (obj.categories) {
         removeCardsCatalog();
         handleCardsCatalog(obj.categories, onClick);
      } else {
         const obj = getDataByView();
         const data = Object.values(obj)[0];
         removeCardsCatalog();
         handleCards(data, onClick);
      }
   } else handleCardsCatalog(catalog, onClick);
};

const page = getDataCatalog()!;

const onClick = (e: MouseEvent) => {
   const link = e.currentTarget as HTMLDivElement;
   const categoryName = link.id as Categories;

   const view = getTitleByPathname() as ViewName;
   setLocalStorage(view, categoryName, '');

   // if (__IS_DEV__) {
   changeUrl();
   // }

   const categoryProducts = page.categories?.find(
      (cat) => cat.title === categoryName,
   )!;

   console.log('categoryProducts:', categoryProducts);
   handlePage(categoryProducts);
};

if (!card) handlePage(page);
