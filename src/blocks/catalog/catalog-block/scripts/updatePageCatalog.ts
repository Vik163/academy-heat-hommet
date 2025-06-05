import { getDataById } from '@/utils/lib/getDataFromStore';
import { $add, $class, $remove } from '@/utils/lib/getElement';
import { setProduct } from '../../product-block/scripts/product-block';
import { updateBreadCrumbs } from '../../bread-crumbs/scripts/updateBreadCrumbs';

const productBlock = $class('product');
const catalogBlock = $class('catalog-block');

/**
 *  обновление страницы: заголовок, карточки (пока catalog или товар)
 *  если в адресной строке нет вида продуктов, то переходит на главную страницу
 */
export const updatePageCatalog = () => {
   const card = getDataById();

   if (card) {
      $add('product_active', productBlock);
      $add('catalog-block_inactive', catalogBlock);

      setProduct(card);
   } else {
      $remove('product_active', productBlock);
      $remove('catalog-block_inactive', catalogBlock);
   }

   updateBreadCrumbs();
};
