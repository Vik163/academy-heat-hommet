import emailjs from '@emailjs/browser';

const handleSubmit = (
   e: SubmitEvent,
   form: HTMLFormElement,
   callback: (answer: 'loading' | 'success' | 'error') => void,
   nameProduct?: string,
) => {
   e.preventDefault();
   callback('loading');
   const formData = new FormData(form);

   const copyemail = formData.get('copyemail');
   const name = formData.get('username');
   const phone = formData.get('phone');
   // formData.append('to', 'jsfoto116@yandex.ru');
   // formData.append('from', 'sfoto116@yandex.ru');
   // formData.append('subject', 'Привет subject!');
   // formData.append(
   //    'html',
   //    '<html><head></head><body><p>My text</p></body></html>',
   // );
   // console.log('formData:', formData);

   const serviceId = process.env.EMAIL_SERVICE_ID!;
   const templateId = process.env.EMAIL_TEMPLATE_ID!;

   const title = nameProduct ? 'Узнать цену' : 'Обратный звонок';

   const data: Record<string, unknown> = {
      title,
      phone,
      name,
      message: nameProduct ? nameProduct : 'Заказ на обратный звонок',
   };

   // if (copyemail) {
   //    console.log('spam');
   // } else {
   //    emailjs
   //       .send(
   //          serviceId,
   //          templateId,
   //          data,
   //          process.env.EMAIL_SERVICE_PUBLIC_KEY,
   //       )
   //       .then((data) => {
   //          console.log('data:', data);
   //          if (data.status === 200) callback('success');
   //       })
   //       .catch((error) => {
   //          console.log('error:', error);
   //          // if (error) callback('error');
   //       });
   // }
};

export const setPostman = (
   callback: (answer: 'loading' | 'success' | 'error') => void,
   nameProduct?: string,
) => {
   const form = document.querySelector('.modal-call__form')! as HTMLFormElement;

   form.addEventListener('submit', (e) =>
      handleSubmit(e, form, callback, nameProduct),
   );
};
