<script>
   import { tweened } from 'svelte/motion'
   import PieChartInner from './PieChartInner.svelte';
   import { animationTrigger } from '@stores/index';

   export let klass = '';
   export let size = 160;
   export let percentage = 80;
   export let speed = 12

   let percent = 0;
   let otherPercent = 0;
   
   const store = tweened(0, {duration: 1000});
   // const store = spring(0, {stiffness: 0.3, damping: 0.3});
   $: store.set(percent);

   $: if ($animationTrigger) {
      percent = percentage;
      countPercentage()
   } else {
      percent = 0
      otherPercent = 0
   }

   const countPercentage = () => {
      let interval = setInterval(function(){
            if (otherPercent === percentage) {clearInterval(interval)}
            else {otherPercent += 1}
            console.log(otherPercent);
         }, speed)
   }

</script>

<PieChartInner {size} percent={$store} {klass}>
   <span>{otherPercent}</span>   
</PieChartInner>