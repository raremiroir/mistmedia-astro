<script lang="ts">
   import { Turnstile } from 'svelte-turnstile'
   import type { TurnstileSize, TurnstileTheme } from 'svelte-turnstile'
   import type { TurnstileProps } from 'svelte-turnstile/dist/Turnstile.svelte';

   import ValidationError from '../Utils/ValidationError.svelte';
   

   const sitekey = import.meta.env.PUBLIC_TS_SITEKEY;
   import { turnstile as dummyKeys } from '@/consts/dummy';
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

<div class="flex flex-col gap-1 items-start justify-center">
   {#if description}
      <small>{description}</small>
   {/if}
   {#if errors}
      <ValidationError error={errors}/>
   {/if}
   <Turnstile 
      on:turnstile-callback={(e) => {
         turnstileResponse = e.detail.token
      }}
      siteKey="{key}"
      {size} {action} {theme} {retry}
      {forms} formsField={name}
   />
</div>