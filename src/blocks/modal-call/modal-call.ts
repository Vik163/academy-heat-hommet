import { LOCALSTORAGE_ERROR } from '@/utils/consts/storage';
import { handleNumberPhone } from '@/utils/lib/handleNumberPhone';
import { setPostman } from '@/utils/lib/postman';
import { redirectOnPage } from '@/utils/lib/redirectOnPage';

function closeModal() {
   const modal = document.querySelector('.modal-call')!;

   modal.classList.remove('modal-call_active');
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
      target.classList.contains('modal-call_active') ||
      target.classList.contains('modal-call__close-btn')
   )
      closeModal();
}

// === закрытие модалки кнопкой Escape  =========
function closeModalByKeydown(e: KeyboardEvent) {
   if (e.key === 'Escape') closeModal();
}

const confirmSend = (answer: 'loading' | 'success' | 'error') => {
   const content = document.querySelector('.modal-call__content')!;
   const spinner = document.querySelector('.spinner')!;
   // --- spinner ------------
   if (answer === 'loading') {
      spinner.classList.add('spinner_active');
      // --- успешно ----------
   } else if (answer === 'success') {
      const form = content.querySelector('.form')!;
      const title = content.querySelector('.modal-call__subtitle-info')!;
      title.textContent = 'Сообщение отправлено! Наш менеджер свяжется с Вами.';

      const nameProduct = content.querySelector('.modal-call__name-product')!;
      if (nameProduct) nameProduct.remove();

      form.remove();

      spinner.classList.remove('spinner_active');
   } else {
      // --- ошибка --------
      localStorage.setItem(
         LOCALSTORAGE_ERROR,
         'Сообщение не отправлено. Попытайтесь еще раз или позвоните.',
      );

      redirectOnPage('errors');
   }
};

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

export const setModalCall = (nameProduct?: string) => {
   const requestCallHtml = `
            <h3 class="modal-call__title">
               Заказать обратный <br />
               звонок              
            </h3>
            <p class="modal-call__subtitle modal-call__subtitle-product"></p>
            <p class="modal-call__subtitle modal-call__subtitle-info">Заполните поля ниже и наш менеджер свяжется с Вами</p>
            `;
   const requestPriceHtml = `
            <h3 class="modal-call__title">
               Узнать цену
            </h3>
            <p class="modal-call__subtitle modal-call__subtitle-product">${nameProduct}</p>
            <p class="modal-call__subtitle modal-call__subtitle-info">Заполните поля ниже и наш менеджер свяжется с Вами</p>
            `;

   const modalCallHtml = nameProduct ? requestPriceHtml : requestCallHtml;

   const modalHtml = `
            <div id="modal-call" class="modal-call">
               <div class="modal-call__content">
                  <button type="button" class="modal-call__close-btn"></button>
                  ${modalCallHtml}
                  <form class="modal-call__form form">
                     <input type='text' name='copyemail' placeholder='Email для копии' defaultValue="" ></input>
                     <input class="form__input" type="name" name="username" placeholder="Имя" required />
                     <input type="tel" id="inp-tel" minlength="18" maxlength="18" class="form__input" name="phone" placeholder="+7 (999) 999-99-99" required></input>
                     <div class="form__checkbox checkbox">
                        <input type="checkbox" name="privacy-policy" id="privacy-callmeform" required autocomplete="off">
                        <label for="privacy-callmeform">
                           <span><a id="politic" class="form__text-link" href="#">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с нашей политикой конфиденциальности</a></span>
                        </label>
                     </div>
                  <button type="submit" id="sendNewSms" disabled class="form__btn">Отправить</button>
               </form>
               </div>
               <div class="spinner"><span class="loader"></span></div>
            </div>`;

   const parser = new DOMParser().parseFromString(modalHtml, 'text/html')!;
   const modalBlock = parser.querySelector('.modal-call')!;

   document.body.append(modalBlock);

   setTimeout(() => {
      modalBlock.classList.add('modal-call_active');
   }, 10);

   modalBlock?.addEventListener('click', (e) => closeModalByClick(e));

   handleNumberPhone('inp-tel');

   handleCheckbox();

   setPostman(confirmSend, nameProduct);
};

document.addEventListener('keydown', (e) => closeModalByKeydown(e));
