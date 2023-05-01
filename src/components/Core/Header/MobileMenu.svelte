<script lang="ts">
   import type { NavItem } from "@/types/components/header";
   import { openMobile } from "@/stores";
   import { fade } from "svelte/transition";
   import Menu from "@/components/Common/Menu/Menu.svelte";
   import HeaderLink from "./HeaderLink.svelte";
   import LightSwitch from "./LightSwitch.svelte";

   export let navItems: NavItem[] = [];
   export let pathname: string = "";
   $: pathname;

   let scrWidth: number = 0;
   $: if (scrWidth >= 992) $openMobile = false;

</script>

<svelte:window bind:innerWidth={scrWidth} />

{#if $openMobile}
   <div
      transition:fade={{ duration: 200 }} 
      class="fixed flex flex-col justify-between items-center lg:hidden w-screen h-screen inset-0 z-40 bg-white dark:bg-slate-900 bg-opacity-40 backdrop-blur-md">

      <div class="">
         
      </div>

      <nav class="flex flex-col w-full items-center justify-center">
         <ul class="flex flex-col w-full items-center justify-center gap-2">
            {#each navItems as item}
               {#if item.items}
                  <Menu id="nav_menu_mobile" event="click">
                     <span slot="trigger">{item.label}</span>
                     <div class="flex flex-col gap-2">

                        {#each item.items as dropdownSection}
                           <div class="flex flex-col gap-1">
                              <span class="text-md uppercase font-black text-primary-800 dark:text-primary-500">{dropdownSection.header}</span>
                              <div>
                                 {#each dropdownSection.items as dropdownItem}
                                    <HeaderLink size="xl" currentPath={pathname} href={dropdownItem.href} textStart>
                                       {dropdownItem.label}
                                    </HeaderLink>
                                 {/each}
                              </div>
                           </div>

                        {/each}

                     </div>
                  </Menu>
               {:else}
                  <HeaderLink client:load currentPath={pathname} href={item.href}>
                     {item.label}
                  </HeaderLink>
               {/if}
            {/each}
         </ul>
      </nav>

      <div class="mb-6 w-full flex justify-around items-center">
         <div class="flex flex-col items-center justify-center gap-1">
            <span class="text-base font-semibold font-titlemono uppercase">theme</span>
            <LightSwitch />
         </div>
         <div class="flex flex-col items-center justify-center gap-1">
            <span class="text-base font-semibold font-titlemono uppercase">language</span>
            <slot name="langselect"/>
         </div>
      </div>
   </div>
{/if}