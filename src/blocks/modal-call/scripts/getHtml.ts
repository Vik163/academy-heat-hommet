// const htmlForm = `
//                   <form class="modal-call__form form">
//                      <input type='text' name='copyemail' placeholder='Email для копии' defaultValue="" ></input>
//                      <input class="form__input" type="name" name="username" placeholder="Имя" required />
//                      <input type="tel" id="inp-tel" minlength="12" maxlength="18" class="form__input" name="phone" placeholder="+7 (999) 999-99-99" required></input>
//                      <div class="form__checkbox checkbox">
//                         <input type="checkbox" name="privacy-policy" id="privacy-callmeform" required autocomplete="off">
//                         <label for="privacy-callmeform">
//                            <span><a id="politic" class="form__text-link" href="#">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с нашей политикой конфиденциальности</a></span>
//                         </label>
//                      </div>
//                      <button type="submit" id="sendNewSms" disabled class="form__btn">Отправить</button>
//                   </form>
//             `;

export const getHtml = (name: string, link: string) => {
   const modalCallHtml = `
               <h3 class="modal-call__title">
                  ${name}
               </h3>
               <img class="modal-call__image" src='${link}' alt='${name}' />
               <p class="modal-call__phones">+7 (917) 014-11-69 <br /> +7 (846) 354-66-30</p>
               <p class="modal-call__subtitle modal-call__subtitle-info">Вы можете связаться с нами по любому из указанных номеров, и наш специалист предоставит Вам все необходимые сведения о выбранном продукте, а также даст рекомендации по другим интересующим Вас вопросам.</p>
               `;

   const modalHtml = `
               <div id="modal-call" class="modal-call">
                  <div class="modal-call__content">
                     <button type="button" class="modal-call__close-btn"></button>
                     ${modalCallHtml}
                  </div>
               </div>`;

   return modalHtml;
};

// <p class="modal-call__subtitle modal-call__subtitle-product">${nameProduct || ''}</p>

// <p class="modal-call__subtitle modal-call__subtitle-info">Заполните поля ниже и наш менеджер свяжется с Вами</p>
//    ${htmlForm}
// </div>
// <div class="spinner"><span class="loader"></span></div>
