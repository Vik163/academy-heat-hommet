import { LOCALSTORAGE_ERROR } from '@/utils/consts/storage';
import { $add, $class, $remove } from '@/utils/lib/getElement';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';

export const confirmSend = (answer: 'loading' | 'success' | 'error') => {
   const content = $class('modal-call__content');
   const spinner = $class('spinner');
   // --- spinner ------------
   if (answer === 'loading') {
      $add('spinner_active', spinner);
      // --- успешно ----------
   } else if (answer === 'success') {
      const form = $class('form', content);
      const title = $class('modal-call__subtitle-info', content);
      title.textContent = 'Сообщение отправлено! Наш менеджер свяжется с Вами.';

      const nameProduct = $class('modal-call__name-product', content);
      if (nameProduct) nameProduct.remove();

      form.remove();

      $remove('spinner_active', spinner);
   } else {
      // --- ошибка --------
      localStorage.setItem(
         LOCALSTORAGE_ERROR,
         'Сообщение не отправлено. Попытайтесь еще раз или позвоните.',
      );

      redirectOnPage('errors');
   }
};
