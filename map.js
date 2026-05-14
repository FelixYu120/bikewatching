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

const bikeLaneStyle = {
  'line-color': '#32D400',  // A bright green
  'line-width': 3,          // Thickness of the lines
  'line-opacity': 0.4       // 40% opaque so we can see the streets underneath
};

map.on('load', () => {
  map.addSource('boston_route', {
    type: 'geojson',
    data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson'
  });

  map.addLayer({
    id: 'bike-lanes-boston',
    type: 'line',
    source: 'boston_route',
    paint: bikeLaneStyle 
  });

  map.addSource('cambridge_route', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson'
  });

  map.addLayer({
    id: 'bike-lanes-cambridge',
    type: 'line',
    source: 'cambridge_route',
    paint: bikeLaneStyle 
  });

});
