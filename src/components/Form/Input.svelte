<script lang="ts">
   export let label:string = '';
   export let name:string = '';
   export let placeholder:string = '';
   // export let type:string = 'text';

   let value:string = '';
   $: value;

   const cTransition = 'transition-all duration-200 ease-out';
</script>

<label 
   class="label w-full group relative {cTransition} cursor-text !bg-transparent">
   <input 
      type="text" {name} {placeholder} bind:value
      class="
         input variant-form-material peer
         {cTransition}
         !rounded-lg 
         placeholder:text-transparent focus:placeholder:text-surface-600 dark:focus:placeholder:text-surface-400
         placeholder:italic
         !bg-transparent 
         text-bold text-primary-900 dark:text-primary-100 focus:text-black dark:focus:text-white
         border-2 border-transparent
         focus:border-primary-500 

      " 
   />
   <span class="
         absolute z-2 {cTransition}
         px-1 left-1 py-0 leading-none
         { value ? '-top-[10px] scale-95' : 'top-[10px]'}
         peer-focus:-top-[14px] peer-focus:scale-95
         bg-transparent
         peer-focus:bg-white dark:peer-focus:bg-surface-600
         ">
      {label}
   </span>
</label>