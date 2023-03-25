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
         dark: 'fill-accent-d3 dark:fill-accent-l2',
         norm: 'fill-accent-d1',
         light: 'fill-accent',
         strokeDark: 'stroke-accent-d3',
         bgColor: 'primary',
         darkBgColor: 'secondary-d1',
         opacity: '70',
       }
       : logo ? {
         width: size,
       } : {}
</script>


<svelte:component this={svgComp} class={klass} {...props}/>