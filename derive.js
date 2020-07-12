let bikeMap;
bikeMap = L.map("bike-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
  subdomains: "abcd",
  maxZoom: 18
});
//add tiles, markers and panning
tileLayer.addTo(bikeMap);
bikeMap.setView([49.276385, -123.119405], 11);
stanleyParkPoints = [
  [49.29076, -123.14713],
  [49.29328, -123.15043],
  [49.29370, -123.15009],
  [49.29499, -123.15060],
  [49.29770, -123.15455],
  [49.30817, -123.15545],
  [49.31371, -123.14172],
  [49.30694, -123.13597],
  [49.29905, -123.11837],
  [49.29658, -123.13631]
];
stanleyParkLine = L.polyline(stanleyParkPoints, {
    color: "green"
}).addTo(bikeMap);
stanleyParkLine.bindPopup("Stanley Park Sea Wall");
kitsPoints = [
  [49.27811, -123.14610],
  [49.27049, -123.17184],
  [49.27452, -123.21167],
  [49.27811, -123.24326]
];
kitsPoints = L.polyline(kitsPoints, {
  color: "green"
}).addTo(bikeMap);
kitsPoints.bindPopup("Kitsilano Bike Path");
