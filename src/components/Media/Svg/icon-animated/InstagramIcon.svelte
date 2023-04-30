<script>
   export let size = 100
   export let norm = 'fill-accent-d1'
   export let dark = 'fill-accent-d3'
   export let transition = 'transition-all duration-500 ease-in-out origin-center'
   
   export let light = '';
   export let bgColor = 'bg-transparent';
   export let darkBgColor = 'dark:bg-transparent';
   export let opacity = 'opacity-100';
   export let strokeDark = '';

   let klass = '';
   export { klass as class };

</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="group {klass} {opacity} {bgColor} {light} {darkBgColor} {strokeDark}">

	<g id="Default-Accent">
		<g id="Group 1" class="opacity-70">
			<g id="Bg">
            <path 
               id="Bg_2" 
               d="M15 41C15 26.6406 26.6406 15 41 15H79C93.3594 15 105 26.6406 105 41V79C105 93.3594 93.3594 105 79 105H41C26.6406 105 15 93.3594 15 79V41Z" 
               class="{norm}"/>
            <path 
               id="Bg-Stroke" 
               fill-rule="evenodd" clip-rule="evenodd" 
               d="M79 23H41C31.0589 23 23 31.0589 23 41V79C23 88.9411 31.0589 97 41 97H79C88.9411 97 97 88.9411 97 79V41C97 31.0589 88.9411 23 79 23ZM41 15C26.6406 15 15 26.6406 15 41V79C15 93.3594 26.6406 105 41 105H79C93.3594 105 105 93.3594 105 79V41C105 26.6406 93.3594 15 79 15H41Z" 
               class="{dark}"/>
         </g>
         <path 
            id="Lens" 
            fill-rule="evenodd" clip-rule="evenodd" 
            d="M60 75C68.2843 75 75 68.2843 75 60C75 51.7157 68.2843 45 60 45C51.7157 45 45 51.7157 45 60C45 68.2843 51.7157 75 60 75ZM60 83C72.7025 83 83 72.7025 83 60C83 47.2975 72.7025 37 60 37C47.2975 37 37 47.2975 37 60C37 72.7025 47.2975 83 60 83Z" 
            class="
               {dark} {transition}
               group-hover:animate-[bounceReverse_1s_ease-in-out_forwards]
               "/>
         <circle 
            id="Flash" 
            cx="84.5" cy="36.5" r="5.5" 
            class="
               {dark} {transition}
               group-hover:rotate-[360deg]"/>
		</g>
	</g>

</svg>
