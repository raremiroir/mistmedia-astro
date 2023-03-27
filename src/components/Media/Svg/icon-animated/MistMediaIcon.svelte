<script>
   export let size = 200


   export let bgColor = 'surface-700'
   export let darkBgColor = 'surface-900'
   export let transition = 'transition-all duration-1000 ease-out'
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="bg-transparent">
	<g id="Default">

        <!-- Pillars -->
		<g class="{transition} fill-surface-700 dark:fill-surface-300">
			<!-- Right -->
            <path d="M79 47H95C100.523 47 105 51.4772 105 57V90H79V47Z" class="-translate-y-full animate-[slideInUp_1.5s_ease-in-out_forwards_0.5s]" />
            <!-- Mid -->
			<path d="M47 31H63C68.5228 31 73 35.4772 73 41V100H47V31Z" class="-translate-y-full animate-[slideInUp_1.2s_ease-in-out_forwards_0.3s]" />
            <!-- Left -->
			<path d="M15 15H31C36.5228 15 41 19.4772 41 25V105H15V15Z" class="-translate-y-full animate-[slideInUp_1s_ease-in-out_forwards]" />
		</g>

        <!-- Triangle -->
		<g class="fill-surface-600 dark:fill-surface-200 {transition} -translate-x-full animate-[slideInRight_2s_ease-in-out_forwards_2s]">
            <path class="translate-x-[.5px]" d="M105 60L15 15V105L105 60Z"/>
		</g>

        <!-- Gradients for pillar covers -->
        <linearGradient id="mist_grad_1" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#aeaeae" />
            <stop offset="95%" stop-color="#a6a5a5" />
        </linearGradient>
        <linearGradient id="mist_grad_2" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#b0b0b0" />
            <stop offset="95%" stop-color="#a6a6a6" />
        </linearGradient>
        <linearGradient id="mist_grad_1_dark" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#3d4451" />
            <stop offset="95%" stop-color="#333b4a" />
        </linearGradient>
        <linearGradient id="mist_grad_2_dark" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#414a53" />
            <stop offset="95%" stop-color="#303b46" />
        </linearGradient>
        <!-- Pillar Covers -->
		<g>
            <!-- Left -->
			<rect x="41" y="20" width="6.5" height="86" fill="url(#mist_grad_1)" class="dark:hidden" />
			<rect x="41" y="20" width="6.5" height="86" fill="url(#mist_grad_1_dark)" class="hidden dark:block" />
            <!-- Right -->
			<rect x="73" y="38" width="6.5" height="63" fill="url(#mist_grad_2)" class="dark:hidden"/>
			<rect x="73" y="38" width="6.5" height="63" fill="url(#mist_grad_2_dark)" class="hidden dark:block"/>
		</g>
	</g>
</svg>

<!-- <svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg" class="bg-transparent !fill-surface-400 {transition}">

    <clipPath id="mistTriangle">
        Triangle
        <path d="M105 60L15 15V105L105 60Z" />
    </clipPath>

    Pillars
    <g id="mistPillars">
        Right
        <path d="M79 47H95C100.523 47 105 51.4772 105 57V90H79V47Z" class="fill-surface-700 dark:fill-primary-d1 z-2 -translate-y-full animate-[slideInUp_1.5s_ease-in-out_forwards_0.5s]" />
        Mid
        <path d="M47 31H63C68.5228 31 73 35.4772 73 41V100H47V31Z" class="fill-surface-700 dark:fill-primary-d1 z-2 -translate-y-full animate-[slideInUp_1.2s_ease-in-out_forwards_0.3s]" />
        Left
        <path d="M15 15H31C36.5228 15 41 19.4772 41 25V105H15V15Z" class="fill-surface-700 dark:fill-primary-d1 z-2 -translate-y-full animate-[slideInUp_1s_ease-in-out_forwards]" />
    </g>
    

     Clip path
    <use 
        clip-path="url(#mistTriangle)" 
        href="#mistPillars" 
        class="!fill-surface-400 dark:fill-primary {transition} z-3
                -translate-x-full animate-[slideInRight_2s_ease-in-out_forwards_2s]"
    />
</svg> -->
