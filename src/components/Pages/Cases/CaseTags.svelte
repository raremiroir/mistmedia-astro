<script lang="ts">
   import { t } from 'i18next'
   import db from "@/firebase";
   import Tag from "@/components/Text/Tags/Tag.svelte";
   import type { DocumentData, DocumentReference } from "firebase/firestore";

   import { locale } from "@/stores";

   // export let categories: DocumentData[];
   // let categoriesData: {
   //    id: string;
   //    enabled: boolean;
   // }[] = categories.map((category) => {
   //    return {
   //       id: category.id,
   //       enabled: category.enabled,
   //    };
   // });

   export let clientTag: string;
   export let solutionTag: string;

   export let tags: DocumentData[] = [];
   // console.log(tags);

   const tagClass = '!text-base backdrop-blur-md'

   const tagColorClient = 'variant-soft bg-secondary-700/40 dark:bg-secondary-700/40 text-secondary-100 dark:text-secondary-100'
   const tagColorSolution = 'variant-soft bg-primary-700/40 dark:bg-primary-700/40 !text-primary-100 dark:!text-primary-100'
   const tagColor = 'variant-soft bg-slate-100/40 dark:bg-slate-800/40 text-slate-700 dark:text-slate-100'
</script>

<!-- Tags -->
   <div class="flex flex-col md:flex-row gap-1">
      <div class="flex flex-row gap-1">
         <Tag class="{tagClass}" color="{tagColorClient}">
            {clientTag}
         </Tag>
         <Tag
            class="{tagClass}"
            color="{tagColorSolution}"
            element="a" href="/solutions/{solutionTag}"
         >
            {t(`services:solutions.${solutionTag}.title_short`)}
         </Tag>
      </div>
      <div class="flex flex-row gap-1">
         {#each tags as tag}
            <Tag class="{tagClass}" color="{tagColor}">
               {tag.title[$locale]}
            </Tag>
         {/each}
      </div>
   </div>