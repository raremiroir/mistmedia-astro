<script lang="ts">
   import db from "@/firebase";
   import Tag from "@/components/Text/Tags/Tag.svelte";
   import type { DocumentReference } from "firebase/firestore";


   export let categories: {
      id: string;
      enabled: boolean;
   }[] = [];

   // console.log(categories);

   export let tags: string[] = [];
</script>

<!-- Tags -->
   <div class="flex flex-row gap-1">
      {#each categories as category}
         {#if category.enabled}
            <Tag color="bg-primary-500/20 hover:bg-primary-500/60 text-white">
               {category.id}
            </Tag>
         {/if}
      {/each}
   </div>