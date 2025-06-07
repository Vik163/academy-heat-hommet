import { $add, $class, $contains, $remove } from '@/utils/lib/getElement';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';
import { getHtml } from './getHtml';

function closeModal() {
   const modal = $class('modal-call');

   $remove('modal-call_active', modal);
   modal?.removeEventListener('click', (e) => closeModalByClick(e));

   setTimeout(() => {
      modal.remove();
   }, 300);
}

// === закрытие модалки кликом по overlay или close  =========
function closeModalByClick(e: Event) {
   const target = e.target as HTMLElement;
   if (target.id === 'politic') {
      closeModal();

      redirectOnPage('politic');
   }
   if (
      $contains('modal-call_active', target) ||
      $contains('modal-call__close-btn', target)
   )
      closeModal();
}

// === закрытие модалки кнопкой Escape  =========
function closeModalByKeydown(e: KeyboardEvent) {
   if (e.key === 'Escape') closeModal();
}

export const setModalCall = (nameProduct: string, link: string) => {
   const modalHtml = getHtml(nameProduct, link);

   const parser = new DOMParser().parseFromString(modalHtml, 'text/html')!;
   const modalBlock = parser.querySelector('.modal-call')! as HTMLElement;

   document.body.append(modalBlock);

   setTimeout(() => {
      $add('modal-call_active', modalBlock);
   }, 10);

   modalBlock?.addEventListener('click', (e) => closeModalByClick(e));

   // handleNumberPhone('inp-tel');

   // handleCheckbox();

   // setPostman(confirmSend, nameProduct);
};

document.addEventListener('keydown', (e) => closeModalByKeydown(e));
