<script>
   export let size = 100
   export let strokeDark = 'stroke-accent-d3 stroke-[6px] fill-transparent'
   export let norm = 'fill-accent-d1'
   export let transition = 'transition-all duration-500 ease-in-out'
	
	let klass = '';
	export { klass as class };

</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120"
   xmlns="http://www.w3.org/2000/svg"
   class="bg-transparent group opacity-70 {klass}">
	<g id="Default-Accent">
		<g id="Outline">
			<path
				id="Bg"
				d="M52.246 73.5484C45.9557 76.9355 45.9557 82.2581 45.9557 105H59.9451H74.0202C74.0202 82.2581 74.0202 76.9355 67.7299 73.5484C82.246 73.5484 95.3105 66.2904 95.3105 50.3226C95.3105 40.6452 91.4396 34.3549 89.5041 32.4194C91.0525 25.0646 89.5041 19.6775 88.5363 17.9033C84.1815 18.3872 78.8589 19.8388 74.0202 23.2259C67.8267 22.0646 62.0847 21.7743 59.988 21.7743C57.8912 21.7743 52.1493 22.0646 45.9557 23.2259C41.117 19.8388 35.7944 18.3872 31.4396 17.9033C30.4719 19.6775 28.9235 25.0646 30.4719 32.4194C28.5364 34.3549 24.6654 40.6452 24.6654 50.3226C24.6654 66.2904 37.7299 73.5484 52.246 73.5484Z"
				class="{norm}"
			/>
			<g id="Stroke">
				<path
					id="Cat"
					d="M45.9557 102.097C45.9557 79.3549 45.9557 76.9355 52.246 73.5484C37.7299 73.5484 24.6654 66.2904 24.6654 50.3226C24.6654 40.6452 28.5364 34.3549 30.4719 32.4194C28.9235 25.0646 30.4719 19.6775 31.4396 17.9033C35.7944 18.3872 41.117 19.8388 45.9557 23.2259C52.1493 22.0646 57.8912 21.7743 59.988 21.7743C62.0847 21.7743 67.8267 22.0646 74.0202 23.2259C78.8589 19.8388 84.1815 18.3872 88.5363 17.9033C89.5041 19.6775 91.0525 25.0646 89.5041 32.4194C91.4396 34.3549 95.3105 40.6452 95.3105 50.3226C95.3105 66.2904 82.246 73.5484 67.7299 73.5484C74.0202 76.9355 74.0202 79.3549 74.0202 102.097"
					stroke-linecap="round" stroke-linejoin="round"
					class="{strokeDark} stroke-[6px] fill-transparent"
				/>
				<path
					id="Tail"
					d="M45.9557 87.5807C40.1493 89.5162 32.5927 90.2409 27.5686 83.7097C22.7299 77.4194 20.7944 76.4516 19.3428 75.9678"
					stroke-linecap="round" stroke-linejoin="round"
					class="
                  {strokeDark} stroke-[6px] fill-transparent {transition} origin-bottom 
                  group-hover:animate-waving"
				/>
			</g>
		</g>
	</g>
</svg>
