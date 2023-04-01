<script>
   import { onClassChange } from "@utils/observer";
   import { onMount } from "svelte";
   import { mapStyle } from "@styles/components/map";
   import { ADDRESS } from "@const/index";
   
   let container;
   let map;
   let zoom = 9;
   let center = {lat: ADDRESS.lat, lng: ADDRESS.lng};

   onMount(() => {
      // Change map style on theme change
      const rootEl = document.documentElement;
      onClassChange(rootEl, (node) => {
         node.classList.contains('dark')
            ? map.setOptions({styles: mapStyle('dark')})
            : map.setOptions({styles: mapStyle('light')})
      })

      // Initialize map
      map = new google.maps.Map(container, {
         zoom, center, 
         styles: mapStyle(rootEl.classList.contains('dark') ? 'dark' : 'light'), 
         disableDefaultUI: true,
         zoomControl: true,
         zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL
         },
         mapTypeControl: true,
         mapTypeControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
         },
         scaleControl: true,
         streetViewControl: false,
      })

   })

</script>

<div class="w-screen min-h-screen" bind:this={container}></div>