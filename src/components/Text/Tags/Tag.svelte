<script lang="ts">
   import Icon from "@/components/Media/Icon/Icon.svelte";


   export let icon: string = '';
   export let color: string = 'bg-primary-500 text-white';
   
   let klass = '';
   export { klass as class };
</script>

<span class="
   chip {color}
   {klass}">

   {#if icon}
      <span>
         <Icon {icon} color="text-inherit" width="w-3" />
      </span>
   {/if}

   <span>
      <slot/>
   </span>

</span>