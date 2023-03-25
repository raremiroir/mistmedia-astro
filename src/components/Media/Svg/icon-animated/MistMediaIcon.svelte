<script>
   export let size = 160


   export let bgColor = 'primary'
   export let darkBgColor = 'secondary-d1'
   export let transition = 'transition-all duration-1000 ease-out'
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="bg-{bgColor} dark:bg-{darkBgColor} group">
	<g id="Default">

		<g id="logo" class="{transition} fill-secondary-d3 dark:fill-primary-d1">
			<path 
            id="right" d="M79 47H95C100.523 47 105 51.4772 105 57V90H79V47Z" 
            class="-translate-y-full animate-[slideInUp_1.5s_ease-in-out_forwards_0.5s]" />
			<path 
            id="mid" d="M47 31H63C68.5228 31 73 35.4772 73 41V100H47V31Z" 
            class="-translate-y-full animate-[slideInUp_1.2s_ease-in-out_forwards_0.3s]" />
			<path 
            id="left" d="M15 15H31C36.5228 15 41 19.4772 41 25V105H15V15Z" 
            class="-translate-y-full animate-[slideInUp_1s_ease-in-out_forwards]" />
		</g>

		<g id="triangle" 
         class="
            fill-secondary-d2 dark:fill-primary {transition}
            -translate-x-full animate-[slideInRight_2s_ease-in-out_forwards_2s]">
            <path d="M105 60L15 15V105L105 60Z"/>
		</g>
		<g id="foreground">
			<rect id="right_3" class="fill-{bgColor} dark:fill-{darkBgColor}" 
               x="73" y="0" width="6" height="120"/>
			<rect id="left_3" class="fill-{bgColor} dark:fill-{darkBgColor}" 
               x="41" y="0" width="6" height="120"/>
			<rect id="left_3" class="fill-{bgColor} dark:fill-{darkBgColor}" 
               x="-1" y="0" width="16" height="120"/>
		</g>
	</g>
</svg>
