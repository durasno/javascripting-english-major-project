//let geocodeOut;
let budgetMap, budgetTileLayer;
budgetMap = L.map("police-budgets-map");
budgetTileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(budgetMap);
budgetMap.setView([40.730833, -73.9975], 16);

var out;
function geocode(place){
  $.getJSON("http://nominatim.openstreetmap.org/search?format=json&limit=5&q=" + "Atlanta", function(data){
      out = data[0].lat;
      //console.log(out);
      return(out);
  });
}
function disp(x){
  console.log(x);
}
const promise = geocode();
const promise2 = promise.then(disp);
//geocode().then(disp);
//geocodeString("Atlanta Georgia");
//console.log(out);
//console.log(geocodeString("Atlanta Georgia"));
//console.log(geocodeOut);
//console.log(geocodeString("Atlanta Georgia"));
