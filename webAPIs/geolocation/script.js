"use strict";

// getting the geolocator object
function curSuccess(position) {
  const coords = position.coords;
  console.log(`Lat: ${coords.latitude}`);
  console.log(`Long: ${coords.longitude}`);
  console.log(`Accuracy: ${coords.accuracy}`);
}

function curFail(error) {
  console.log(`Error: ${error.code} - ${error.message}`);
}

const options = {};

navigator.geolocation.getCurrentPosition(curSuccess, curFail, options);
