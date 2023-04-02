<script lang="ts">
   import Heading from "@comp/Common/Heading/Heading.svelte";
   import TypeWriter from "svelte-typewriter";

   import { t } from 'i18next';
   export let lang:string;

   $: texts = 
      lang === 'en' ? 
      [
         "Design Graphics",
         "Design Websites",
         "Develop Websites",
         "Visualise 3D Models",
         "Animate 3D Models",
         "Create Multimedia",
         "Create Websites",
         "Deploy Websites",
         "Deliver Graphics",
         "Optimise Websites",
         "Promote Websites",
         "Design Logos",
         "Love Working Together"
      ]
      : lang === 'nl' ?
      [
         "Ontwerpen Graphics",
         "Ontwerpen Websites",
         "Ontwikkelen Websites",
         "Visualiseren 3D Modellen",
         "Animeren 3D Modellen",
         "Creëren Multimedia",
         "Creëren Websites",
         "Lanceren Websites",
         "Leveren Graphics",
         "Optimaliseren Websites",
         "Promoten Websites",
         "Ontwerpen Logos",
         "Werken Graag Samen"
      ] : [];
</script>

<Heading type="h1" size="xl">
   <span>Mist Media</span>
   <span class="flex flex-row items-end !text-title-lg">
      <span>We&nbsp;</span>
      <TypeWriter mode="loopRandom" element="span" interval={80} wordInterval={1500} unwriteInterval={50}>
         {#each texts as text}
           <span class="whitespace-nowrap">{text}</span>
         {/each}
      </TypeWriter>
   </span>
</Heading>
