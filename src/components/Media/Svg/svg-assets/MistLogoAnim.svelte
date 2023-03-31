<script>
   export let light = 'fill-[#636363]'
   export let dark = 'fill-[#303030]'
</script>

<svg 
   id="eNyKkRsTt2I1" 
   xmlns="http://www.w3.org/2000/svg" 
   xmlns:xlink="http://www.w3.org/1999/xlink" 
   viewBox="0 0 133 146" 
   shape-rendering="geometricPrecision" text-rendering="geometricPrecision" 
   style="background-color:transparent"
>
   <g transform="translate(0-13.79081)" class="{light}">
      <g id="pillar-left_to" transform="translate(113.000003,194.290806)">
         <path d="M133,84.79081v49h-40v-69h20c11.04999,0,20,8.95001,20,20Z" transform="translate(-113,-99.290806)"/>
      </g>
      <g id="pillar-mid_to" transform="translate(66.500001,214.290806)">
         <path d="M86.5,58.79081v89h-40v-109h20c11.04999,0,20,8.95001,20,20Z" transform="translate(-66.5,-93.290806)"/>
      </g>
      <g id="pillar-right_to" transform="translate(20.000002,232.79081)">
         <path d="M40,33.79081v126h-40c0,0,0-146,0-146h20c11.04999,0,20,8.95001,20,20Z" transform="translate(-20,-86.79081)"/>
      </g>
   </g>
   <g transform="translate(0-13.79081)" mask="url(#triangleMask)">
      <g>
         <g class="{dark}">
            <path d="M133,84.79081v49h-40v-69h20c11.04999,0,20,8.95001,20,20Z"/>
            <path d="M86.5,58.79081v89h-40v-109h20c11.04999,0,20,8.95001,20,20Z"/>
            <path d="M40,33.79081v126h-40c0,0,0-146,0-146h20c11.04999,0,20,8.95001,20,20Z"/>
         </g>
      </g>
      <mask id="triangleMask">
         <g id="triangle-clip_to" transform="translate(-72.725037,79.895409)">
            <polygon points="146.54992,80.38191 0,0 0,159.79081 146.54992,80.38191" transform="translate(-73.274963,-79.895409)" fill="#fff" stroke-width="0"/>
         </g>
      </mask>
   </g>
</svg>

<style>
   #pillar-left_to { animation: pillar-left_to__to 5000ms linear 1 normal forwards }
      @keyframes pillar-left_to__to { 
         0% {transform: translate(113.000003px,194.290806px)} 
         30% {transform: translate(113.000003px,194.290806px);animation-timing-function: cubic-bezier(0.215,0.61,0.355,1)} 
         46.666667% {transform: translate(113px,99.290806px)} 
         100% {transform: translate(113px,99.290806px)}
      } 
   #pillar-mid_to { animation: pillar-mid_to__to 5000ms linear 1 normal forwards }
   @keyframes pillar-mid_to__to { 
      0% {transform: translate(66.500001px,214.290806px)} 
      16.666667% {transform: translate(66.500001px,214.290806px);animation-timing-function: cubic-bezier(0.215,0.61,0.355,1)} 
      33.333333% {transform: translate(66.5px,93.290806px)} 
      100% {transform: translate(66.5px,93.290806px)}
   } 
   #pillar-right_to { animation: pillar-right_to__to 5000ms linear 1 normal forwards }
   @keyframes pillar-right_to__to { 
      0% {transform: translate(20.000002px,232.79081px)} 
      3.333333% {transform: translate(20.000002px,232.79081px);animation-timing-function: cubic-bezier(0.215,0.61,0.355,1)} 
      20% {transform: translate(20px,86.79081px)} 
      100% {transform: translate(20px,86.79081px)}} 
   #triangle-clip_to { animation: triangle-clip_to__to 5000ms linear 1 normal forwards }
   @keyframes triangle-clip_to__to { 
      0% {transform: translate(-72.725037px,79.895409px)} 
      43.333333% {transform: translate(-72.725037px,79.895409px);animation-timing-function: cubic-bezier(0.215,0.61,0.355,1)} 
      66.666667% {transform: translate(73.274963px,79.895409px)} 
      100% {transform: translate(73.274963px,79.895409px)}
   }
</style>