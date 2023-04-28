<script lang="ts">
   import LogoIcon from "./LogoIcon.svelte";
   import LogoLettering from "./LogoLettering.svelte";

   export let size: number|'full' = 'full';
   export let color:string = 'fill-surface-900 dark:fill-white'
   export let color2:string = 'fill-surface-400 dark:fill-surface-200'

   let klass = '';
   export { klass as class };

</script>

<div class="flex flex-row items-center justify-start {klass}">
   <div class="w-1/6 ">
      <LogoIcon width={size} dark={color} light={color2} />
   </div>
   <div class="w-5/6">
      <LogoLettering width={size} dark={color}  />
   </div>
</div>