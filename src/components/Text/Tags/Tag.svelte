<script lang="ts">
   import Icon from "@/components/Media/Icon/Icon.svelte";
   import { classes } from "@/consts/style";


   export let icon: string = '';
   export let color: string = 'bg-primary-500 text-white';

   export let element: string = 'span';
   
   let klass = '';
   export { klass as class };

   export let href: string = '';
   export let target: string = '';
   export let rel: string = '';

   const props = element === 'a' ? { href, target, rel } : {};
</script>

<svelte:element 
   this={element} {...props}
   class="
      chip {color} 
      {classes.transition.fast}
      {klass}">

   {#if icon}
      <span>
         <Icon {icon} color="text-inherit" width="w-3" />
      </span>
   {/if}

   <span>
      <slot/>
   </span>

</svelte:element>