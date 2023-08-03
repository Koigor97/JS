'use strict';

///////////////////////////////////////////////////////////////////
// HTML elements selected
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


///////////////////////////////////////////////////////////////////////
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-8);

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // the workout description / detail
        this.description = `${this.theType[0].toUpperCase()}${this.theType.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
    }
}


//////////////////////////////////////////////////////////////////////////
class Running extends Workout {
    theType = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calculatePace();
        this._setDescription();

    }

    calculatePace() { // min/km
        this.pace = this.duration / this.distance
        return this.pace
    }
}


class Cycling extends Workout {
    theType = 'cycling';

    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calculateSpeed();
        this._setDescription();
    }

    calculateSpeed() { //km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed
    }
}


class App {
    // private properties only available to the App class and not 
    //the object of the App class
    #map;
    #mapZoom = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        // get user's postion
        this._getPosition();
        // get data from local storage
        this._getLocalStorage();
        // event hanlders
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))

    }

    _getPosition() {
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
            alert('Could not get your location')
        })
    };

    _loadMap(position) {
        const {
            latitude
        } = position.coords;
        const {
            longitude
        } = position.coords;
        const coordinates = [latitude, longitude]
        //instantiating a map object from the Leaflet constructor
        this.#map = L.map('map').setView(coordinates, this.#mapZoom);;
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(this.#map);
        // applying a click event on the map to show the input form
        // this event handler is from Leaflet not JavaScript
        this.#map.on('click', this._showForm.bind(this))
        // rendering the popups pins on the map 
        this.#workouts.forEach(work => this._renderWorkoutMarker(work));
    }


    _showForm(mapEve) {
        this.#mapEvent = mapEve;
        form.classList.remove('hidden')
        inputDistance.focus()
    }


    _hideForm() {
        inputDistance.value = inputCadence.value = inputElevation.value = inputDuration.value = '';
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);

    }


    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }


    _newWorkout(e) {
        e.preventDefault();

        // helper functions checking inputs validity
        const areInputsValid = (...inputs) => inputs.every(input => Number.isFinite(input));
        // checking if inputs are postive
        const areInputsPositive = (...inputs) => inputs.every(input => input > 0);
        // Get data from the form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {
            lat,
            lng
        } = this.#mapEvent.latlng;
        // declaring a empty workout to be later given the a class
        //object as a value
        let workout;

        // if workout is running, create running object
        if (type === 'running') {
            const cadence = +inputCadence.value;
            //check if data is valid
            if (!areInputsValid(distance, duration, cadence) ||
                !areInputsPositive(distance, duration, cadence))
                return alert('Inputs have to be positive number')

            // Add new object to workout array
            workout = new Running([lat, lng], distance, duration, cadence);
        }

        // if workout is cycling, create cycling object
        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            //check if data is valid
            if (!areInputsValid(distance, duration, elevation) ||
                !areInputsPositive(distance, duration))
                return alert('Inputs have to be positive number')

            // Add new object to workout array
            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        // Add new object to workouts array
        this.#workouts.push(workout);
        // render workout on map as a maker
        this._renderWorkoutMarker(workout);
        // render the workout on list
        this._renderWorkout(workout);
        // Hide form and clear input fields
        this._hideForm();
        // Set local storage to all workouts
        this._setLocalStorage();



    };


    _renderWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map).bindPopup(`${workout.theType === 'running' ? '🏃🏽‍♂️' : '🚴🏾‍♀️'} ${workout.description}`, {
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.theType}-popup`
        }).openPopup();
    }

    _renderWorkout(workout) {
        let html = `
            <li class="workout workout--${workout.theType}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${workout.theType === 'running' ? '🏃🏽‍♂️' : '🚴🏾‍♀️'}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>
            `;
        

        if (workout.theType === 'running') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>
            `;
        }

        if (workout.theType === 'cycling') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>
            `;
        }

        form.insertAdjacentHTML('afterend', html);
    }


    // the function moves you to popup pin when you
    //click on the workout description
    _moveToPopup(e) {
        const theWorkout = e.target.closest('.workout');

        if(!theWorkout) return;

        const workoutId = this.#workouts.find(theId => theId.id === theWorkout.dataset.id);

        this.#map.setView(workoutId.coords, this.#mapZoom, {
            animate: true,
            pan: {duration: 1}
        })
    }


    // setting local storage
    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }


    //getting local storage
    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));

        if (!data) return;

        this.#workouts = data;
        this.#workouts.forEach(work => this._renderWorkout(work));
    }

    clearWorkoutList() {
        localStorage.removeItem('workouts');
        location.reload();
    }
}


const app = new App();

///////////////////////////////////////////////////////////////////
// Getting the user's current location