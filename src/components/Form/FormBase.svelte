<script lang="ts">

   // Import types
   import type { FormProps } from '@/types/components/form';

   // Import components
   import Alert          from '@/components/Utils/Alert/Alert.svelte';
   import Button         from '@/components/Common/Button/Button.svelte';
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
   import { getYupObject } from '@/lib/yup/schemas';
   import { currentForm } from '@/stores';

   /* ~~-~~ ~- -~ ~~-~~ */
   /* ~~-~~ PROPS ~~-~~ */
   /* ~~-~~ ~- -~ ~~-~~ */
   // export let extraSuccess = true;     // Extra prop for adding success condition from outside

   export const validateTurnstile = async (turnstile_response:any) => {

      const turnstileData = JSON.stringify({ turnstile_response });
      // console.log(turnstileData);
      let success = false;

      await fetch ('/api/turnstile', {
         method: 'POST',
         body: turnstileData,
      }).then(res => {
         success = true
      }).catch(err => {
         console.error(err);
         success = false;
      })

      return success;
   }

   let success = false;
   $: success;

   export let title:string = 'Form Title';
   export let submitText:string = 'Submit';

   export let submitAction = async (values:any) => {
      console.log(values);
   }
   export let inputItems: FormProps = {
      name: { required: true, first_name: '', last_name: '' },
      email: { required: true, label: '' },
      phone: { required: false, label: '' },
      organisation: { required: false, label: '' },
      subject: { required: true, label: '' },
      message: { required: true, label: '' },
      turnstile_response: { required: true, label: '' },
      accept_terms: { required: true, label: '' },
      password: { required: true, label: '' },
   }
   $: inputItems


   // TRANSLATIONS
   export let translation = {
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
   $: translation;

   /* ~~-~~ ~-~~ ~ ~~-~ ~~-~~ */
   /* ~~-~~ DEFINE FORM ~~-~~ */
   /* ~~-~~ ~-~~ ~ ~~-~ ~~-~~ */
   
   // Define values
   let formValues:any = {};
   let initValues:any = {};
   let requiredValues:any = [];

   // Name validation schema
   if (!!inputItems.name) {
      initValues.first_name = '';
      initValues.last_name = '';
      requiredValues.push('first_name', 'last_name');
   }
   // Email validation schema
   if (!!inputItems.email) {
      initValues.email = '';
      requiredValues.push('email');
   }
   // Phone validation schema
   if (!!inputItems.phone) {
      if (inputItems.phone?.required) requiredValues.push('phone');
      initValues.phone = '';
   }
   // Organisation validation schema
   if (!!inputItems.organisation) {
      if (inputItems.organisation.required) requiredValues.push('organisation');
      initValues.organisation = '';
   }
   // Job Title validation schema
   if (!!inputItems.job) {
      if (inputItems.job.required) requiredValues.push('job');
      initValues.job = '';
   }
   // Subject validation schema
   if (!!inputItems.subject) {
      if (inputItems.subject.required) requiredValues.push('subject');
      initValues.subject = '';
   }
   // Message validation schema
   if (!!inputItems.message) {
      if (inputItems.message.required) requiredValues.push('message');
      initValues.message = '';
   }
   // Password validation schema
   if (!!inputItems.password) {
      requiredValues.push('password');
      initValues.password = '';
   }
   // Terms/conditions validation schema
   if (!!inputItems.accept_terms) {
      requiredValues.push('accept_terms');
      initValues.accept_terms = false;
   }

   // Language validation schema
   // @ts-ignore
   formValues.language = yup.string().oneOf(i18next.languages).default(() => i18next.language).required();
   initValues.language = i18next.language;
   $: $form.language = i18next.language;

   // Captcha validation schema
   if (inputItems.turnstile_response) initValues.turnstile_response = "";

   // Define the form schema
   let validationSchema = getYupObject(inputItems, translation.validation);
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

         // if (inputItems.accept_terms && !values.accept_terms) {
         //    alert(translation.validation.terms_error);
         //    return;
         // }
         await validateTurnstile(values.turnstile_response).then(async (res) => {
            // console.log('res', res);
            if (res) {
               await submitAction(values);
               success = true;
            }
         }).catch(err => {
            console.error(err);
         })
      }
   })

   // Form reset
   const resetForm = () => {
      Object.keys($form).forEach(key => {
         if (key !== 'language') $form[key] = initValues[key];
      });
      success = false;
   }

   $: $currentForm = $form;
   // $: console.log($currentForm);

</script>

<!-- <svelte:head>
   <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head> -->

