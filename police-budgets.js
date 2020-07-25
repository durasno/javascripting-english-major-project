//let geocodeOut;
let budgetMap, budgetTileLayer;
budgetMap = L.map("police-budgets-map");
budgetTileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(budgetMap);
budgetMap.setView([40.730833, -73.9975], 16);

let policeBudgetFeatures;
$.getJSON("police-budgets.geojson", function(data){
  // Define the Leaflet layer.
  let policeBudgetLayer;
  // Iterate over the .features property of the GeoJSON object to
  // create an array of objects (features), with every object’s
  // properties as noted.
  policeBudgetFeatures = data.features.map(function(feature){
    // This return returns an object.
    return {
      city: feature.properties.city,
      pct_gen_17: feature.properties.pct_gen_fund_17,
      per_cap_op_17: feature.properties.per_capita_operating_17,
      police_spend_tot_op_17: feature.properties.police_spending_total_operating_17,
      pct_gen_20: feature.properties.pct_general_fund_20,
      per_cap_op_20: feature.properties.per_capita_operating_20,
      police_spend_tot_op_20: feature.properties.police_spending_total_operating_20,
      fy20_src: feature.properties.police_spending_total_operating_20,
      // Create an L.latLng object out of the GeoJSON coordinates.
      // Remember that in GeoJSON, the coordinates are reversed
      // (longitude, then latitude).
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  console.log(policeBudgetFeatures[1].properties.city);
  // Now create a Leaflet feature group made up of markers for each
  // object in policeBudgetFeatures.
  /*policeBudgetLayer = L.featureGroup(policeBudgetFeatures.map(function(feature){
    return L.marker(feature.latLng);
    })
  );
  // Add the layer to the map.
  policeBudgetLayer.addTo(map);
  // Redraw the map so that all the markers are visible.
  map.fitBounds(policeBudgetLayer.getBounds());
  // Zoom out one level to give some padding.
  map.zoomOut(1);*/
});




/*var out; //function to geocode address data, continue developing for future
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
const promise2 = promise.then(disp);*/
//geocode().then(disp);
//geocodeString("Atlanta Georgia");
//console.log(out);
//console.log(geocodeString("Atlanta Georgia"));
//console.log(geocodeOut);
//console.log(geocodeString("Atlanta Georgia"));
