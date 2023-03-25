<script lang="ts">
   import { MistLogo } from './svg-assets'

   const svgAssets: {[key:string]: any} = {
      MistLogo
   }

   export let name: string = 'MistLogo'
   export let width: number = 50;

   let klass:string = '';
   export { klass as class }; 

   $: svg = svgAssets[name]
</script>


<svelte:component this={svg} class={klass} {width}/>