<div class="my-2">
   {#if success}

      <div class="w-full" transition:fade={{ duration: 200 }}>
         <div 
            class="w-fit h-fit mx-auto my-0 p-0"
            on:click={() => resetForm()}
            on:keydown={(e) => { if (e.key === 'Enter' || e.key === 'Space') resetForm() }}>
            <slot name="success">
               <Alert 
                  compact visible 
                  title="{translation.alert.title}" 
                  icon="mdi:email-sent"
                  type="success"
               >
                  {translation.alert.message}
                  <Button 
                     slot="actions" color="success" variant="fill">
                     <span class="capitalize">{translation.alert.button}</span>
                  </Button>
               </Alert>
            </slot>
         </div>
      </div>
   {:else if $isSubmitting}
      Submitting...
   {:else if !success && !$isSubmitting}
      <form 
         method="POST"
         novalidate {title} aria-label={title}
         transition:fade|local={{duration: 200}}
         on:submit={handleSubmit}
         class="flex flex-col gap-1 md:gap-2"
      >
   
         <!-- Name -->
         {#if !!inputItems.name}
            <FormRow>
               <!-- First -->
               <Input 
                  name="first_name"
                  label={inputItems.name.first_name}
                  bind:value={$form.first_name}
                  bind:errors={$errors.first_name}
                  onChange={handleChange}
                  placeholder={translation.placeholder.first_name}
                  required={inputItems.name?.required}
               />
               <!-- Last -->
               <Input 
                  name="last_name"
                  label={inputItems.name.last_name}
                  bind:value={$form.last_name}
                  bind:errors={$errors.last_name}
                  onChange={handleChange}
                  placeholder={translation.placeholder.last_name}
                  required={inputItems.name?.required}
               />
            </FormRow>
         {/if}
   
         <!-- Email/Phone -->
         {#if inputItems.email || inputItems.phone || (inputItems.email && inputItems.phone)}
            <FormRow>
               {#if inputItems.email}
                  <Input 
                     name="email" type="email"
                     label={inputItems.email.label}
                     bind:value={$form.email}
                     bind:errors={$errors.email}
                     onChange={handleChange}
                     placeholder={translation.placeholder.email}
                     required={inputItems.email.required}
                  />
               {/if}
               {#if inputItems.phone}
                  <Input 
                     name="phone"
                     label={inputItems.phone.label}
                     bind:value={$form.phone}
                     bind:errors={$errors.phone}
                     onChange={handleChange}
                     placeholder={translation.placeholder.phone}
                     required={inputItems.phone.required}
                  />
               {/if}
            </FormRow>
         {/if}
   
         <!-- Password -->
         {#if inputItems.password}
            <FormRow>
               <Input 
                  name="password" type="password"
                  label={inputItems.password.label}
                  bind:value={$form.password}
                  bind:errors={$errors.password}
                  onChange={handleChange}
                  placeholder={''}
                  required={inputItems.password.required}
               />
            </FormRow>
         {/if}
   
         <!-- Organisation/Job -->
         {#if inputItems.organisation || inputItems.job || (inputItems.organisation && inputItems.job)}
            <FormRow>
               {#if inputItems.organisation}
                  <Input 
                     name="organisation"
                     label={inputItems.organisation.label}
                     bind:value={$form.organisation}
                     bind:errors={$errors.organisation}
                     onChange={handleChange}
                     placeholder={translation.placeholder.organisation}
                     required={inputItems.organisation.required}
                  />
               {/if}
               {#if inputItems.job}
                  <Input 
                     name="job"
                     label={inputItems.job.label}
                     bind:value={$form.job}
                     bind:errors={$errors.job}
                     onChange={handleChange}
                     placeholder={translation.placeholder.job}
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
                  label={inputItems.subject.label}
                  bind:value={$form.subject}
                  bind:errors={$errors.subject}
                  onChange={handleChange}
                  placeholder={translation.placeholder.subject}
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
                  label={inputItems.message.label}
                  bind:value={$form.message}
                  bind:errors={$errors.message}
                  onChange={handleChange}
                  placeholder={translation.placeholder.message}
                  required={inputItems.message.required}
               />
            </FormRow>
         {/if}
         
         <!-- Accept Terms/Policy -->
         {#if inputItems.accept_terms}
            <FormRow>
               <ToggleCheck 
                  label={inputItems.accept_terms.label}
                  name="accept_terms" 
                  required={inputItems.accept_terms.required} 
                  size="sm" 
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
         <!-- <div class="cf-turnstile" data-sitekey={turnstileSiteKey} data-size="compact" /> -->
   
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