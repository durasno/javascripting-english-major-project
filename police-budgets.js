//let geocodeOut;
let budgetMap, budgetTileLayer;
budgetMap = L.map("police-budgets-map");
budgetTileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(budgetMap);
budgetMap.setView([33.753746, -84.386330], 16);

let policeBudgetFeatures;
$.getJSON("https://raw.githubusercontent.com/durasno/javascripting-english-major-project/master/data/police-budgets.geojson", function(data){
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
  // Now create a Leaflet feature group made up of markers for each
  // object in policeBudgetFeatures.
  policeBudgetLayer = L.featureGroup(policeBudgetFeatures.map(function(feature){
    //let marker = L.marker(feature.latLng);
    //return L.marker(feature.latLng);
    let pct_num = parseFloat(feature.pct_gen_20) / 100;
    let options = {
    	data: {
    		//"dataPoint1": Math.random() * 20,
        "Police Funding: ": pct_num,
    		"Other Funding": 1 - pct_num
    	},
    	chartOptions: {
    		"Police Funding: ": {
    			fillColor: "red",
    			//minValue: 0,
    			//maxValue: 20,
    			maxHeight: 20,
    			displayText: function (value) {
    				return feature.pct_gen_20 + " of General Budget";
    			}
    		},
    		"Other Funding": {
    			fillColor: "blue",
    			//minValue: 0,
    			//maxValue: 20,
    			maxHeight: 20,
    			displayText: function (value) {
    				return "";
    			}
    		},
    	},
    	//weight: 1//,
      //opacity:1,
      //fill: 1,
      //fillColor: "green",
      fillOpacity:0.8//,
    ///... // Other L.Path style options
    };

    /*let BarChartMarker = new L.BarChartMarker(new L.LatLng(33.753746, -84.386330), options).addTo(budgetMap);//works*/

    let PieChartMarker = new L.PieChartMarker(feature.latLng, options);//.addTo(budgetMap);

  /*marker.bindPopup("City: " + feature.city + "<br>" + "% General Fund (2017): " + feature.pct_gen_17);*/
    //return marker;
    return PieChartMarker;
    })
  );

  // Add the layer to the map.
  policeBudgetLayer.addTo(budgetMap);
  // Redraw the map so that all the markers are visible.
  budgetMap.fitBounds(policeBudgetLayer.getBounds());
  // Zoom out one level to give some padding.
  budgetMap.zoomOut(1);
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
