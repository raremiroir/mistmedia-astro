<script lang="ts">
   import Card from '@/components/Common/Card/Card.svelte';
   import db from '@/firebase';  
   import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
   import { slide } from 'svelte/transition';
   let openedPanel: 'cases'|'blog' = 'cases';
   import { currentModal, currentModalItem, locale } from '@/stores';
   import CaseCard from '../Cards/CaseCard.svelte';
   import Modal from '@/components/Common/Modal/Modal.svelte';
   import CaseDetail from '../Cards/CaseDetail.svelte';


   // CASES
   const getCases = async () => {
      try {
         const cases = await db.doc.fetch.collection('portfolio');
         return cases;
      } catch (error) {
         console.log(error);
         return [];
      }
   }
</script>

<div class="w-full grid grid-cols-4 gap-6">
   <div class="col-span-1 border-r-2 border-primary-900-50-token pr-6">
      <ListBox>
         <ListBoxItem bind:group={openedPanel} name="cases" value="cases">Cases</ListBoxItem>
         <ListBoxItem bind:group={openedPanel} name="blog" value="blog">Blog</ListBoxItem>
      </ListBox>
   </div>

   <div class="col-span-3">
      {#if openedPanel === 'cases'}

      <!-- <AdminCasesPanel /> -->
         <div class="flex flex-col gap-2" transition:slide={{axis: 'y', duration: 200}}>
            <span class="font-titlemono text-title-sm font-semibold underline">Cases</span>
            {#await getCases()} 
               <span>Loading...</span>
            {:then cases}
               <div class="w-full flex flex-col gap-4" transition:slide={{axis: 'y', duration: 200}}>
                  {#each cases as item}
                     <CaseCard 
                        images={item.images} bind:title={item.title}
                        enabled={item.enabled} description={item.description}
                     />
                  {/each}
                  <Modal 
                     noTrigger
                     components={{
                        caseDetail: {
                           ref: CaseDetail,
                           props: { item: {
                              title: $currentModalItem.title,
                              description: $currentModalItem.description,
                              // images: $currentModalItem.images
                           } },
                           slot: ``
                        }
                     }}
                     bind:component={$currentModal}
                  />
               </div>
            {/await}
         </div>

      {:else if openedPanel === 'blog'}
         <!-- <AdminBlogPanel /> -->
         Blog
      {/if}
   </div>
</div>
			