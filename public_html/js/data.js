// test global data
var geoData = [
                        [1, 1, "#FF0000"],
                        [350, 250, "#00FF00"],
                        [100,100, "#00FF00"],
                        [10, 100, "#FF0000"],
                        [50, 500, "#FF0000"],
                        [350, 550, "#00FF00"],
                        [325, 380, "#00FF00"],
                        [840, 280, "#FF0000"]
  ];
              
  //!!!      ========================= ===========================             
var realData = {
    "type": "FeatureCollection",

    "features": [{
        "type": "Feature",
        "properties": {
            "color": "red"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.55572509765625, 50.440014664018136]
        }
    }, {
        "type": "Feature",
        "properties": {
            "color": "blue"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.44220118709643, 50.537185668945312 ]
        }
    }, {
        "type": "Feature",
        "properties": {
            "color": "green"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.61065673828125, 50.424706174038526 ]
        }
    }, {
        "type": "Feature",
        "properties": {
            "color": "purple"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.45135498046875, 50.450509053586615]
        }
    }]
}