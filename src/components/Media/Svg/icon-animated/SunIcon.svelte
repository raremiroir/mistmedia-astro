<script>
	export let size = 100;
	export let norm = 'fill-accent-d1';
	export let dark = 'fill-accent-d3';
	export let opacity = '70';;
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="bg-transparent group">
	<g id="Frame 23">
		<g 
         id="Core" 
         class="opacity-{opacity} scale-80 origin-center">
			<path
				id="Light"
				d="M85 60C85 73.8071 73.8071 85 60 85C46.1929 85 35 73.8071 35 60C35 46.1929 46.1929 35 60 35C73.8071 35 85 46.1929 85 60Z"
				class="{norm}"
			/>
			<path
				id="Dark"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M60 79C70.4934 79 79 70.4934 79 60C79 49.5066 70.4934 41 60 41C49.5066 41 41 49.5066 41 60C41 70.4934 49.5066 79 60 79ZM60 85C73.8071 85 85 73.8071 85 60C85 46.1929 73.8071 35 60 35C46.1929 35 35 46.1929 35 60C35 73.8071 46.1929 85 60 85Z"
				class="{dark}"
			/>
		</g>
		<g 
         id="Rays" 
         class="
            opacity-{opacity} {dark} origin-center 
            group-hover:animate-[spin_20s_linear_infinite]">
         <g class="origin-center group-hover:animate-[zoomInOut_3s_ease-in-out_infinite]">
            <path
               id="Top"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M60 10C62.2091 10 64 11.7909 64 14V27C64 29.2091 62.2091 31 60 31C57.7909 31 56 29.2091 56 27V14C56 11.7909 57.7909 10 60 10Z"
            />
            <path
               id="Bottom"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M60 89C62.2091 89 64 90.7909 64 93V106C64 108.209 62.2091 110 60 110C57.7909 110 56 108.209 56 106V93C56 90.7909 57.7909 89 60 89Z"
            />
            <path
               id="Right"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M110 60C110 62.2091 108.209 64 106 64L93 64C90.7909 64 89 62.2091 89 60C89 57.7909 90.7909 56 93 56L106 56C108.209 56 110 57.7909 110 60Z"
            />
            <path
               id="Left"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M31 60C31 62.2091 29.2091 64 27 64L14 64C11.7909 64 10 62.2091 10 60C10 57.7909 11.7909 56 14 56L27 56C29.2091 56 31 57.7909 31 60Z"
            />
            <path
               id="Top Right"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M95.3553 24.6447C96.9174 26.2067 96.9174 28.7394 95.3553 30.3015L86.1629 39.4939C84.6008 41.056 82.0681 41.056 80.506 39.4939C78.9439 37.9318 78.9439 35.3991 80.506 33.837L89.6984 24.6447C91.2605 23.0826 93.7932 23.0826 95.3553 24.6447Z"
            />
            <path
               id="Bottom Left"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M39.494 80.5061C41.0561 82.0682 41.0561 84.6009 39.494 86.163L30.3016 95.3553C28.7395 96.9174 26.2068 96.9174 24.6447 95.3553C23.0826 93.7932 23.0826 91.2606 24.6447 89.6985L33.8371 80.5061C35.3992 78.944 37.9319 78.944 39.494 80.5061Z"
            />
            <path
               id="Bottom Right"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M95.3552 95.3553C93.7931 96.9174 91.2604 96.9174 89.6983 95.3553L80.5059 86.1629C78.9438 84.6008 78.9438 82.0682 80.5059 80.5061C82.068 78.944 84.6007 78.944 86.1628 80.5061L95.3552 89.6985C96.9173 91.2606 96.9173 93.7932 95.3552 95.3553Z"
            />
            <path
               id="Top Left"
               fill-rule="evenodd" clip-rule="evenodd"
               d="M39.4938 39.4939C37.9317 41.056 35.3991 41.056 33.837 39.4939L24.6446 30.3015C23.0825 28.7394 23.0825 26.2067 24.6446 24.6446C26.2067 23.0826 28.7394 23.0826 30.3015 24.6447L39.4938 33.837C41.0559 35.3991 41.0559 37.9318 39.4938 39.4939Z"
            />
         </g>
		</g>
	</g>
</svg>
