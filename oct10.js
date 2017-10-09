console.log("this working?")

var myResults = [
          {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}
        ]

myResults.forEach(function(site){
  console.log(site["name"]);
  console.log(site["location"]["lat"]);
  console.log(site["location"]["long"]);
});

distanceFromMe = [];

var findDistance = function (lat, long) {
  x1 = lat;
  y1 = long;

  myResults.forEach(function(site){
    siteName = site["name"];
    x2 = site["location"]["lat"];
    y2 = site["location"]["long"];

  Math.sqrt(9); //3
  xSquare = Math.pow((x2 - x1), 2);
  ySquare = Math.pow((y2 - y1), 2);

  addSquares = (xSquare + ySquare)
  distance = Math.sqrt(addSquares)

  distanceFromMe.push({name:siteName,distance:distance});
  distanceFromMe = distanceFromMe.sort(function(a, b){return a.distance - b.distance});

  })
  // return distanceFromMe;
  for (var j = 0; j <distanceFromMe.length; j++){
    console.log(distanceFromMe[j].name + ", " + distanceFromMe[j].distance)
  };
}





// current location:
// x1 =  -37.782489
// y1 =  144.980757
