<script>
   export let size = 100
   export let norm = 'fill-accent-d1'
   export let dark = 'fill-accent-d3'

   export let light = ''
   export let strokeDark = ''
   export let bgColor = 'bg-transparent'
   export let darkBgColor = 'dark:bg-transparent'
   export let opacity = ''

	let klass = '';
	export { klass as class };
</script>
<!-- 
<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="group {klass} {opacity} {bgColor} {light} {darkBgColor} {strokeDark}">
	<g id="Twitter">
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
</svg> -->

<svg 
   xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 256 256" 
   class="group {klass} {opacity} {bgColor} {light} {darkBgColor} {strokeDark}">
   <g id="Twitter">
      <path class="{norm} opacity-40" d="m240 72l-32 32c-4.26 66.84-60.08 120-128 120c-32 0-40-12-40-12s32-12 48-36c0 0-55.15-32-47.22-120c0 0 39.66 40 87.22 48V88c0-22 18-40.27 40-40a40.74 40.74 0 0 1 36.67 24Z" />
      <path class="{dark} opacity-70" d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.65 48.65 0 0 0-41.47-24a46.87 46.87 0 0 0-33.74 13.7A47.87 47.87 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.3 47.79 9.57 79.77 22 98.18a110.92 110.92 0 0 0 21.89 24.2c-15.27 17.53-39.25 26.74-39.5 26.84a8 8 0 0 0-3.85 11.93c.74 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.68 0 129.72-54.42 135.76-124.44l29.9-29.9a8 8 0 0 0 1.73-8.72Zm-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.52-6.25 27.56-17 37.88-32.48a8 8 0 0 0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54 124.11 48 100.38 48 73.09c16 13 45.25 33.18 78.69 38.8A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.89 30.89 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z"/>
   </g>
</svg>
