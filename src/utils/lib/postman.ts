import emailjs from '@emailjs/browser';

const handleSubmit = async (
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
      message: nameProduct ? nameProduct : '',
   };

   if (copyemail) {
      console.log('spam');
   } else {
      await emailjs
         .send(
            serviceId,
            templateId,
            data,
            process.env.EMAIL_SERVICE_PUBLIC_KEY,
         )
         .then((data) => {
            if (data.status === 200) callback('success');
         })
         .catch(() => {
            callback('error');
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
