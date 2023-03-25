<script>
   export let size = 100
   export let norm = 'fill-accent-d1'
   export let dark = 'fill-accent-d3'
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="bg-transparent group">
	<g id="Facebook">
		<path
			id="f"
			d="M68 15C56.9543 15 48 23.9543 48 35V103C48 104.105 48.8954 105 50 105H64C65.1046 105 66 104.105 66 103V34C66 31.2386 68.2386 29 71 29H81.0702C82.1469 29 83.0304 28.1475 83.0689 27.0714L83.426 17.0714C83.4664 15.9395 82.5599 15 81.4273 15L68 15Z"
			class="
            {norm} opacity-70"
		/>
		<path
			id="stripe"
			d="M37 49C37 47.8954 37.8954 47 39 47H80.9365C82.0656 47 82.9708 47.934 82.9355 49.0625L82.5605 61.0625C82.5268 62.1422 81.6418 63 80.5615 63H39C37.8954 63 37 62.1046 37 61V49Z"
			class="
            {dark} opacity-70 origin-center
            group-hover:animate-[waving_1s_ease-in-out_forwards]"
		/>
	</g>
</svg>
