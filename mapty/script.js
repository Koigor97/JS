'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

///////////////////////////////////////////////////////////////////
// HTML elements selected
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

///////////////////////////////////////////////////////////////////
// Getting the user's current location
const nav = navigator.geolocation.getCurrentPosition(function (position) {
    const {
        latitude
    } = position.coords;
    const {
        longitude
    } = position.coords;

    const coordinates = [latitude, longitude]

    map = L.map('map').setView(coordinates, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker(coordinates).addTo(map)
        .bindPopup('Hello Koigor')
        .openPopup();


    map.on('click', function(mapEve) {
        mapEvent = mapEve
        form.classList.remove('hidden')
        inputDistance.focus()
        
    })


}, function () {
    alert('Could not get your location')
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Clearing input fields
    inputDistance.value = inputCadence.value = inputElevation.value = inputDuration.value = '';

    // Display marker
    console.log(mapEvent);
        const {lat, lng} = mapEvent.latlng;
        L.marker([lat, lng]).addTo(map).bindPopup('Let Run', {
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup'
        }).openPopup();
})

inputType.addEventListener('change', function() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})