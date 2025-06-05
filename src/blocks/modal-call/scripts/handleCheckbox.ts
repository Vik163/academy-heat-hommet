import { $class, $id } from '@/utils/lib/getElement';

export // === управление кнопкой "отправить" через checkbox  =========
function handleCheckbox() {
   const checker = $id('privacy-callmeform') as HTMLInputElement;
   const btnSubmit = $class('form__btn') as HTMLButtonElement;

   checker.onchange = function (e) {
      const box = e.target as HTMLInputElement;
      if (box.checked) {
         btnSubmit.disabled = false;
      } else {
         btnSubmit.disabled = true;
      }
   };
}
