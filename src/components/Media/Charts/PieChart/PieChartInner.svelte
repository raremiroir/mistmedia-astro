<script>
   export let klass = '';
   export let size = 160;
   export let percent = 0;
   export let bgColor = 'fill-primary-100 dark:fill-primary-900';
   export let fgColor = 'stroke-primary/80 dark:stroke-primary-400/80';

   $: viewBox = `0 0 ${size} ${size}`;
   $: radius = size / 2;
   $: halfCircumference = 2 * Math.PI * radius;
   $: pieSize = halfCircumference * (percent / 100);
   $: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
</script>

<div class="relative h-fit w-fit {klass}">
   <svg width={size} height={size} {viewBox}>
      <circle r={radius} cx={radius} cy={radius} class={bgColor} />
      <circle
         r={radius / 2}
         cx={radius} cy={radius}
         class="{bgColor} {fgColor}"
         stroke-width={radius}
         stroke-dasharray={dashArray}
      />
   </svg>
   <div class="
      absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
      bg-surface-100/50 dark:bg-surface-900/50 aspect-square backdrop-blur-sm
      flex items-center leading-[0px] scale-150 p-3 rounded-full">
      <span class="translate-y-0.5 relative flex text-accent-d3 dark:text-accent-l1" style="font-size: {size / 8}px;">
         <slot/>
         <span class="absolute -right-2 -top-0 text-[9px]">%</span>
      </span>
   </div>
</div>