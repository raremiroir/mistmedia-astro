<script>
	export let size = 100;
	export let norm = 'fill-accent-d1';
	export let dark = 'fill-accent-d3';
	export let transition = 'transition-all duration-500 ease-in-out';
</script>

<svg 
   width="{size}" height="{size}" 
   viewBox="0 0 120 120" 
   xmlns="http://www.w3.org/2000/svg"
   >
	<g id="Devices">
		<!-- Computer -->
      <g 
         id="PC"
         class="
            {transition} opacity-70
            group-hover:translate-x-[15%]"
         >
			<path
				id="Dark"
				d="M66 80H44V83.5H30C28.6193 83.5 27.5 84.6193 27.5 86C27.5 87.3807 28.6193 88.5 30 88.5H80C81.3807 88.5 82.5 87.3807 82.5 86C82.5 84.6193 81.3807 83.5 80 83.5H66V80Z"
				class="{dark}"
			/>
			<g id="Screen">
				<path
					id="Light"
					d="M15 28C15 23.5817 18.5817 20 23 20H87C91.4183 20 95 23.5817 95 28V72C95 76.4183 91.4183 80 87 80H23C18.5817 80 15 76.4183 15 72V28Z"
					class="{norm}"
				/>
				<path
					id="Dark_2"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M87 25H23C21.3431 25 20 26.3431 20 28V72C20 73.6569 21.3431 75 23 75H87C88.6569 75 90 73.6569 90 72V28C90 26.3431 88.6569 25 87 25ZM23 20C18.5817 20 15 23.5817 15 28V72C15 76.4183 18.5817 80 23 80H87C91.4183 80 95 76.4183 95 72V28C95 23.5817 91.4183 20 87 20H23Z"
					class="{dark}"
				/>
			</g>
		</g>
      <!-- Phone -->
		<g 
         id="Phone"
         class="
            {transition} opacity-70 origin-bottom
            group-hover:scale-x-150 group-hover:-rotate-90
            group-hover:translate-x-[15%]
            "
         >
			<path
				id="Light_2"
				d="M75 50C75 47.7909 76.7909 46 79 46H101C103.209 46 105 47.7909 105 50V96C105 98.2091 103.209 100 101 100H79C76.7909 100 75 98.2091 75 96V50Z"
				class="{norm}"
			/>
			<path
				id="Dark_3"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M101 49H79C78.4477 49 78 49.4477 78 50V96C78 96.5523 78.4477 97 79 97H101C101.552 97 102 96.5523 102 96V50C102 49.4477 101.552 49 101 49ZM79 46C76.7909 46 75 47.7909 75 50V96C75 98.2091 76.7909 100 79 100H101C103.209 100 105 98.2091 105 96V50C105 47.7909 103.209 46 101 46H79Z"
				class="{dark}"
			/>
		</g>
	</g>
</svg>