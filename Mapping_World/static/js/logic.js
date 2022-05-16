
// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [20.0, 100.0],
	zoom: 2.0,
	layers: [satelliteStreets]
});

// Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

d3.json("https://raw.githubusercontent.com/camillecoding/project/main/geo_data.json").then(function(data) {
  console.log(data);
  // This function returns the style data - base color of lime green to all the countries. When fillcolor is deleted you get color:

  function styleInfo(features) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(features.properties.name),
      color: "#000000",
      radius: getRadius(features.properties.name),
      stroke: true,
      weight: 0.5
    };
  }

// These functions maintain lime color for countries (color fill)
function getColor(co2) {
  if (co2 > 5) {
    return "#ea2c2c";
  }
  if (co2 > 4) {
    return "#ea822c";
  }
  if (co2 > 3) {
    return "#ee9c00";
  }
  if (co2 > 2) {
    return "#eecc00";
  }
  if (co2 > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
}

// Countries with a CO2 value of 0 were being plotted with the wrong radius. (additional function)
function getRadius(co2) {
  if (co2 === 0) {
    return 1;
  }
  return co2 * 4;
}

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {

  // We turn each features into a circleMarker on the map.
  pointToLayer: function(features, latlng) {
              console.log(data);
              return L.circleMarker(latlng);
          },
          style: styleInfo,
    // We create a popup for each circleMarker to display info
    onEachFeature: function(features, layer) {
      layer.bindPopup("Country: " + features.properties.name + "test:" + features.properties.years);
    }
  }).addTo(map);


//############################## everything below adds circles to the map ##################################################################################

});
