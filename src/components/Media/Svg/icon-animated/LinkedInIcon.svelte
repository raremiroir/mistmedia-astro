<script>
   export let size = 100
   export let norm = 'fill-accent-d1'
   export let dark = 'fill-accent-d3'
   export let transition = 'transition-all duration-500 ease-in-out'

   export let light = ''
   export let strokeDark = ''
   export let bgColor = 'bg-transparent'
   export let darkBgColor = 'dark:bg-transparent'
   export let opacity = ''

   let klass = '';
	export { klass as class };
</script>

<svg 
   width="{size}" height="{size}" viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   class="group {klass} {opacity} {bgColor} {light} {darkBgColor} {strokeDark}">
	<g id="Default-Accent">
		<g id="n" 
         class="opacity-70 group-hover:animate-[wiggle_1s_ease-in-out_reverse]">
			<path
				id="n-Light"
				d="M75.5 42C59.2076 42 46 55.2076 46 71.5V100C46 102.761 48.2386 105 51 105H61C63.7614 105 66 102.761 66 100V71.5C66 66.2533 70.2533 62 75.5 62C80.7467 62 85 66.2533 85 71.5V100C85 102.761 87.2386 105 90 105H100C102.761 105 105 102.761 105 100V71.5C105 55.2076 91.7924 42 75.5 42Z"
				class="{norm}"
			/>
			<path
				id="n-Dark"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M75.5 47C61.969 47 51 57.969 51 71.5V100H61V71.5C61 63.4919 67.4919 57 75.5 57C83.5081 57 90 63.4919 90 71.5V100H100V71.5C100 57.969 89.031 47 75.5 47ZM46 71.5C46 55.2076 59.2076 42 75.5 42C91.7924 42 105 55.2076 105 71.5V100C105 102.761 102.761 105 100 105H90C87.2386 105 85 102.761 85 100V71.5C85 66.2533 80.7467 62 75.5 62C70.2533 62 66 66.2533 66 71.5V100C66 102.761 63.7614 105 61 105H51C48.2386 105 46 102.761 46 100V71.5Z"
				class="{dark}"
			/>
		</g>
		<g id="i" 
         class="">
         <g id="i-stripe"
            class="opacity-70">
            <path
               id="i-Light"
               d="M32.6 47H19.4C16.9699 47 15 48.9975 15 51.4615V100.538C15 103.003 16.9699 105 19.4 105H32.6C35.0301 105 37 103.003 37 100.538V51.4615C37 48.9975 35.0301 47 32.6 47Z"
               class="{norm}"
            />
            <path
               id="i-Dark"
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M20 52V100H32V52H20ZM19.4 47H32.6C35.0301 47 37 48.9975 37 51.4615V100.538C37 103.003 35.0301 105 32.6 105H19.4C16.9699 105 15 103.003 15 100.538V51.4615C15 48.9975 16.9699 47 19.4 47Z"
               class="{dark}"
            />
         </g>
         <g id="i-dot"
            class="
               opacity-70 {transition}
               group-hover:translate-y-[7%] group-hover:animate-bounceReverse
               ">
            <path
               id="i-dot-Light"
               d="M26 38C32.0751 38 37 32.8513 37 26.5C37 20.1487 32.0751 15 26 15C19.9249 15 15 20.1487 15 26.5C15 32.8513 19.9249 38 26 38Z"
               class="{norm}"
            />
            <path
               id="i-dot-Dark"
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M26 33C29.1066 33 32 30.3016 32 26.5C32 22.6984 29.1066 20 26 20C22.8934 20 20 22.6984 20 26.5C20 30.3016 22.8934 33 26 33ZM37 26.5C37 32.8513 32.0751 38 26 38C19.9249 38 15 32.8513 15 26.5C15 20.1487 19.9249 15 26 15C32.0751 15 37 20.1487 37 26.5Z"
               class="{dark}"
            />
         </g>
		</g>
	</g>
</svg>


<style>
</style>