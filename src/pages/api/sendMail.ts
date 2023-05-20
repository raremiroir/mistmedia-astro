import type { APIRoute } from "astro";

import Mailgun from "mailgun.js";
import FormData from "form-data";

const MAILGUN_API_KEY = import.meta.env.MG_API_KEY;
const MAILGUN_DOMAIN = import.meta.env.MG_DOMAIN;
const MAILGUN_BASE_URL = import.meta.env.MG_BASE_URL;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
   username: 'api',
   key: MAILGUN_API_KEY,
   url: MAILGUN_BASE_URL,
})
// apiKey: MAILGUN_API_KEY,
// domain: MAILGUN_DOMAIN,
// host: MAILGUN_BASE_URL,

const sender = {
   name: 'Mist Media',
   email: '',
}
const recipients = [
   'mirostorm@gmail.com',
   'miro@mistmedia.be',
]
const cc = ''

export const post: APIRoute = async ({ request }) => {
   const { subject, message } = await request.json();

   // console.log('arrived at endpoint: ', subject, message);
   const res = await mg.messages.create(
      MAILGUN_DOMAIN,
      {
         to: recipients,
         cc: cc,
         from: `${sender.name} <noreply@${MAILGUN_DOMAIN}>`,
         subject: subject,
         text: message,
         html: `<p>${message}</p>`,
      }
   )

   if (res.status === 200) {
      return new Response(
         JSON.stringify({ message: 'Email sent successfully', res }), 
         { status: 200 }
      )
   } else {
      return new Response(
         JSON.stringify({ message: 'Failed to send email', res }),
         { status: 500 }
      )
   }
}