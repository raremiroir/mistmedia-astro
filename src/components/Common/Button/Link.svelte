<script>
   export let klass = '';
   export let href = '';
   export let target = '';
   export let rel = '';

   export let color = 'text-primary-500 dark:text-primary-400 hover:text-primary-300 dark:hover:text-primary-200';


   const transition = 'transition-all duration-200 ease-out';
   const textClass = 'text-clamp-md lg:text-clamp-lg min-w-fit max-w-[60%] whitespace-nowrap overflow-hidden no-underline'
</script>


<a {href} {target} {rel} 
   class="
      unstyled group relative { transition } { textClass } { color }
      hover:after:bg-primary/25
      after:absolute after:right-2 after:bottom-1
      active:after:left-0 active:after:-bottom-0.5 
      active:after:w-full active:after:h-full
      flex flex-row gap-2 items-center justify-start
      {klass}
      ">
   <slot name="icon" />
   <slot/>
</a>

<style>
   a::after {
      content: "";
      width: calc(100% - 32px);
      height: calc(100% - 20px);
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05)
   }
</style>