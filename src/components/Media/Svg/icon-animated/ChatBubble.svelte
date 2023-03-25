<script>
   export let size = 100;
   export let dark = "fill-accent-d3"
   export let norm = "fill-accent-d1"
   export let transition = "transition-all duration-500 ease-in-out"
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="
      bg-transparent group {transition}
      active:scale-90">
	<g id="Hover-Accent">
		<g id="Bubble R"
         class="
            {transition} origin-bottom-right
            opacity-0 group-hover:opacity-70
            scale-50 group-hover:scale-100
            group-active:origin-center">
			<g id="Bubble_2">
				<path
					id="Bubble Light_2"
					d="M79.5 87.8C62.6553 87.8 49 76.8757 49 63.4C49 49.9243 62.6553 39 79.5 39C96.3447 39 110 49.9243 110 63.4C110 71.4083 105.177 78.5155 97.7289 82.9644L102.375 100L83.2398 87.6184C82.0142 87.7383 80.7661 87.8 79.5 87.8Z"
					class="{norm}"
				/>
				<path
					id="Bubble Dark_2"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M93.7826 81.3741L96.7729 92.3386L84.0875 84.1304L82.9099 84.2456C81.794 84.3548 80.656 84.4111 79.5 84.4111C63.7822 84.4111 52.3889 74.3375 52.3889 63.4C52.3889 52.4625 63.7822 42.3889 79.5 42.3889C95.2178 42.3889 106.611 52.4625 106.611 63.4C106.611 69.9496 102.667 76.0678 95.9912 80.0549L93.7826 81.3741ZM102.375 100L97.7289 82.9644C105.177 78.5155 110 71.4083 110 63.4C110 49.9243 96.3447 39 79.5 39C62.6553 39 49 49.9243 49 63.4C49 76.8758 62.6553 87.8 79.5 87.8C80.7661 87.8 82.0142 87.7383 83.2398 87.6184L102.375 100Z"
					class="{dark}"
				/>
			</g>
			<g id="Dots_2" class="{dark}">
				<circle id="Dot 3_2" r="4.74444" transform="matrix(-1 0 0 1 67.3 63.4)" />
				<circle id="Dot 2_2" r="4.74444" transform="matrix(-1 0 0 1 79.5001 63.4)" />
				<circle id="Dot 1_2" r="4.74444" transform="matrix(-1 0 0 1 91.7 63.4)" />
			</g>
		</g>
		<g 
         id="ChatBubble" 
         class="
            opacity-70 {transition} origin-center 
            group-hover:-translate-y-[8%] group-hover:-translate-x-[17%] group-hover:scale-70
            group-active:translate-y-0 group-active:translate-x-0">
			<path
				id="Bubble Light"
				d="M60 87C84.8528 87 105 70.8823 105 51C105 31.1178 84.8528 15 60 15C35.1472 15 15 31.1178 15 51C15 62.8155 22.1152 73.3015 33.1049 79.8655L26.25 105L54.4823 86.7321C56.2905 86.9089 58.132 87 60 87Z"
				class="{norm}"
			/>
			<path
				id="Bubble Dark"
				fill-rule="evenodd" clip-rule="evenodd"
				d="M38.9274 77.5192L34.5154 93.6964L53.2316 81.5859L54.969 81.7558C56.6155 81.9169 58.2945 82 60 82C83.1902 82 100 67.1373 100 51C100 34.8627 83.1902 20 60 20C36.8098 20 20 34.8627 20 51C20 60.6633 25.8197 69.6902 35.6688 75.5729L38.9274 77.5192ZM26.25 105L33.1049 79.8655C22.1152 73.3016 15 62.8155 15 51C15 31.1178 35.1472 15 60 15C84.8528 15 105 31.1178 105 51C105 70.8823 84.8528 87 60 87C58.132 87 56.2905 86.9089 54.4823 86.7321L26.25 105Z"
				class="{dark}"
			/>
         <g id="Dots_3" class="{dark} opacity-70">
            <circle id="Dot 3_3" cx="78" cy="51" r="7" />
            <circle id="Dot 2_3" cx="60" cy="51" r="7" />
            <circle id="Dot 1_3" cx="42" cy="51" r="7" />
         </g>
		</g>
	</g>
</svg>
