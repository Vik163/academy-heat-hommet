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

   const serviceId = process.env.EMAIL_SERVICE_ID!;
   const templateId = process.env.EMAIL_TEMPLATE_ID!;

   const title = nameProduct ? 'Узнать цену' : 'Обратный звонок';

   const data: Record<string, unknown> = {
      title,
      phone,
      name,
      message: nameProduct ? nameProduct : 'Заказ на обратный звонок',
   };
   console.log('data:', data);

   if (copyemail) {
      console.log('spam');
   } else {
      emailjs
         .send(
            serviceId,
            templateId,
            data,
            process.env.EMAIL_SERVICE_PUBLIC_KEY,
         )
         .then((data) => {
            console.log('data:', data);
            if (data.status === 200) {
               console.log('data: 200');

               callback('success');
            }
         })
         .catch((error) => {
            // if (error) callback('error');
         });
   }
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
