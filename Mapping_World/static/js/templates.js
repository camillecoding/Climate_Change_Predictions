/////goes after maps = and before L.control.layers

// Create a years label for the slider

const years = [
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995'
    ];
     
  // Actual filter by year function
  
  function filterBy(year) {
      const filters = ['==', 'year', year];
      map.setFilter('co2-circles', filters);
      map.setFilter('co2-labels', filters);
       
      // Set the label to the month
      document.getElementById('year').textContent = years[year];
    }
  
    map.on('load', () => {
      d3.json(
      'https://raw.githubusercontent.com/camillecoding/project/main/geo_data.json',
      jsonCallback
      );
    });
      
  // jsonCallback for the map
  
    function jsonCallback(err,data) {
      if (err) {
        throw err;
      }
    }
  
    // Create a month property value based on time
    // used to filter against.
    data.features = data.features.map((d) => {
      d.properties.year = new Date(d.properties.time).getFullYear();
      return d;
    });
    
    // add Source
  
    map.addSource('co2 emissions', {
    'type': 'geojson',
    data: data
    });
    
    
    // add Layer
  
    map.addLayer({
      'id': 'co2-circles',
      'type': 'circle',
      'source': 'co2 emissions',
      'paint': {
        'circle-color': [
          'interpolate',
          ['linear'],
          ['get', 'years'],
          6,
          '#FCA107',
          8,
          '#7F3121'
        ],
        'circle-opacity': 0.75,
        'circle-radius': [
          'interpolate',
          ['linear'],
          ['get', 'years'],
          6,
          20,
          8,
          40
        ]
      }
    });
  
  
    map.addLayer({
      'id': 'co2-labels',
      'type': 'symbol',
      'source': 'co2 emissions',
      'layout': {
      'text-field': ['concat', ['to-string', ['get', 'mag']], 'm'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 12
      },
      'paint': {
      'text-color': 'rgba(0,0,0,0.5)'
      }
      });
       
      // Set filter to first year of the dataset
      // 0 = 1990
      filterBy(0);
       
      document.getElementById('slider').addEventListener('input', (e) => {
      const year = parseInt(e.target.value, 10);
      filterBy(month);
      });


//////// Creating geo json layer (came right after radius maginification)

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng);
      },
    // We set the style for each circleMarker using our styleInfo function.
  style: styleInfo,
   // We create a popup for each circleMarker to display the magnitude and location of the earthquake
   //  after the marker has been created and styled.
   onEachFeature: function(feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
  }
}).addTo(allEarthquakes);

//############################## everything below adds circles to the map ##################################################################################

});

// 1. Add a 2nd layer group for the tectonic plate data.
let allEarthquakes = new L.LayerGroup();
let tectonicPlates = new L.LayerGroup();
let majorEQ = new L.LayerGroup();

// 2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
  "Earthquakes": allEarthquakes,
  "Tectonic Plates": tectonicPlates,
  "Major Earthquakes": majorEQ
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {

  // This function returns the style data for each of the earthquakes we plot on
  // the map. We pass the magnitude of the earthquake into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the color of the marker based on the magnitude of the earthquake.
  function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng);
      },
    // We set the style for each circleMarker using our styleInfo function.
  style: styleInfo,
   // We create a popup for each circleMarker to display the magnitude and location of the earthquake
   //  after the marker has been created and styled.
   onEachFeature: function(feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
  }
}).addTo(allEarthquakes);


//###############################################################################################################



 // Then we add the earthquake layer to our map.
 allEarthquakes.addTo(map);

//############################## DELIVERABLE 2 ##################################################################################

// 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.
let majorearth = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
d3.json(majorearth).then(function(data) {

  // 4. Use the same style as the earthquake data.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  
  // 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
  function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    return "#B0B0B0";
  }
  
  // 6. Use the function that determines the radius of the earthquake marker based on its magnitude.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }
  
  // 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
  // sets the style of the circle, and displays the magnitude and location of the earthquake
  //  after the marker has been created and styled.
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(majorEQ);
  });
  // 8. Add the major earthquakes layer to the map.
  majorEQ.addTo(map);
  // 9. Close the braces and parentheses for the major earthquake data.
});

// Here we create a legend control object.
let legend = L.control({
  position: "bottomright"

});

// Then add all the details for the legend
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");

  const magnitudes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const colors = [
    "#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#ea2c2c"
  ];

// Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < magnitudes.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
    }
    return div;
};

// Finally, we our legend to the map.
legend.addTo(map);

  // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
  let tectonicdata = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";
  d3.json(tectonicdata).then(function(data) {
    L.geoJson(data,
      {color: "#B03A2E",
      weight: 5
      }).addTo(tectonicPlates);

  });
