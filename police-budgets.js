let budgetMap, budgetTileLayer;
budgetMap = L.map("police-budgets-map");
budgetTileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(budgetMap);
budgetMap.setView([40.730833, -73.9975], 16);
/*$.get(location.protocol + '//nominatim.openstreetmap.org/search?format=json&q='+ "Atlanta Georgia", function(data){
       console.log(data);
     });*/
