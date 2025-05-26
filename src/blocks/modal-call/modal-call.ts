import { handleNumberPhone } from '@/utils/lib/handleNumberPhone';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';

function closeModal() {
   const modal = document.querySelector('.modal-call')!;

   modal.classList.remove('modal-call_active');
   modal.remove();
}

// === закрытие модалки кликом по overlay или close  =========
function closeModalByClick(e: Event) {
   const target = e.target as HTMLElement;
   if (target.id === 'politic') {
      closeModal();

      redirectOnPage('politic');
   }
   if (
      target.classList.contains('modal-call_active') ||
      target.classList.contains('modal-call__close-btn')
   )
      closeModal();
}

// === закрытие модалки кнопкой Escape  =========
function closeModalByKeydown(e: KeyboardEvent) {
   if (e.key === 'Escape') closeModal();
}

// === управление кнопкой "отправить" через checkbox  =========
function handleCheckbox() {
   const checker = document.getElementById(
      'privacy-callmeform',
   )! as HTMLInputElement;
   const btnSubmit = document.querySelector('.form__btn')! as HTMLButtonElement;

   checker.onchange = function (e) {
      const box = e.target as HTMLInputElement;
      if (box.checked) {
         btnSubmit.disabled = false;
      } else {
         btnSubmit.disabled = true;
      }
   };
}

export const setModalCall = () => {
   const modalCallHtml = `                  
            <h3 class="modal-call__title">
               Заказать обратный <br />
               звонок
            </h3>
            <form class="modal-call__form form">
               <input class="form__input" type="name" placeholder="Имя" required />
               <input type="tel" id="inp-tel"  class="form__input" placeholder="+7 (999) 999-99-99" required></input>
               <div class="form__checkbox checkbox">
                  <input type="checkbox" name="privacy-policy" id="privacy-callmeform" required autocomplete="off">
                  <label for="privacy-callmeform">
                     <span><a id="politic" class="form__text-link" href="#">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с нашей политикой конфиденциальности</a></span>
                  </label>
               </div>
               <button type="submit" id="sendNewSms" disabled class="form__btn">Отправить</button>
            </form>
            `;

   const modalHtml = `
            <div id="modal-call" class="modal-call">
               <div class="modal-call__content">
                  <button type="button" class="modal-call__close-btn"></button>
                  ${modalCallHtml}
               </div>
            </div>`;

   const parser = new DOMParser().parseFromString(modalHtml, 'text/html')!;
   const modalBlock = parser.querySelector('.modal-call')!;

   document.body.append(modalBlock);
   modalBlock.classList.add('modal-call_active');
   modalBlock?.addEventListener('click', (e) => closeModalByClick(e));

   handleNumberPhone('inp-tel');

   handleCheckbox();
};

document.addEventListener('keydown', (e) => closeModalByKeydown(e));
