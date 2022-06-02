var searchFormEl = document.querySelector('#search-form');


var apiKey = "6762cf887f4a776350fbebde9a08bf1e";

function weatherApi() {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=35.23&lon=-80.84&appid=${apiKey}';


fetch('weatherApi', {

})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

}
