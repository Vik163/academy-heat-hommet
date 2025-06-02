import emailjs from '@emailjs/browser';

const handleSubmit = (
   e: SubmitEvent,
   form: HTMLFormElement,
   callback: (answer: 'loading' | 'success' | 'error') => void,
   nameProduct?: string,
) => {
   e.preventDefault();
   // callback('loading');
   const formData = new FormData(form);

   const copyemail = formData.get('copyemail');
   const name = formData.get('username');
   const phone = formData.get('phone');
   formData.append('to', 'jsfoto116@yandex.ru');
   formData.append('from', 'sfoto116@yandex.ru');
   formData.append('subject', 'Привет subject!');
   formData.append(
      'html',
      '<html><head></head><body><p>My text</p></body></html>',
   );
   console.log('formData:', formData);

   const serviceId = process.env.EMAIL_SERVICE_ID!;
   const templateId = process.env.EMAIL_TEMPLATE_ID!;

   const title = nameProduct ? 'Узнать цену' : 'Обратный звонок';

   const data: Record<string, unknown> = {
      title,
      phone,
      name,
      message: nameProduct ? nameProduct : 'Заказ на обратный звонок',
   };
   // console.log('data:', data);
   fetch('https://api.smtp.bz/v1/smtp/send', {
      method: 'POST',
      headers: { Authorization: 'SGhquaIzOR0vIaJh5oU1kMsgNMkYnT66pdlJ' },
      body: formData,
   }).then((data: any) => {
      console.log('data:', data);
   });
   //@ts-ignore
   // Email.send({
   //    Host: `connect.smtp.bz`,
   //    Username: 'sender@email_address.com',
   //    Password: 'Enter your password',
   //    To: 'jsfoto116@yandex.ru',
   //    From: 'sender@email_address.com',
   //    Subject: 'Отправка письма через SMTP.BZ',
   //    Body: 'Well that was easy!!',

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

   //          setTimeout(() => {
   //             if (data.status === 200) return;
   //             callback('error');
   //          }, 10000);
   //       })
   //       .catch((error) => {
   //          if (error) callback('error');
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

// const nodemailer = require('nodemailer');

// // Create a test account or replace with real credentials.
// const transporter = nodemailer.createTransport({
//    host: 'smtp.ethereal.email',
//    port: 587,
//    secure: false, // true for 465, false for other ports
//    auth: {
//       user: 'maddison53@ethereal.email',
//       pass: 'jn7jnAPss4f63QBp6D',
//    },
// });

// // Wrap in an async IIFE so we can use await.
// (async () => {
//    const info = await transporter.sendMail({
//       from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
//       to: 'bar@example.com, baz@example.com',
//       subject: 'Hello ✔',
//       text: 'Hello world?', // plain‑text body
//       html: '<b>Hello world?</b>', // HTML body
//    });

//    console.log('Message sent:', info.messageId);
// })();
