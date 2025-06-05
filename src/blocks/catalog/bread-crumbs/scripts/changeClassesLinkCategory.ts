import { $add, $remove } from '@/utils/lib/getElement';

export const changeClassesLinkCategory = (
   method: 'add' | 'remove',
   item: HTMLElement,
   link: HTMLElement,
) => {
   if (method === 'add') {
      $add('bread-crumbs__item_active', item);
      $add('bread-crumbs__link_active', link);
   } else {
      $remove('bread-crumbs__item_active', item);
      $remove('bread-crumbs__link_active', link);
   }
};
