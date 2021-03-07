

var currentAPI = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=14bc8790460d5c199a2e1724c8bc204d";
//var fiveDayAPI = "http://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid="

//variables pertaining to todays weather that need to be filled in 
var cityNameDisplay = $(".city-name");
var currentDateDisplay = $(".todays-date");
var tempDisplay = $(".temperature");
var humidityDisplay = $(".humidity");
var windSpeedDisplay = $(".wind-speed");
var uvIndexDisplay = $(".uv-index")

//used moment to get the current date in the mm/dd/yyyy formatt 
var today = moment().format('L');
//assigned it to display on the page in the div made for the date
currentDateDisplay.append(today);


var searchBtn = $(".form-inline");
searchBtn.on("click" , logUserWord);

function logUserWord(event){
    event.preventDefault();
    var userSearchEL = $("#user-search");
    var userSearch = userSearchEL.val();
    console.log(userSearch)
    var currentWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&appid=14bc8790460d5c199a2e1724c8bc204d";
    console.log(currentWeather);

    $.ajax({
        url: currentWeather,
        method: "GET"
        }).then(function(response){
        console.log(response);
        cityNameDisplay.text(response.name);
        cityNameDisplay.append("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='" + response.weather[0].main + "' />" )
        var highTempC1 = (Math.floor(1.8*(response.main.temp - 273))+32);
        tempDisplay.text(highTempC1);
        tempDisplay.append("&deg;F");
        humidityDisplay.text(response.main.humidity);
        humidityDisplay.append("%");
        windSpeedDisplay.text(response.wind.speed);
        windSpeedDisplay.append("MPH");

        var latt = response.coord.lat;
        var long = response.coord.lon;

        var UVurl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latt + "&lon=" + long + "&appid=14bc8790460d5c199a2e1724c8bc204d";
        $.ajax({
            url: UVurl,
            method: "GET"
        }).then(function(response){
            uvIndexDisplay.text(response.daily[0].uvi);
        });
    })  
        

}