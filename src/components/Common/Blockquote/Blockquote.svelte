<script>
   export let klass = ''
</script>

<blockquote 
   class="
      border-l-2 !border-primary-600/80
      bg-primary/5 font-semibold
      blockQuoteSize my-1 px-4 mx-4 py-1
      text-surface-900 dark:text-surface-50
      flex flex-col gap-2
      {klass}
      ">
   <slot>Blockquote</slot>
   <span class="font-light quoteAuthorSize text-surface-700 dark:text-surface-200">
      ~ <slot name="author">Someone</slot>
   </span>
</blockquote>

<style>
   .blockQuoteSize{
      font-size: clamp(12px, 2vw, 16px)
   }
   .quoteAuthorSize{
      font-size: clamp(10px, 2vw, 14px)
   }
</style>