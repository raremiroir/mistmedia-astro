<script lang="ts">
   import { t } from "i18next";
   
	import type { FormProps } from "@/types/components/form";
   import FormBase from "@/components/Form/FormBase.svelte";

   import { locale } from "@/stores";

   console.log($locale)

   export let title = $locale === 'nl' ? 'Contacteer ons' : 'Contact us';
   export let submitText = $locale === 'nl' ? 'Bericht verzenden' : 'Send message';

   export let inputItems: FormProps = {
      name: { 
         required: true, 
         first_name: $locale === 'nl' ? "Voornaam" : "First name",
         last_name: $locale === 'nl' ? "Achternaam" : "Last name",
      },
      email: { 
         required: true, 
         label: $locale === 'nl' ? "E-mail" : "Email",
      },
      organisation: { 
         required: false, 
         label: $locale === 'nl' ? "Bedrijf" : "Company",
      },
      subject: { 
         required: true, 
         label: $locale === 'nl' ? "Onderwerp" : "Subject",
      },
      message: { 
         required: true, 
         label: $locale === 'nl' ? "Bericht" : "Message",
         rows: 6, 
      },
      // accept_terms: { 
      //    required: true,
      //    label: $locale === 'nl' ? "Ik ga akkoord met de algemene voorwaarden" : "I agree to the terms and conditions",
      // },
      turnstile_response: { 
         required: true,
         label: $locale === 'nl' ? "Even bewijzen dat je geen robot bent..." : "Just to prove you're not a robot...",
      },
   }

   export let translation = {
      validation: {
         required: locale.get() === 'nl' ? "moet ingevuld worden" : "should probably be filled in",
         only_alpha: $locale === 'nl' ? "Dit veld mag enkel letters en/of cijfers bevatten" : "This field can only contain letters and/or numbers",
         field_too_short: $locale === 'nl' ? "Het is onbeleefd om zo weinig te zeggen" : "It's rude to say so little",
         field_too_long: $locale === 'nl' ? "Dat is wel heel veel tekst, probeer het wat beknopter te houden" : "That's a lot of text, try to keep it a bit shorter",
         email_error: $locale === 'nl' ? "Met dit e-mailadres kan je niet veel doen" : "You can't do much with this email address",
         phone_error: $locale === 'nl' ? "Dit lijkt niet helemaal op een telefoonnummer" : "This doesn't look much like a phone number",
         terms_error: $locale === 'nl' ? "Het stelt vrij weinig voor, maar je moet toch wel akkoord gaan met de algemene voorwaarden" : "It's not a big deal, but you should probably agree to the terms and conditions",
         turnstile_error: $locale === 'nl' ? "Ben jij een robot? 🤔" : "Are you a robot? 🤔",
      },
      placeholder: {
         first_name: $locale === 'nl' ? "Peter" : "Anne",
         last_name: $locale === 'nl' ? "Selie" : "Chovy",
         email: $locale === 'nl' ? "peter.selie@mail.be" : "anne.chovy@mail.com",
         phone: $locale === 'nl' ? "012 34 56 78" : "012 34 56 78",
         organisation: $locale === 'nl' ? "Peterselie NV" : "Anchovy Inc.",
         job: $locale === 'nl' ? "CEO" : "CTO",
         subject: $locale === 'nl' ? "Waar wil je het met ons over hebben?" : "What do you want to talk to us about?",
         message: $locale === 'nl' ? "Schrijf je bericht hier..." : "Write your message here...",
      },
      alert: {
         title: $locale === 'nl' ? "Bericht verzonden!" : "Message sent!",
         message: $locale === 'nl' ? "Bedankt voor je bericht! We doen ons uiterste best om binnen de 48 uur te reageren." : "Thanks for your message! We'll do our best to get back to you within 48 hours.",
         button: $locale === 'nl' ? "Wil je nog een bericht sturen?" : "Do you want to send another message?",
      }
   }
</script>

<FormBase 
   {translation} {inputItems}
   {title} {submitText}

   submitAction={async (values) => {
      const subject = `Mistmedia.be: Nieuw bericht van ${values.first_name} ${values.last_name} - ${values.subject}`;
      const message = `
         <b><i>Nieuw bericht van:</i></b><br/>
         Voornaam: <b>${values.first_name}</b><br/>
         Achternaam: <b>${values.last_name}</b><br/>
         E-mail: <b>${values.email}</b><br/>
         ${ values.company ? `Bedrijf: <b>${values.company}</b><br/>` : '' }
         <h2>${values.subject}</h2>
         <hr/>
         <p>${values.message}</p>
         <br/>
         <hr/>
         <i>
            Dit bericht werd automatisch verzonden vanaf <a href="https://mistmedia.be">Trixolutions.be</a>.<br/>
            Om te reageren op de verzender, dien je een aparte email naar zijn/haar e-mailadres te sturen.
         </i>`;
         
      // console.log({ subject, message });
      const body = JSON.stringify({ subject, message });
      await fetch('/api/sendMail', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body,
      }).then((res => {
         console.log('Mail sent!')
         return res.json()
      })).catch((err) => {
         console.error('Mail not sent!')
         console.error(err)
      })
   }}
/>