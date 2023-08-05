'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const url = `https://countries-api-836d.onrender.com/countries/`;
const imageBox = document.querySelector('.images');

///////////////////////////////////////
const renderContryInfo = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>`;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}


const renderError = function(message) {
    countriesContainer.insertAdjacentText('beforeend', message)
} 

const getJSON = function(url, errMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    
        return response.json()
    })
}

///////////////////////////////////////////////////////////////////
// THE OLD WAY OF DOING GETTING DATA FROM AN API
// const getCountryAndNeighbour = function (country) {
//     // Ajax calling the first country
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         // render first country
//         renderContryInfo(data);
//         // getting the neighbouring country
//         const neighbourCountry= data.borders?.[1];

//         if (!neighbourCountry) return
//         // Ajax call for neighbour country
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbourCountry}`);
//         request2.send();

//         request2.addEventListener('load', function(){
//             const data2 = JSON.parse(this.responseText);
//             renderContryInfo(data2, 'neighbour');
//         })

//     })
// };

// getCountryAndNeighbour('sierra leone');

/////////////////////////////////////////////////////////////////////
// THE MODERN WAY
// const countryData = function(country) {
//     const url = `https://restcountries.com/v2/name/${country}`;
//     getJSON(url, 'Country not found')
//     .then(data => {renderContryInfo(data[0]);
//     const neighbourCountry = data[0].borders?.[0];

//     if (!neighbourCountry) throw new Error('This Country has no neighbours');
//     // country 2
//     return getJSON(neighbourCountry, 'Country not found')
//     }).then(response => response.json())
//      .then(data => renderContryInfo(data, 'neighbour'))
//     .catch(err => {
//         console.error(`Something went wrong 💥💥💥`);
//         renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`)
//     }).finally(() => {
//         countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', function(){
//     countryData('iceland');
// })

///////////////////////////////////////////////////////////////
// experimenting how the event loop works and the priority
// the microtask qeue (for fetch function) have over the callback qeue
// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test End..');
// Promise.resolve('Resolved promise 2').then(res => console.log(res));
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 3').then(res => {
//     for (let i = 0; i < 10000; i++) console.log(res)});

// Building a Promise with the 'new Promise' object
// const isLotteryWon = new Promise(function (resolve, reject) {
//     console.log('The Lottery has begun 🔮.....');
//     setTimeout(function () {
//         if ((Math.random() * 100) + 1 >= 60) {
//             resolve('You WON the Lottery 🎟️ 💵');
//         } else reject(new Error('You LOST your money 💩'));
//     }, 3000)

// });

// isLotteryWon.then(result => console.log(result)).catch(err => console.error(err));

// promisifying the settimer function
// const letsWait = function(sec) {
//     return new Promise (resolve => setTimeout(resolve, sec * 1000))
// }

// letsWait(3).then(() => {
//     console.log('waited for 3 sec')
//     return letsWait(2)
// }).then(() => console.log('waited for 2 sec'));

// promisifying the geolocation
// const getPosition = function(){
//     console.log('Getting my position');
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// } 

// getPosition().then(pos => console.log(pos))

// //////////////////////////////////////////////////////////////////
// THE MORE MODERN WAY
const whereAmI = async function(country) {
    try{
        const response = await fetch(`https://restcountries.com/v2/name/${country}`)
        console.log(response);

        if (!response.ok) throw new Error(`Something went wrong - ${response.status}`);

        const data = await response.json()
        console.log(data[0]);
        renderContryInfo(data[0])
    } catch(err) {
        console.error(err.message)
    }

}

whereAmI('portugal')
// console.log('I logged FIRST');

// const get3CountriesAndCapitals = async function(c1, c2, c3) {
//     try {
        // using the .all Promise combinator
//         const data = await Promise.all([getJSON(`https://restcountries.com/v2/name/${c1}`), getJSON(`https://restcountries.com/v2/name/${c2}`), getJSON(`https://restcountries.com/v2/name/${c3}`)])

//         console.log(data);

//         const capitalCities = data.map(d => d[0].capital)
//         console.log(capitalCities);
        
//     } catch(err){
//         console.log(err.message)
//     } 

// }

// get3CountriesAndCapitals('canada', 'germany', 'spain') 

// more Promise combinators 
// Promise.race
// (async function(){
//     const whosFirst = Promise.race([getJSON(`https://restcountries.com/v2/name/canada`), getJSON(`https://restcountries.com/v2/name/france`), getJSON(`https://restcountries.com/v2/name/mexico`)]);

//     console.log(whosFirst[0]);
// })();

// Promise.allSettled
// Promise.allSettled([
//     Promise.resolve(`It's a success`),
//     Promise.reject(`🙁 Failed request`),
//     Promise.resolve(`It's another success`)
// ]).then(result => console.log(result));

// Promise.any
// Promise.any([
//     Promise.reject(`🙁 Failed request`),
//     Promise.resolve(`It's another success`),
//     Promise.resolve(`It's a success`),
// ]).then(result => console.log(result));