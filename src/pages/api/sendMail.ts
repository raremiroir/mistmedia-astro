import type { APIRoute } from "astro";

import Mailgun from "mailgun-js";

const MAILGUN_API_KEY = import.meta.env.MG_API_KEY;
const MAILGUN_DOMAIN = import.meta.env.MG_DOMAIN;
const MAILGUN_BASE_URL = import.meta.env.MG_BASE_URL;

const mailgun = new Mailgun({
   apiKey: MAILGUN_API_KEY,
   domain: MAILGUN_DOMAIN,
   host: MAILGUN_BASE_URL,
});


const sender = {
   name: 'Mist Media',
   email: '',
}
const recipients = [
   'mirostorm@gmail.com',
   'miro.storm@trixolutions.be',
]
const cc = 'miro.polfliet@student.kdg.be'

export const post: APIRoute = async ({ request }) => {
   const { subject, message } = await request.json();

   // console.log('arrived at endpoint: ', subject, message);
   try{
      const data = await mail.send(
         subject,  
         message,
         sender,
         recipients,
         cc,
      );
      return new Response(
         JSON.stringify({ message: 'Email sent successfully', data }), 
         { status: 200 })
   } catch (err) {
      return new Response(
         JSON.stringify({ message: 'Failed to send email', err }), 
         { status: 500 })
   }
}

const mail = {
   send: async(
      subject: string, 
      message: string,
      sender: { name: string, email: string } = { name: 'Mist Media', email: ''},
      recipients: string[] = ['mirostorm@gmail.com', 'miro@mistmedia.be'],
      cc: string[]|string = '',
   ) => {
      try {
         const data = {
            from: `${sender.name} <noreply@${MAILGUN_DOMAIN}>`,
            to: recipients,
            cc: cc,
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
         }
         const res = mailgun.messages().send(data);
         // console.log('res: ', res);
      } catch (err) {
         console.error('err: ', err);
      }
   }
}