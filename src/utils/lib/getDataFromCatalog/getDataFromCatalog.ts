import { catalog } from '@/utils/consts/products/catalogs';
import { getNameByLocalStorage } from '../getNameByPathname/getNameByPathname';

/**
 *  Возвращает объект из каталога по виду продукта,
 * по полученному объекту со свойствами {view, category} (имена на русском языке или undefined),
 * в зависимости от адресной строки (localStorage)
 */
export function getDataFromCatalog() {
   const { viewName, categoryName } = getNameByLocalStorage();
   if (categoryName) {
      const view = catalog.find((item) =>
         item.categories?.find((c) => c.title === categoryName),
      );

      const category = view?.categories?.find((c) => c.title === categoryName);

      return { view, category };
   } else if (viewName) {
      const view = catalog.find((item) => item.title === viewName);
      return { view, category: undefined };
   } else return { view: undefined, category: undefined };
}
