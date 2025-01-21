mapboxgl.accessToken = 'pk.eyJ1Ijoibm9lc2ltaWMwMDAiLCJhIjoiY200Z2hmYzlrMWg5aDJxcTAzMm9pNG52YiJ9.ADQte7yxADlE6fpvEvy84g';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-95.511636, 29.800325],
    zoom: 18,
    bearing: 90
});

const amenities = [
  {
    name: 'Main Leasing Office',
    color: '#dc3545',
    lngLat: [-95.511718,29.800401]
  },

  {
    name: 'Metro Bus Stop #26',
    color: '#dc3545',
    lngLat: [-95.511718,29.800678]
  },

  {
    name: 'Swimming Pool & Deck',
    color: '#dc3545',
    lngLat: [-95.511595,29.800212]
  },

  {
    name: 'Outdoor Locker MailBoxes',
    color: '#dc3545',
    lngLat: [-95.511758,29.800175]
  }
]

amenities.forEach(({name, color, lngLat}) => {
  const popup = new mapboxgl.Popup({offset: 25}).setHTML(`<p style="color: ${color};">${name}</p>`);

  new mapboxgl.Marker({
    color,
    scale: 0.5
  })
  .setLngLat(lngLat)
  .setPopup(popup)
  .addTo(map);
});
