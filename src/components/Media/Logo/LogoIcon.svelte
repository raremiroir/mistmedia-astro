<script lang="ts">
   export let width:number|'full' = 50;
   
   const ratio = 477 / 1155;
   const height = width !== 'full' ? width * ratio : 0;
	// Calculate bottom margin to compensate for the height of the logo
	const marginBottom = -height * 0.65;

	let klass = '';
	export { klass as class };

	export let dark = "fill-surface-900 dark:fill-white";
	export let light = "fill-surface-400 dark:fill-surface-200";
</script>

<svg 
   viewBox="0 0 133 180" 
   fill="none" 
	style="
		width: {width === 'full' ? '100%' : `${width}px`};
		height: {width === 'full' ? '100%' : `${height}px`};
		"
   class="{klass}"
   xmlns="http://www.w3.org/2000/svg">

   <!-- Logo -->
	<g class="{dark} mix-blend-difference">
      <!-- First pillar top -->
		<path d="M40,53.3V156l-20.5,11.8L0,179V33h19.5v0c0.2,0,0.3,0,0.5,0c10.9,0,19.7,8.8,20,19.8C40,53,40,53.2,40,53.3z"/>
      <!-- Second pillar top -->
      <path d="M88,79v52l-42,23.1V58h21c11.2,0,20.4,8.8,21,19.9C88,78.3,88,78.6,88,79z"/>
      <!-- Third pillar top -->
      <path d="M133,104.1v2.9l-0.2,0.1l-20.3,10.8l-8.1,4.3l-11.4,6V84h19.5v0c0.2,0,0.3,0,0.5,0c10.9,0,19.7,8.7,20,19.6 C133,103.7,133,103.9,133,104.1z"/>
	</g>
	<g class="{light}">
      <!-- First pillar bottom -->
      <polygon points="40,156 40,179 0,179 19.5,167.8"/>
      <!-- Second pillar bottom -->
		<polygon points="88,131 88,167 46,167 46,154.1 		"/>
      <!-- Third pillar bottom -->
		<polygon points="133,107 133,153 93,153 93,128.2 104.4,122.2 112.5,117.9 132.8,107.1 		"/>
	</g>
</svg>