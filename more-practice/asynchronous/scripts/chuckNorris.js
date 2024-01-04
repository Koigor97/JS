const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// the api endpoint
const URL = "https://api.chucknorris.io/jokes/random";

// using the XMLHttpRequest Object
const xhr = new XMLHttpRequest();

// function that invoke the request
function getRandomJoke() {
  xhr.open("GET", URL);
  // function for getting the jokes
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      jokeDiv.innerHTML = `${data.value}`;
    }
  };

  xhr.send();
}

jokeBtn.addEventListener("click", getRandomJoke);
document.addEventListener("DOMContentLoaded", getRandomJoke);
