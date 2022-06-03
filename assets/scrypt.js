var searchBtn = document.querySelector('#search-btn');
var apiKey = "6762cf887f4a776350fbebde9a08bf1e";
var currentCityName = document.querySelector('.city-name')
var currentTemp = document.querySelector('.temp')
var currentHumidity = document.querySelector('.humidity')
var currentWind = document.querySelector('.wind')
var currentUvi = document.querySelector('.uvi')
var fiveDayContainer = document.querySelector('.five-day')

searchBtn.addEventListener('click', getCity)

function getCity(e) {
  e.preventDefault()
  var city = document.getElementById('searched-city').value
  getCurrentForecast(city)
}

function getCurrentForecast(value) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=6762cf887f4a776350fbebde9a08bf1e&units=imperial")
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);

      var lat = data.coord.lat;
      var lon = data.coord.lon;
      getFiveDay(lat, lon);

      currentCityName.textContent = data.name;
      currentTemp.textContent = "Temp: " + data.main.temp;
      currentHumidity.textContent = "Humidity: " + data.main.humidity;
      currentWind.textContent = "Wind: " + data.wind.speed + "/mph";
      // currentUvi.textContent = fiveData.current.uvi;
    })
}

function getFiveDay(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=6762cf887f4a776350fbebde9a08bf1e&units=imperia')
    .then(function (response) {
      return response.json();
    })
    .then(function (fiveData) {
      console.log(fiveData);

      for (var i = 1; i < 6; i++) {
        var fiveDayCard = document.createElement('div')
        fiveDayCard.classList.add('card')
        fiveDayContainer.append(fiveDayCard)
      }
      currentUvi.textContent = "UVI: " + fiveData.current.uvi;
    });
}