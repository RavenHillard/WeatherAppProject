function updateWeather(response) {
  let temperatureElement = document.querySelector(#temperature);
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
temperatureElement.innerHTML = Math.round(temperature);
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;

}

function formatDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let timeElement = document.querySelector("#time");
let time = new Date(response.data.time * 1000);
timeElement.innerHTML = formatDate(time);

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature-container");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
  }
  
  function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeather);
  }

  function searchSubmit (event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    searchCity(searchInput.value);
  }
  
  let searchButtonElement = document.querySelector("#search-button");
  searchButtonElement.addEventListener("submit", searchSubmit);

  searchCity("Mexico");
