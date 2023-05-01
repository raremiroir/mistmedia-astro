<script lang="ts">

   import Typewriter from "@/components/Utils/Typewriter/Typewriter.svelte";

   import { t } from 'i18next';
   import Title from "@/components/Common/Title/Title.svelte";
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

<Title h1 fake size="xl">
   <span class="flex flex-row items-end !text-title-sm !leading-none !text-surface-700">
      <span class="text-surface-700 dark:text-surface-200">We&nbsp;</span>
      <Typewriter mode="loopRandom">
         {#each texts as text}
           <span class="whitespace-nowrap">{text}</span>
         {/each}
      </Typewriter>
   </span>
</Title>