<script lang="ts">
   import Button from "@/components/Common/Button/Button.svelte";
   import Input from "@/components/Form/Inputs/Input.svelte";
   import FormRow from "@/components/Form/Utils/FormRow.svelte";
   import { currentModalItem } from "@/stores";
   import { createForm } from "svelte-forms-lib";
   import { fade } from "svelte/transition";
   import * as yup from 'yup';

   export let title: string = 'Edit Case';
   export let submitText: string = 'Update';

   let success = false;

   export let item = { 
      title: '',
      description: {
         nl: '',
         en: ''
      },
   };
   $: item;

   export let submitAction = async (values: any) => {
      console.log(values);
   }

   // Form Creation
   let {
      form, errors, state, isValid,
      isSubmitting, isValidating,
      handleChange, handleSubmit
   } = createForm({
      initialValues: {
         title: $currentModalItem.title,
         description_nl: typeof $currentModalItem.description === 'string' ? $currentModalItem.description : $currentModalItem.description.nl,
         description_en: typeof $currentModalItem.description === 'string' ? '' : $currentModalItem.description.en,
      },
      validationSchema: yup.object().shape({
         title: yup.string().required(),	
         description_nl: yup.string().optional(),
         description_en: yup.string().optional(),
      }),
      onSubmit: async (values) => {
         try {
            await submitAction(values);
            success = true;
         } catch (err) {
            console.error(err);
         }
      }
   });

   // Form reset
   const resetForm = () => {
      $form.title = item.title;
      $form.description_nl = item.description.nl;
      $form.description_en = item.description.en;
      success = false;
   }
</script>

{#if success}

   <div class="alert alert-success" role="alert" transition:fade|local={{duration: 200}}>
      Case updated successfully!
   </div>

{:else if $isSubmitting}
   <div class="" transition:fade|local={{duration: 200}}>
      Submitting...
   </div>
{:else}

   <form
      method="POST"
      novalidate {title} aria-label={title}
      transition:fade|local={{duration: 200}}
      on:submit|preventDefault={handleSubmit}
      class="flex flex-col gap-1 md:gap-2"
   >

      <FormRow>
         <Input
            name="title"
            label="Title"
            bind:value={$form.title}
            bind:errors={$errors.title}
            onChange={handleChange}
            required
         />
      </FormRow>

      <FormRow>
         <Input textarea rows={6 }
            name="description_nl"
            label="Description (NL)"
            bind:value={$form.description_nl}
            bind:errors={$errors.description_nl}
            onChange={handleChange}
         />
      </FormRow>

      <FormRow>
         <Input textarea rows={6 }
            name="description_en"
            label="Description (EN)"
            bind:value={$form.description_en}
            bind:errors={$errors.description_en}
            onChange={handleChange}
         />
      </FormRow>

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