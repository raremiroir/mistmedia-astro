<script lang="ts" context="module">
   const siteUrl = import.meta.env.PUBLIC_SITE_URL;

   export const validateTurnstile = async (turnstile_response:any) => {

      const turnstileData = JSON.stringify({ turnstile_response });
      let success = false;

      await fetch ('/api/turnstile', {
         method: 'POST',
         body: turnstileData,
         headers: {
            'Content-Type': 'application/json',
         }
      }).then(res => {
         success = true
      }).catch(err => {
         console.error(err);
         success = false;
      })

      return success;
   }
</script>

<script lang="ts">
   // Import the environment variables
   const siteUrl = import.meta.env.PUBLIC_SITE_URL;
   const turnstileSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;

   // Import types
   import type { ChosenInputs } from '@/types/components/form';

   // Import components
   import Alert          from '@comp/Utils/Alert/Alert.svelte';
   import Button         from '@comp/Common/Button/Button.svelte';
   import FormRow        from './Utils/FormRow.svelte';
   import ToggleCheck    from './Inputs/ToggleCheck.svelte';
   import Turnstile      from './Inputs/Turnstile.svelte';
   import Input          from './Inputs/Input.svelte';

   // Import utils
   import { fade }       from 'svelte/transition';
   import * as yup       from 'yup'
   import { createForm } from 'svelte-forms-lib'
   // Import i18n
   import i18next, { t } from 'i18next';

   /* ~~-~~ ~- -~ ~~-~~ */
   /* ~~-~~ PROPS ~~-~~ */
   /* ~~-~~ ~- -~ ~~-~~ */
   export let extraSuccess = true;     // Extra prop for adding success condition from outside
   $: extraSuccess;

   let success = false;

   export let title:string = 'Form Title';
   export let submitText:string = 'Submit';

   export let submitAction = (values:any) => {
      console.log(values);
   }
   export let inputItems: ChosenInputs = {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true },
      phone: { enabled: true, required: false },
      organisation: { enabled: true, required: false },
      subject: { enabled: true, required: true },
      message: { enabled: true, required: true, rows: 6 },
      turnstile_response: { enabled: true, required: true },
      accept_terms: { enabled: true, required: true },
   }
   $: inputItems


   // TRANSLATIONS
   export let translations = {
      name: {
         first_name: 'First Name',
         last_name: 'Last Name',
      },
      email: 'Email',
      phone: 'Phone',
      organisation: 'Organisation',
      job: 'Job Title',
      subject: 'Subject',
      message: 'Message',
      accept_terms: 'Accept Terms',
      turnstile_response: 'Turnstile Response',
      validation: {
         required: 'is required',
         only_alpha: 'can only contain letters',
         field_too_short: 'is too short',
         field_too_long: 'is too long',
         email_error: 'is not a valid email',
         phone_error: 'is not a valid phone number',
         terms_error: 'You must accept the terms and conditions',
         turnstile_error: "Just to prove you're not a robot...",
      },
      placeholder: {
         first_name: 'e.g. John',
         last_name: 'e.g. Smith',
         email: 'e.g. john.smith@mail.com',
         phone: 'e.g. 0123456789',
         organisation: 'e.g. Company Ltd.',
         job: 'e.g. CEO',
         subject: 'e.g. Sales Enquiry',
         message: 'Your message here...',
      },
      alert: {
         title: 'Message Sent!',
         message: 'Thank you for your message, we will get back to you as soon as possible.',
         button: 'Send another message?',
      }
   }
   $: translations;

   /* ~~-~~ ~-~~ ~ ~~-~ ~~-~~ */
   /* ~~-~~ DEFINE FORM ~~-~~ */
   /* ~~-~~ ~-~~ ~ ~~-~ ~~-~~ */
   
   // Define values
   let formValues:any = {};
   let initValues:any = {};
   let requiredValues:any = [];

   // Name validation schema
   if (inputItems.name?.enabled) {
      formValues.first_name = yup.string()
         .required(`${translations.name.first_name} ${translations.validation.required}`)
         .matches(/^[A-Za-z]+(?:['-][A-Za-z]+)*$/, `${translations.name.first_name} ${translations.validation.only_alpha}`)
         .min(2, `${translations.name.first_name} ${translations.validation.field_too_short}`)
         .max(50, `${translations.name.first_name} ${translations.validation.field_too_long}`);
      formValues.last_name = yup.string()
         .required(`${translations.name.last_name} ${translations.validation.required}`)
         .matches(/^[A-Za-z]+(?:['-][A-Za-z]+)*$/, `${translations.name.last_name} ${translations.validation.only_alpha}`)
         .min(2, `${translations.name.last_name} ${translations.validation.field_too_short}`)
         .max(50, `${translations.name.last_name} ${translations.validation.field_too_long}`);
      
      initValues.first_name = '';
      initValues.last_name = '';
      requiredValues.push('first_name', 'last_name');
   }
   // Email validation schema
   if (inputItems.email?.enabled) {
      formValues.email = yup.string()
        .required(`${translations.email} ${translations.validation.required}`)
        .email(`${translations.validation.email_error}`);
      
      initValues.email = '';
      requiredValues.push('email');
   }
   // Phone validation schema
   if (inputItems.phone?.enabled) {
      formValues.phone = yup.string()
         .matches(/^((\+|00)\d{1,3})?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}|^$/, `${translations.validation.phone_error}`)
      if (inputItems.phone?.required) {
         formValues.phone = formValues.phone.required(`${translations.phone} ${translations.validation.required}`);
         requiredValues.push('phone');
      } else {
         formValues.phone = formValues.phone.optional();
      }
      initValues.phon = '';
   }
   // Organisation validation schema
   if (inputItems.organisation?.enabled) {
      formValues.organisation = yup.string()
         .max(50, `${translations.organisation} ${translations.validation.field_too_long}`);
      if (inputItems.organisation.required) {
         formValues.organisation = formValues.organisation
            .min(2, `${translations.organisation} ${translations.validation.field_too_short}`)
            .required(`${translations.organisation} ${translations.validation.required}`)
         requiredValues.push('organisation');
      } else {
         formValues.organisation = formValues.organisation.optional();
      }
      initValues.organisation = '';
   }
   // Job Title validation schema
   if (inputItems.job?.enabled) {
      formValues.job = yup.string()
         .max(50, `${translations.job} ${translations.validation.field_too_long}`);
      if (inputItems.job.required) {
         formValues.job = formValues.job
            .min(2, `${translations.job} ${translations.validation.field_too_short}`)
            .required(`${translations.job} ${translations.validation.required}`);
         requiredValues.push('job');
      } else {
         formValues.job = formValues.job.optional();
      }
      initValues.job = '';
   }
   // Subject validation schema
   if (inputItems.subject?.enabled) {
      formValues.subject = yup.string()
         .min(4, `${translations.subject} ${translations.validation.field_too_short}`)
         .max(50, `${translations.subject} ${translations.validation.field_too_long}`);
      if (inputItems.subject?.required) {
         formValues.subject = formValues.subject.required(`${translations.subject} ${translations.validation.required}`);
         requiredValues.push('subject');
      } else {
         formValues.subject = formValues.subject.optional();
      }
      
      initValues.subject = '';
   }
   // Message validation schema
   if (inputItems.message?.enabled) {
      formValues.message = yup.string()
         .min(5, `${translations.message} ${translations.validation.field_too_short}`)
         .max(1000, `${translations.message} ${translations.validation.field_too_long}`);
      if (inputItems.message?.required) {
         formValues.message = formValues.message.required(`${translations.message} ${translations.validation.required}`);
         requiredValues.push('message');
      } else {
         formValues.message = formValues.message.optional();
      }
      
      initValues.message = '';
   }

   // Terms/conditions validation schema
   if (inputItems.accept_terms?.enabled) {
      formValues.accept_terms = yup.boolean()
         .oneOf([true], `${translations.validation.terms_error}`);
      initValues.accept_terms = false;
      requiredValues.push('accept_terms');
   }

   // Language validation schema
   // @ts-ignore
   formValues.language = yup.string().oneOf(['nl', 'fr', 'en']).default(() => i18next.language).required();
   initValues.language = i18next.language;
   $: $form.language = i18next.language;

   // Captcha validation schema
   if (inputItems.turnstile_response?.enabled) {
      formValues.turnstile_response = yup.string()
         .matches(/^.*\S.*$/, `${translations.validation.turnstile_error}`);
      initValues.turnstile_response = "";
   }

   // Define the form schema
   let validationSchema = yup.object().shape({});
   Object.keys(formValues).forEach((key) => {
      validationSchema = validationSchema.shape({
         [key]: formValues[key]
      });
   })
   validationSchema = validationSchema.shape({ language: formValues.language });

   // Form creation
   let {
      form, errors, state, isValid,
      isSubmitting, isValidating,
      handleChange, handleSubmit,
   } = createForm({
      initialValues: initValues,
      validationSchema: validationSchema,
      onSubmit: async (values) => {
         try {
            const res = await validateTurnstile(values.turnstile_response);
            if (res) {
               submitAction(values);
               success = true;
            } else {
               success = false;
            }
         } catch (error) {
            console.log(error);
            success = false;
         }
      }
   })

   // Form reset
   const resetForm = () => {
      Object.keys($form).forEach(key => {
         if (key !== 'language') $form[key] = initValues[key];
      });
      success = false;
   }

</script>

<svelte:head>
   <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<div class="my-2">
   {#if success && extraSuccess}
   
      <div class="w-full" transition:fade|local={{ duration: 200 }}>
         <div 
            class="w-fit h-fit mx-auto my-0 p-0"
            on:click={() => resetForm()}
            on:keydown={(e) => { if (e.key === 'Enter' || e.key === 'Space') resetForm() }}>
               <slot name="success">
                  <Alert title="{translations.alert.title}" icon="mdi:email-sent">
                     {translations.alert.message}
                     <Button slot="actions" color="success" variant="fill">
                        <span class="capitalize">{translations.alert.button}</span>
                     </Button>
                  </Alert>
               </slot>
         </div>
      </div>
   {:else}
      <form 
         novalidate {title} aria-label={title}
         transition:fade|local={{duration: 200}}
         on:submit={handleSubmit}
         class="flex flex-col gap-1 md:gap-2"
      >
   
         <!-- Name -->
         <FormRow>
            <!-- First -->
            <Input 
               name="first_name"
               label={translations.name.first_name}
               bind:value={$form.first_name}
               bind:errors={$errors.first_name}
               onChange={handleChange}
               placeholder={translations.placeholder.first_name}
               required={inputItems.name?.required}
            />
            <!-- Last -->
            <Input 
               name="last_name"
               label={translations.name.last_name}
               bind:value={$form.last_name}
               bind:errors={$errors.last_name}
               onChange={handleChange}
               placeholder={translations.placeholder.last_name}
               required={inputItems.name?.required}
            />
         </FormRow>
   
         <!-- Email/Phone -->
         {#if inputItems.email || inputItems.phone || (inputItems.email && inputItems.phone)}
            <FormRow>
               {#if inputItems.email}
                  <Input 
                     name="email" type="email"
                     label={translations.email}
                     bind:value={$form.email}
                     bind:errors={$errors.email}
                     onChange={handleChange}
                     placeholder={translations.placeholder.email}
                     required={inputItems.email.required}
                  />
               {/if}
               {#if inputItems.phone}
                  <Input 
                     name="phone"
                     label={translations.phone}
                     bind:value={$form.phone}
                     bind:errors={$errors.phone}
                     onChange={handleChange}
                     placeholder={translations.placeholder.phone}
                     required={inputItems.phone.required}
                  />
               {/if}
            </FormRow>
         {/if}
   
         <!-- Orgaisation/Job -->
         {#if inputItems.organisation || inputItems.job || (inputItems.organisation && inputItems.job)}
            <FormRow>
               {#if inputItems.organisation}
                  <Input 
                     name="organisation"
                     label={translations.organisation}
                     bind:value={$form.organisation}
                     bind:errors={$errors.organisation}
                     onChange={handleChange}
                     placeholder={translations.placeholder.organisation}
                     required={inputItems.organisation.required}
                  />
               {/if}
               {#if inputItems.job}
                  <Input 
                     name="job"
                     label={translations.job}
                     bind:value={$form.job}
                     bind:errors={$errors.job}
                     onChange={handleChange}
                     placeholder={translations.placeholder.job}
                     required={inputItems.job.required}
                  />
               {/if}
            </FormRow>
         {/if}
   
         <!-- Subject -->
         {#if inputItems.subject}
            <FormRow>
               <Input 
                  name="subject"
                  label={translations.subject}
                  bind:value={$form.subject}
                  bind:errors={$errors.subject}
                  onChange={handleChange}
                  placeholder={translations.placeholder.subject}
                  required={inputItems.subject.required}
               />
            </FormRow>
         {/if}
         <!-- Message -->
         {#if inputItems.message}
            <FormRow>
               <Input 
                  name="message" textarea noResize 
                  rows={inputItems.message.rows?? 8}
                  label={translations.message}
                  bind:value={$form.message}
                  bind:errors={$errors.message}
                  onChange={handleChange}
                  placeholder={translations.placeholder.message}
                  required={inputItems.message.required}
               />
            </FormRow>
         {/if}
         
         <!-- Accept Terms/Policy -->
         {#if inputItems.accept_terms}
            <FormRow>
               <ToggleCheck 
                  label="I have read and accept the privacy policy and terms of service." 
                  name="accept_terms" 
                  required size="sm"
               />
            </FormRow>
         {/if}
   
          <!-- Turnstile Validation -->
          <FormRow>
            <Turnstile 
               on:change={handleChange}
               bind:errors={$errors.turnstile_response} 
               bind:turnstileResponse={$form.turnstile_response} />
         </FormRow>
         <div class="cf-turnstile" data-sitekey={turnstileSiteKey} data-size="compact" />
   
         <!-- Errors -->
         <slot name="errors" />
   
         <div class="flex flex-row w-full justify-between items-center mt-4">
            <Button 
               type="submit" ariaLabel={submitText}
               variant="fill" color="success" size="lg">
               {submitText}
            </Button>
         </div>
   
      </form>
   {/if}
</div>