import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import './catalog.css';
import { catalog } from '@/utils/consts/products/catalogs';
import { getCategoriesByPathname } from '@/utils/lib/getCategoriesByPathname/getCategoriesByPathname';
import { setLocalStorage } from '@/utils/lib/setLocalStorage/setLocalStorage';
import type { Catalog, Categories, ViewName } from '@/utils/types/cards';
import { redirectOnPage } from '@/utils/lib/redirectOnPage/redirectOnPage';
import { setNavbar } from '@/blocks/navbar/navbar';
import { updateCards } from '@/utils/lib/updateCards/updateCards';

const titlePage = document.querySelector('.catalog-block__title')!;
const card = document.querySelector('.card-catalog');
const logo = document.querySelector('.logo');

if (__IS_DEV__) {
   changeUrl('catalog');
}
const { view, category } = getDataCatalog()!;

setNavbar();

/**
 *  Возвращает объект из каталога по виду продукта, полученного из pathname (localStorage)
 */
function getDataCatalog() {
   const { viewName, categoryName } = getCategoriesByPathname();
   if (categoryName) {
      const view = catalog.find((item) =>
         item.categories?.find((c) => c.title === categoryName),
      );

      const category = view?.categories?.find((c) => c.title === categoryName);

      return { view, category };
   } else {
      if (viewName) {
         const view = catalog.find((item) => item.title === viewName);
         return { view, undefined };
      }
   }
}

// --- обновление страницы: заголовок, карточки ----------------------
const updatePage = (obj: Catalog, onClick: (e: MouseEvent) => void) => {
   titlePage.textContent = obj.titlePage;
   updateCards(obj, onClick);
};

// --- при клике по карточке изменение параметров страницы ----------
function onClickCard(e: MouseEvent) {
   const link = e.currentTarget as HTMLDivElement;
   const categoryName = link.id as Categories;

   const { viewName } = getCategoriesByPathname();
   setLocalStorage(viewName, categoryName, '');

   changeUrl();
   const { view, category } = getDataCatalog()!;

   updatePage(category!, onClickCard);
}
// --- первоначальное обновление ---------------
if (!card) updatePage(category! || view!, onClickCard);

// --- переход по стрелкам браузера --------------
window.addEventListener('popstate', () => {
   updatePage(view!, onClickCard);
});

// ------- переход на главную страницу -----------------
logo?.addEventListener('click', function (e: Event) {
   e.preventDefault();
   setLocalStorage('', '', '');
   window.history.pushState(null, '', '/');
   redirectOnPage('index');
});
