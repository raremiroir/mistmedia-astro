<script lang="ts">

   import { openMobile } from "@/stores";
	import { classes } from "@/consts/style";

   export let scrolled: boolean = false;
   $: scrolled;

   let klass:string = '';
   export { klass as class };
</script>


<div class="lg:hidden mr-8 mt-0.5 sm:mt-1 md:mt-2 isolate fixed top-0 right-0 z-50 {klass}">
   <input 
      bind:checked={$openMobile}
      type="checkbox" 
      class="toggler peer absolute top-2.5 -right-4 cursor-pointer opacity-0 z-2 h-10 w-10">
   <div class="
         hamburger absolute top-2.5 -right-6 h-10 w-10 p-0 {classes.flex.center}
         peer-checked:prose-p:bg-transparent
         peer-checked:prose-p:before:top-0 peer-checked:prose-p:before:rotate-45
         peer-checked:prose-p:after:top-0 peer-checked:prose-p:after:rotate-[135deg]
   ">
      <p class="
            relative { $openMobile ? 'bg-error-900 dark:bg-error-100' : 'bg-surface-800 dark:bg-surface-50'} top-0 left-0 w-3/5 h-[3px] rounded-full transition-all duration-300 ease-linear
            before:content-[''] before:absolute { $openMobile ? 'before:bg-error-900 dark:before:bg-error-100' : 'before:bg-surface-800 dark:before:bg-surface-50'} before:w-full before:rounded-full before:h-[3px] before:-top-2 before:transition-all before:duration-300 before:ease-linear
            after:content-[''] after:absolute { $openMobile ? 'after:bg-error-900 dark:after:bg-error-100' : 'after:bg-surface-800 dark:after:bg-surface-50'} after:w-full after:rounded-full after:h-[3px] after:top-2 after:transition-all after:duration-300 after:ease-linear
      "/>
   </div>
</div>
