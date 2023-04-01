export const mapStyle = (theme:'dark'|'light') => {
   if(theme === 'dark') {
      return map.dark;
   } else {
      return map.light;
   }
}

export const map = {
   dark: [
      {
         elementType: 'geometry',
         stylers: [{ color: '#1d2c4d' }],
      },
      {
         elementType: 'labels.text.fill',
         stylers: [{ color: '#8ec3b9' }],
      },
      {
         elementType: 'labels.text.stroke',
         stylers: [{ color: '#1a3646' }],
      },
      {
         featureType: 'administrative.country',
         elementType: 'geometry.stroke',
         stylers: [{ color: '#73d3c3' }, { weight: 1.5 }],
      },
      {
         featureType: 'administrative.land_parcel',
         elementType: 'labels.text.fill',
         stylers: [{ color: '#64779e' }],
      },
      {
         featureType: 'administrative.province',
         elementType: 'geometry.stroke',
         stylers: [{ color: '#4b6878' }],
      },
      {
         featureType: 'landscape.man_made',
         elementType: 'geometry.stroke',
         stylers: [{ color: '#334e87' }],
      },
      {
         featureType: 'landscape.natural',
         elementType: 'geometry',
         stylers: [{ color: '#023e58' }],
      },
      {
         featureType: 'poi',
         elementType: 'geometry',
         stylers: [{ color: '#283d6a' }],
      },
      {
         featureType: 'poi',
         elementType: 'labels.text.fill',
         stylers: [{ color: '#6f9ba5' }],
      },
      {
         featureType: 'poi',
         elementType: 'labels.text.stroke',
         stylers: [{ color: '#1d2c4d' }],
      },
      {
         featureType: 'poi.business',
         stylers: [{ visibility: 'off' }],
      },
      {
         featureType: 'poi.park',
         elementType: 'geometry.fill',
         stylers: [{ color: '#023e58' }],
      },
      {
         featureType: 'poi.park',
         elementType: 'labels.text.fill',
         stylers: [{ color: '#3C7680' }],
      },
      {
         featureType: 'road',
         elementType: 'geometry',
         stylers: [{ color: '#304a7d' }],
      },
      {
         featureType: 'road',
         elementType: 'labels.icon',
         stylers: [{ visibility: 'off' }],
      },
      {
         featureType: 'road',
         elementType: 'labels.text.fill',
         stylers: [{ color: '#98a5be' }],
      },
      {
         featureType: 'road',
         elementType: 'labels.text.stroke',
         stylers: [{ color: '#1d2c4d' }],
      },
      {
         featureType: 'road.highway',
         elementType: 'geometry',
         stylers: [{ color: '#2c6675' }],
      },
      {
         featureType: 'road.highway',
         elementType: 'geometry.stroke',
         stylers: [{ color: '#255763' }],
      },
      {
         featureType: 'road.highway',
         elementType: 'labels.text.fill',
         stylers: [{ color: '#b0d5ce' }],
      },
      {
         featureType: 'road.highway',
         elementType: 'labels.text.stroke',
         stylers: [{ color: '#023e58' }],
      },
      {
         featureType: 'transit',
         stylers: [{ visibility: 'off' }],
      },
      {
         featureType: 'transit',
         elementType: 'labels.text.fill',
         stylers: [{ color: '#98a5be' }],
      },
      {
         featureType: 'transit',
         elementType: 'labels.text.stroke',
         stylers: [{ color: '#1d2c4d' }],
      },
      {
         featureType: 'transit.line',
         elementType: 'geometry.fill',
         stylers: [{ color: '#283d6a' }],
      },
      {
         featureType: 'transit.station',
         elementType: 'geometry',
         stylers: [{ color: '#3a4762' }],
      },
      {
         featureType: 'water',
         elementType: 'geometry',
         stylers: [{ color: '#0e1626' }],
      },
      {
         featureType: 'water',
         elementType: 'labels.text.fill',
         stylers: [{ color: '#4e6d70' }],
      },
   ],
   light: [
      {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }]
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f5f5" }]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
            { color: "#17b7ba" },
            { saturation: -40 },
            { lightness: 55 },
            { weight: 2 }
         ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }]
      },
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{ color: "#757575" },
          { lightness: 55
          }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            { color: "#189082" },
            { saturation: -70 },
            { lightness: 65 }
         ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
            { color: "#c9c9c9" },
            { saturation: -95 },
            { lightness: 45 }
         ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }]
      }
    ]
}

