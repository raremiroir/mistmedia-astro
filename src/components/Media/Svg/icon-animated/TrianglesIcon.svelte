<script lang='ts'>
   export let lightColor = 'fill-[#80e9ff]'
   export let darkColor = 'fill-[#635bff]'

   const handleSvgClick = (e:any) => {
      const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
      const rando = () => colors[Math.floor(Math.random() * colors.length)];
      darkColor = `fill-[${rando()}]`;
      lightColor = `fill-[${rando()}]`;
   }

</script>

<svg 
   on:click={handleSvgClick}
   width="120" height="100" viewBox="0 0 120 100" 
   xmlns="http://www.w3.org/2000/svg"
   class="bg-transparent group">
   <g id="triangles" clip-path="url(#clip0_1_4)">
      <g id="lightGroup" class="{lightColor} opacity-70">
         <path 
            d="M51 48.268C52.3333 49.0378 52.3333 50.9623 51 51.7321L16.5 71.6506C15.1667 72.4204 13.5 71.4582 13.5 69.9186L13.5 30.0814C13.5 28.5418 15.1667 27.5796 16.5 28.3494L51 48.268Z" 
            id="light" 
            class="
               transition-all duration-200 ease-linear
               group-hover:translate-x-[20%]
               "
               />
      </g>
      <g id="darkGroup" class="{darkColor} opacity-70">
         <path 
            d="M67 48.268C68.3333 49.0378 68.3333 50.9623 67 51.7321L32.5 71.6506C31.1667 72.4204 29.5 71.4582 29.5 69.9186L29.5 30.0814C29.5 28.5418 31.1667 27.5796 32.5 28.3494L67 48.268Z"
            id="dark1" 
            class="
               transition-all duration-200 ease-linear
               group-hover:translate-x-[40%]
               group-hover:opacity-0
               " 
            />
         <path 
            d="M51 48.268C52.3333 49.0378 52.3333 50.9623 51 51.7321L16.5 71.6506C15.1667 72.4204 13.5 71.4582 13.5 69.9186L13.5 30.0814C13.5 28.5418 15.1667 27.5796 16.5 28.3494L51 48.268Z"
            id="dark2" 
            class="
               transition-all duration-200 ease-linear
               -translate-x-full group-hover:translate-x-0
               " 
            />
      </g>
   </g>
</svg>

<style>
   /* your styles go here */
</style>
