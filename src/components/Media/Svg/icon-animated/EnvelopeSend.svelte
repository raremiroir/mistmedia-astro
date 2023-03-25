<script>
   export let size = 100
   export let dark = 'fill-accent-d3'
   export let norm = 'fill-accent-d1'
   export let transition = 'transition-all duration-500 ease-in-out'
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="bg-transparent group">
   <g id="Envelope">
      
      <g id="Flap" 
         class="
            {transition} opacity-70 origin-center
            group-hover:-scale-y-130
            scale-[210%] group-hover:scale-120 
            -translate-y-[34%] group-hover:-translate-y-[4%]">
         <path
            id="Light_2"
            d="M81 64.9614L62.1236 84.6673C61.0013 85.8389 59.1817 85.8389 58.0595 84.6673L39.183 64.9614C39.1448 64.9771 39.1068 64.9933 39.069 65.01C39.642 64.757 40.272 64.617 40.9333 64.617H79.2497C79.8674 64.617 80.4578 64.7391 81 64.9614Z"
            class="{norm}"
         />
         <path
            id="Dark_2"
            d="M80.9085 61L62.032 80.7059C60.9098 81.8774 59.0902 81.8774 57.968 80.7059L39.0915 61C37.8542 61.5073 36.8681 62.5367 36.3821 63.8284L55.2586 83.5343C57.8772 86.268 62.1228 86.268 64.7414 83.5343L83.6179 63.8284C83.1319 62.5367 82.1458 61.5073 80.9085 61Z"
            class="{dark}"
         />
      </g>

      <g id="Paper" 
         class="
            {transition} origin-center
            scale-150 group-hover:scale-100 
            opacity-0 group-hover:opacity-90
            -translate-y-1/2 group-hover:translate-y-0
            ">
         <rect id="Rectangle 20" x="48" y="16" width="24" height="34" rx="5" class="fill-gray-200" />
         <g id="Text Lines" class="{norm}" >
            <rect id="Rectangle 21" x="51" y="19" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 22" x="51" y="22" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 23" x="51" y="25" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 24" x="51" y="28" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 25" x="51" y="31" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 26" x="51" y="34" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 27" x="51" y="37" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 28" x="51" y="40" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 29" x="51" y="43" width="18" height="1" rx="0.5"/>
            <rect id="Rectangle 30" x="51" y="46" width="18" height="1" rx="0.5"/>
         </g>
      </g>

      <g id="Envelope" 
         class="
            opacity-70 origin-center {transition}
            scale-[200%] group-hover:scale-120 
            -translate-y-[32.5%] group-hover:-translate-y-[10%]"> 
         <g id="Rectangle">
            <path
               id="Light"
               d="M35 65C35 62.2386 37.2386 60 40 60H80C82.7614 60 85 62.2386 85 65V95C85 97.7614 82.7614 100 80 100H40C37.2386 100 35 97.7614 35 95V65Z"
               class="{norm}"
            />
            <path
               id="Dark"
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M80 64H40C39.4477 64 39 64.4477 39 65V95C39 95.5523 39.4477 96 40 96H80C80.5523 96 81 95.5523 81 95V65C81 64.4477 80.5523 64 80 64ZM40 60C37.2386 60 35 62.2386 35 65V95C35 97.7614 37.2386 100 40 100H80C82.7614 100 85 97.7614 85 95V65C85 62.2386 82.7614 60 80 60H40Z"
               class="{dark}"
            />
            <path
               id="Dark_2"
               d="M80.9085 61L62.032 80.7059C60.9098 81.8774 59.0902 81.8774 57.968 80.7059L39.0915 61C37.8542 61.5073 36.8681 62.5367 36.3821 63.8284L55.2586 83.5343C57.8772 86.268 62.1228 86.268 64.7414 83.5343L83.6179 63.8284C83.1319 62.5367 82.1458 61.5073 80.9085 61Z"
               class="
                  {dark} opacity-70 {transition}
                  translate-y-[0.3%] 
                  group-hover:opacity-0
                  "
            />
         </g>
      </g>
   </g>
</svg>
