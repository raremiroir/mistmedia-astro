<script>
   import { onMount } from "svelte";

   import map_dark from "@styles/components/map_dark";
   
   let container;
   let map;
   let zoom = 9;
   let center = {lat: 51.22424678676408, lng: 4.410601398443491};

   onMount(() => {
      map = new google.maps.Map(container, {
         zoom,
         center,
         styles: map_dark,
         disableDefaultUI: true,
         zoomControl: true,
         zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
         },
         mapTypeControl: true,
         mapTypeControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
         },
         scaleControl: true,
         streetViewControl: false,
         streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
         },
         fullscreenControl: false,
         fullscreenControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
         }
      })
   })

</script>

<div class="w-screen min-h-screen" bind:this={container}></div>