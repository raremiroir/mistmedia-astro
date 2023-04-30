<script lang="ts">
   import Title from '../../Common/Title/Title.svelte';

   export let title:string;
   export let open:boolean = false;
   export let icon = false;
   export let key = 0;

   const transition = 'transition-all duration-300 ease-in-out'
</script>


<div 
   role="heading" 
   aria-level={3}
   class="" 
>
   <div 
      id="accordeon-item-{key}"
      role="button" 
      aria-expanded="{open}"
      aria-controls="accordeon-item-{key}"
      class="w-full flex justify-between items-center"
   >
      <div class="w-full flex justify-start gap-4 items-center">
         {#if icon}
            <div class="w-8 h-8 text-surface-900 group-hover:text-primary-800 dark:text-surface-50 dark:group-hover:text-primary-400 {transition}">
               <slot name="icon"/>
            </div>
         {/if}
         <Title 
            fake h4 size="xs"
            color="text-surface-900 dark:text-surface-50 group-hover:text-primary-900 dark:group-hover:text-primary-400 {transition}">
            {title}
         </Title>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" 
            class="
               w-8 h-8 {transition} 
               { open ? 'rotate-0' : 'rotate-180' } 
               text-surface-900 group-hover:text-primary-800 
               dark:text-surface-50 dark:group-hover:text-primary-400" 
            viewBox="0 0 256 256">
         <g fill="currentColor">
            <path d="M208 160H48l80-80Z" opacity=".2"/>
            <path d="m213.66 154.34l-80-80a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 168h160a8 8 0 0 0 5.66-13.66ZM67.31 152L128 91.31L188.69 152Z"/>
         </g>
      </svg>
   </div>
</div>