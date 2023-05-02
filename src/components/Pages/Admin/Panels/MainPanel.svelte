<script lang="ts">
   import Card from '@/components/Common/Card/Card.svelte';
   import db from '@/firebase';  
   import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
   import { slide } from 'svelte/transition';
   let openedPanel: 'cases'|'blog' = 'cases';
   import { locale } from '@/stores';


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
                     <Card
                        color="surface_dark"
                        variant="ghost"
                        block
                        direction="row"
                        media="custom"
                        fillHeight
                        mediaClass="w-1/3 h-50"
                        contentClass="w-2/3"
                     >
                        <div slot="media" class="h-full w-full flex items-center justify-start">
                           <img src={item.images.card} alt="" class="w-auto m-0 p-0 h-full object-cover" />
                        </div>
                        <div slot="title" class="w-full flex items-center justify-between">
                           <span class="font-titlemono text-title-xs font-semibold underline">{item.title}</span>
                           <div class="flex-end { item.enabled ? 'bg-success-900' : 'bg-error-900' } text-surface-50 px-1 rounded-md py-0">
                              <span class="unstyled text-sm uppercase font-medium font-titlemono tracking-wide">
                                 {#if item.enabled}Enabled{:else}Disabled{/if}
                              </span>
                           </div>
                        </div>
                        <p class="line-clamp-3">
                           { typeof item.description === 'object' ? item.description[$locale] : item.description}
                        </p>
                     </Card>
                  {/each}
               </div>
            {/await}
         </div>
      {:else if openedPanel === 'blog'}
         <!-- <AdminBlogPanel /> -->
         Blog
      {/if}
   </div>
</div>
			