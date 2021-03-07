

var currentAPI = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=14bc8790460d5c199a2e1724c8bc204d";
var fiveDayAPI = "http://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid="

//variables pertaining to todays weather that need to be filled in 
var cityNameDisplay = $(".city-name");
var currentDateDisplay = $(".todays-date");
var tempDisplay = $(".temperature");
var humidityDisplay = $("humidity");
var windSpeedDisplay = $("wind-speed");
var uvIndexDisplay = $("uv-index")

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

    })  
        

}