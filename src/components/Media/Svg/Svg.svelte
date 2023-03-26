<script lang="ts">
   import MistLogo from './svg-assets/MistLogo.svelte';
   import { 
      AnimationDesignCube, DesignBranding, 
      // DevicesShowcase, 
      MistMediaLogo, 
      WebDesignFullStack, WebDesignFullStackColor, WebDevCodeStack 
   } from './svg-assets';
   import {
      Accessibility, ArrowsGrow, CaretDown, ChatBubble, CorporateBranding,
      CubeIcon, DevicesResponsive, EnvelopeSend, FacebookIcon, GearsTurning, GithubIcon,
      InstagramIcon, LangSwitchIcon, LightningBolt, LightWeight, LinkedInIcon, MistMediaIcon,
      MoonIcon, PortfolioCards, PricingTag, QuestionMarks, Security, SunIcon, TrianglesIcon,
      WebStack
   } from './icon-animated'

   const svgAssets: {[key:string]: any} = {
      AnimationDesignCube, DesignBranding, 
      // DevicesShowcase, 
      MistMediaLogo, WebDesignFullStack, WebDesignFullStackColor, 
      WebDevCodeStack
   }
   const iconAnimationsAssets: {[key:string]: any} = {
      Accessibility, ArrowsGrow, CaretDown, ChatBubble, CorporateBranding,
      CubeIcon, DevicesResponsive, EnvelopeSend, FacebookIcon, GearsTurning, GithubIcon,
      InstagramIcon, LangSwitchIcon, LightningBolt, LightWeight, LinkedInIcon, MistMediaIcon,
      MoonIcon, PortfolioCards, PricingTag, QuestionMarks, Security, SunIcon, TrianglesIcon,
      WebStack
   }

   export let size: number = 150;

   export let logo = false;
   export let svg = '';
   export let animIcon = '';
   
   let klass:string = '';
   export { klass as class }; 

   $: svgComp = svg ? svgAssets[svg] : animIcon ? iconAnimationsAssets[animIcon] : logo ? MistLogo : MistLogo;

   $: props = 
         svg ? {} 
       : animIcon ? {
         size: size,
         dark: 'fill-primary-800 dark:fill-primary-400',
         norm: 'fill-primary-600',
         light: 'fill-primary',
         strokeDark: 'stroke-primary-800',
         bgColor: 'surface',
         darkBgColor: 'surface-500',
         opacity: '70',
       }
       : logo ? {
         width: size,
       } : {}
</script>


<svelte:component this={svgComp} class={klass} {...props}/>