<script lang="ts">
   import { Turnstile } from 'svelte-turnstile'
   import type { TurnstileSize, TurnstileTheme } from 'svelte-turnstile'
   import type { TurnstileProps } from 'svelte-turnstile/dist/Turnstile.svelte';

   import ValidationError from '../Utils/ValidationError.svelte';
   

   const sitekey = import.meta.env.PUBLIC_TS_SITEKEY;
   import { turnstile as dummyKeys } from '@/consts/dummy';
   import { classes } from '@/consts/style';
   const key = dummyKeys.public.pass; // sitekey in production

   export let turnstileResponse: string | undefined;


   // String that can be used to differentiate widgets, returned on validation
   export let action = ''

   // Size of the widget (normal | compact)
   export let size:TurnstileSize = 'normal'
   // Theme of the widget (light | dark | auto)
   export let theme:TurnstileTheme = 'light'

   // if true the response token will be a property on the form data 
   export let forms = true;
   // the name of the input which will appear on the form data
   export let name = 'turnstile_response'

   // should the widget automatically retry to obtain a token if it did not succeed (auto | never)
   export let retry:TurnstileProps['retry'] = 'auto'

   export let description = '';
   export let errors:any = [];
</script>

<div class="
      flex flex-col gap-1 items-start justify-center 
      {classes.transition.default}">
   {#if description}
      <small>{description}</small>
   {/if}
   {#if errors}
      <ValidationError error={errors}/>
   {/if}
   <div class="
         p-0 border-2 border-primary-500-400-token rounded-md 
         overflow-hidden mix-blend-multiply dark:mix-blend-luminosity
         opacity-70 hover:opacity-100
         {classes.transition.default}">
      <Turnstile 
         on:turnstile-callback={(e) => {
            turnstileResponse = e.detail.token
         }}
         siteKey="{key}"
         {size} {action} {theme} {retry}
         {forms} formsField={name}
      />
   </div>
</div>