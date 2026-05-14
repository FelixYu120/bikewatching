import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

console.log('Mapbox GL JS Loaded:', mapboxgl);
mapboxgl.accessToken = 'pk.YOUR_ACCESS_TOKEN_HERE';

const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mmapbox://styles/playforlove/cmp4xtupq003601shdgtceum7', 
  center: [-71.09415, 42.36027], 
  zoom: 12, 
  minZoom: 5, 
  maxZoom: 18, 
});

map.addControl(new mapboxgl.NavigationControl());
