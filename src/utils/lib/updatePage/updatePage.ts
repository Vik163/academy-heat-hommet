import type { Catalog, Categories } from '@/utils/types/cards';
import { updateCards } from '../updateCards/updateCards';
import { getDataFromCatalog } from '../getDataFromCatalog/getDataFromCatalog';
import { getNameByPathname } from '../getNameByPathname/getNameByPathname';
import { setLocalStorage } from '../setLocalStorage/setLocalStorage';
import { changeUrl } from '../changeUrl/changeUrl';
import { redirectOnPage } from '../redirectOnPage/redirectOnPage';

const titlePage = document.querySelector('.catalog-block__title')!;

// --- при клике по карточке изменение параметров страницы ----------
function onClickCard(e: MouseEvent) {
   const link = e.currentTarget as HTMLDivElement;
   const categoryName = link.id as Categories;

   const { viewName } = getNameByPathname();
   setLocalStorage(viewName!, categoryName, '');

   changeUrl();

   updatePage();
}
// --- обновление страницы: заголовок, карточки ----------------------
export const updatePage = () => {
   const locationPath = location.pathname;
   const { view, category } = getDataFromCatalog()!;

   if (!view) redirectOnPage('/');
   const obj: Catalog = category! || view!;

   titlePage.textContent = obj.titlePage;
   updateCards(obj, onClickCard!);
};
