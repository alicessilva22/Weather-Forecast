var searchBtn = document.querySelector('#search-btn');
// api id given by One Weather
var apiKey = "6762cf887f4a776350fbebde9a08bf1e";
var currentCityName = document.querySelector('.city-name')
var currentTemp = document.querySelector('.temp')
var currentHumidity = document.querySelector('.humidity')
var currentWind = document.querySelector('.wind')
var currentUvi = document.querySelector('.uvi')
var fiveDayContainer = document.querySelector('.five-day')


// This function will allow the click of the button to grab the city input on search bar
searchBtn.addEventListener('click', getCity)

function getCity(e) {
  e.preventDefault()
  var city = document.getElementById('searched-city').value
  getCurrentForecast(city)
}

// This funcion inserts the city searched in the api url
function getCurrentForecast(value) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=6762cf887f4a776350fbebde9a08bf1e&units=imperial")
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);

      // Latitude and Longitude of the city searched is logged in the console       

      var lat = data.coord.lat;
      var lon = data.coord.lon;
      getFiveDay(lat, lon);

      currentCityName.textContent = data.name;
      currentTemp.textContent = "Temp: " + data.main.temp;
      currentHumidity.textContent = "Humidity: " + data.main.humidity;
      currentWind.textContent = "Wind: " + data.wind.speed + "/mph";
      // UVI data is not shown in the current api
    })
}

// The api below renders a five-day forecast and uvi
function getFiveDay(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=6762cf887f4a776350fbebde9a08bf1e&units=imperia')
    .then(function (response) {
      return response.json();
    })
    .then(function (fiveData) {
      console.log(fiveData);

      for (var i = 1; i < 6; i++) {
        var fiveDayCard = document.createElement('div')
        
        // var fiveIndex = i;
        // // var Date = new Date(fiveData.daily[fiveIndex].dt * 1000);
        
        fiveDayCard.classList.add('card')
        fiveDayContainer.append(fiveDayCard)

        var fiveDateEl = document.createElement('p');

        var fiveTempEl = document.createElement('p');

        var fiveHumidityEl = document.createElement('p');

        fiveHumidityEl.innerHTML = "Humidity: " + (fiveData.daily[i].humidity) + "%";

        fiveTempEl.innerHTML = "Temp: " + (fiveData.daily[i].temp) + " &#176F";


        fiveDayCard.append(fiveDateEl)

        fiveDayCard.append(fiveTempEl)

        fiveDayCard.append(fiveHumidityEl)
        
        
      }
      currentUvi.textContent = "UVI: " + fiveData.current.uvi;


    // var dayOneMax = fiveData.dayly.1.temp.max
    // console.log(dayOneMax);
    });
}