"use strict";
fetch("https://api.github.com/users/koigor97")
  .then((res) => res.json())
  .then((data) => console.log(data));
