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

const options = {
  enableHighAccuracy: true, // Use GPS if possible
  timeout: 5000, // Time in milliseconds before the error callback is invoked
  maximumAge: 0, // How long the browser should cache the location
};

navigator.geolocation.getCurrentPosition(curSuccess, curFail, options);
