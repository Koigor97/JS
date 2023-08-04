'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const url = `https://countries-api-836d.onrender.com/countries/`;

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
        // countriesContainer.style.opacity = 1;
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

const countryData = function(country) {
    const url = `https://restcountries.com/v2/name/${country}`;
    getJSON(url, 'Country not found')
    .then(data => {renderContryInfo(data[0]);
    const neighbourCountry = data[0].borders?.[0];

    if (!neighbourCountry) throw new Error('This Country has no neighbours');
    // country 2
    return getJSON(neighbourCountry, 'Country not found')
    }).then(response => response.json())
     .then(data => renderContryInfo(data, 'neighbour'))
    .catch(err => {
        console.error(`Something went wrong 💥💥💥`);
        renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`)
    }).finally(() => {
        countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function(){
    countryData('iceland');
})
