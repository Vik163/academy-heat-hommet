import type { Catalog, Categories } from '@/utils/types/cards';
import { updateCards } from '../updateCards/updateCards';
import { getDataFromCatalog } from '../getDataFromCatalog/getDataFromCatalog';
import { getNameByLocalStorage } from '../getNameByPathname/getNameByPathname';
import { setLocalStorage } from '../setLocalStorage/setLocalStorage';
import { changeUrl } from '../changeUrl/changeUrl';
import { redirectOnPage } from '../redirectOnPage/redirectOnPage';

const titlePage = document.querySelector('.catalog-block__title')!;

// --- при клике по карточке переходит по ссылке в ее содержимое ----------
// устанавливает данные в localStorage, меняет url в адресной строке, обновляет страницу
function onClickCard(e: MouseEvent) {
   const link = e.currentTarget as HTMLDivElement;
   const categoryName = link.id as Categories;

   const { viewName } = getNameByLocalStorage();
   setLocalStorage(viewName!, categoryName, '');

   changeUrl();

   updatePage();
}
/**
 *  обновление страницы: заголовок, карточки (пока catalog)
 *  если в адресной строке нет вида продуктов, то переходит на главную страницу
 */
export const updatePage = () => {
   const { view, category } = getDataFromCatalog()!;

   if (!view) redirectOnPage('/');

   const obj: Catalog = category! || view!;

   titlePage.textContent = obj.titlePage;
   updateCards(obj, onClickCard!);
};
