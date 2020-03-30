let firstMap, tileLayer;
firstMap = L.map("could-be-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);
// Define the features array.
/*let couldBeFeatures;
$.getJSON("https://the-javascripting-english-major.org/v1/could-be.geo.json", function(data){
  // Define the Leaflet layer.
  let couldBeLayer;
  // Iterate over the .features property of the GeoJSON object to
  // create an array of objects (features), with every object’s
  // properties as noted.
  couldBeFeatures = data.features.map(function(feature){
    // This return returns an object.
    return {
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      // Create an L.latLng object out of the GeoJSON coordinates.
      // Remember that in GeoJSON, the coordinates are reversed
      // (longitude, then latitude).
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  // Now create a Leaflet feature group made up of markers for each
  // object in couldBeFeatures.
  couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){
    return L.marker(feature.latLng);
    })
  );
  // Add the layer to the map.
  couldBeLayer.addTo(firstMap);
  // Redraw the map so that all the markers are visible
  // Redraw the map so that all the markers are visible.
 firstMap.fitBounds(couldBeLayer.getBounds());
 // Zoom out one level to give some padding.
 firstMap.zoomOut(1);
});
*/
// Define the features array.
let couldBeFeatures;
$.getJSON("https://the-javascripting-english-major.org/v1/could-be.geo.json", function(data){
  // Define the Leaflet layer.
  let couldBeLayer;
  // Iterate over the .features property of the GeoJSON object to
  // create an array of objects (features), with every object’s
  // properties as noted.
  couldBeFeatures = data.features.map(function(feature){
    // This return returns an object.
    return {
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      // Create an L.latLng object out of the GeoJSON coordinates.
      // Remember that in GeoJSON, the coordinates are reversed
      // (longitude, then latitude).
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  // Now create a Leaflet feature group made up of markers for each
  // object in couldBeFeatures.
  //Add popups to markers
  couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){
  let popupContent, lines;
  popupContent = "<h4>" + feature.name + "</h4>";
  popupContent = popupContent + feature.name + " is mentioned on " + lines + ".<br />";
  popupContent = popupContent + "Read about " + feature.name + " on <a href='"+ feature.wikipedia + "'>Wikipedia</a>.";
  return L.marker(feature.latLng).bindPopup(popupContent);
  })
);
  // Add the layer to the map.
  couldBeLayer.addTo(firstMap);
  // Redraw the map so that all the markers are visible.
  firstMap.fitBounds(couldBeLayer.getBounds());
  // Zoom out one level to give some padding.
  firstMap.zoomOut(1);
});
