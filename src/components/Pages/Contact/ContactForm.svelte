<script lang="ts">
   import { t } from "i18next";
   
	import type { ChosenInputs } from "@/types/components/form";
   import FormBase from "@/components/Form/FormBase.svelte";

   import { mailToAdmin } from "@/utils/mail";

   let inputItems: ChosenInputs = {
      name: { enabled: true, required: true, },
      email: { enabled: true, required: true, },
      organisation: { enabled: true, required: false, },
      subject: { enabled: true, required: true, },
      message: { enabled: true, required: true, rows: 6, },
      accept_terms: { enabled: true, required: true },
      turnstile_response: { enabled: true, required: true },
   }


   $: translations = {
      name: {
         first_name: t('form.input.first_name'),
         last_name: t('form.input.last_name'),
      },
      email: t('form.input.email'),
      phone: t('form.input.phone'),
      organisation: t('form.input.organisation'),
      job: t('form.input.job'),
      subject: t('form.input.subject'),
      message: t('form.input.message'),
      accept_terms: t('form.accept_terms'),
      turnstile_response: t('form.turnstile_response'),
      password: '',
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
   } 
</script>

<FormBase 
   {translations}
   {inputItems}
   title={`${t("contact.cta")}`}
   submitText={`${t("form.input.submit.default")}`}
   submitAction={(values) => {

      const subject = `Trixolutions.be: Nieuw bericht van ${values.first_name} ${values.last_name} - ${values.subject}`;
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
            Dit bericht werd automatisch verzonden vanaf <a href="https://trixolutions.be">Trixolutions.be</a>.<br/>
            Om te reageren op de verzender, dien je een aparte email naar zijn/haar e-mailadres te sturen.
         </i>`;
      // mailToAdmin({ subject, message });
      console.log({ subject, message });
   }}
/>