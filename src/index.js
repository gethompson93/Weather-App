let now = new Date();
let h1 = document.querySelector("h1");
let date = now.getDate();
let minute = now.getMinutes();
if (minute < 10) {
  minute = 0;
}
let hour = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

h1.innerHTML = `${day}, ${hour}:${minute}`;

//////

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#cityName");
  let cityInput = document.querySelector("#searchCity");
  cityElement.innerText = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
searchForm.addEventListener("click", search);

/// geo location ///
/// when a user searches for a city (example: New York), ///
//// it should display the name of the city on the result page and the current temperature of the city.///

function getPosition(position) {
  let apiKey = "c84a9ba5e87b5fddad29cc4b8603e9ad";
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then((response) => showPosition(response.data));
}

function showPosition(data) {
  let cityName = document.querySelector("#cityName");
  cityName.innerHTML = data.name;
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(data.main.temp);
}

function showTemperature(data) {
  let cityName = document.querySelector("#cityName");
  cityName.innerHTML = data.name;
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(data.main.temp);
}

let button = document.querySelector("#locationButton");
button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(getPosition);
});
