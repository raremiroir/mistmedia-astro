<script>
   export let size = 100;

   export let dark = 'fill-accent-d3'
   export let norm = 'fill-accent-d1'
   export let light = 'fill-accent'
   export let transition = 'transition-all duration-500 ease-in-out'
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="bg-transparent group md:active:animate-[wiggle_1s_ease-in-out_forwards]">
	<g id="Cube-Icon">
		<g id="Cube">
			<path
				id="Right"
				d="M105 39.1421C105 37.2286 103.677 36.4531 102.046 37.4098L62.9847 60.3151C62.4409 60.634 62 61.4095 62 62.0474L62 107.858C62 109.771 63.3226 110.547 64.9542 109.59L100.076 88.9947C102.796 87.4002 105 83.5222 105 80.3331V39.1421Z"
				class="
               {light} opacity-70 {transition}
               group-hover:translate-x-[5%] group-hover:translate-y-[5%]
               group-active:translate-x-[7%] group-active:translate-y-[7%]
               md:group-active:translate-x-[5%] md:group-active:translate-y-[5%]"
			/>
			<path
				id="Left"
				d="M15 39.1421C15 37.2286 16.3226 36.4531 17.9542 37.4098L57.0153 60.3151C57.5591 60.634 58 61.4095 58 62.0474V107.858C58 109.771 56.6774 110.547 55.0458 109.59L19.9236 88.9947C17.2044 87.4002 15 83.5222 15 80.3331L15 39.1421Z"
				class="
               {dark} opacity-70 {transition}
               group-hover:-translate-x-[5%] group-hover:translate-y-[5%]
               group-active:-translate-x-[7%] group-active:translate-y-[7%]
               md:group-active:-translate-x-[5%] md:group-active:translate-y-[5%]"
			/>
			<path
				id="Top"
				d="M55.1085 11.1613C57.81 9.6129 62.19 9.6129 64.8915 11.1613L99.7843 31.1609C101.405 32.0899 101.405 33.5962 99.7843 34.5253L60.9783 56.7677C60.438 57.0774 59.562 57.0774 59.0217 56.7677L20.2157 34.5253C18.5948 33.5962 18.5948 32.0899 20.2157 31.1609L55.1085 11.1613Z"
				class="
               {norm} opacity-70 {transition}
               group-hover:translate-x-0 group-hover:-translate-y-[5%]
               group-active:translate-x-0 group-active:-translate-y-[7%]
               md:group-active:translate-x-0 md:group-active:-translate-y-[5%]"
			/>
		</g>
	</g>
</svg>
