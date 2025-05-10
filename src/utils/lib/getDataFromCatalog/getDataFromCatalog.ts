import { catalog } from '@/utils/consts/products/catalogs';
import { getNameByPathname } from '../getNameByPathname/getNameByPathname';

/**
 *  Возвращает объект из каталога по виду продукта, полученного из pathname (localStorage)
 */
export function getDataFromCatalog() {
   const { viewName, categoryName } = getNameByPathname();
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
