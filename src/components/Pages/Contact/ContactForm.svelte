<script lang="ts">
   import { t } from "i18next";
   
	import type { FormProps } from "@/types/components/form";
   import FormBase from "@/components/Form/FormBase.svelte";
   
   let inputItems: FormProps = {
      name: { 
         required: true, 
         first_name: t('form.input.first_name'),
         last_name: t('form.input.last_name'),
      },
      email: { 
         required: true, 
         label: t('form.input.email'),
      },
      organisation: { 
         required: false, 
         label: t('form.input.organisation'),
      },
      subject: { 
         required: true, 
         label: t('form.input.subject'),
      },
      message: { 
         required: true, 
         label: t('form.input.message'),
         rows: 6, 
      },
      accept_terms: { 
         required: true,
         label: t('form.accept_terms'),
      },
      turnstile_response: { 
         required: true,
         label: t('form.turnstile_response'),
      },
   }
</script>

<FormBase 
   translation={{
      validation: {
         required: t('form.validation.required'),
         only_alpha: t('form.validation.only_alpha'),
         field_too_short: t('form.validation.field_too_short'),
         field_too_long: t('form.validation.field_too_long'),
         email_error: t('form.validation.email_error'),
         phone_error: t('form.validation.phone_error'),
         terms_error: t('form.validation.terms_error'),
         turnstile_error: t('form.validation.captcha_error'),
      },
      placeholder: {
         first_name: t('form.placeholders.first_name'),
         last_name: t('form.placeholders.last_name'),
         email: t('form.placeholders.email'),
         phone: t('form.placeholders.phone'),
         organisation: t('form.placeholders.organisation'),
         job: t('form.placeholders.job'),
         subject: t('form.placeholders.subject'),
         message: t('form.placeholders.message'),
      },
      alert: {
         title: t('form.input.submit.send.success'),
         message: t('form.input.submit.send.message'),
         button: t('form.input.submit.send.another_message'),
      }
   }}

   inputItems={inputItems}
   title={`${t("contact.cta")}`}
   submitText={`${t("form.input.submit.default")}`}

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