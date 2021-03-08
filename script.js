//var currentAPI = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=14bc8790460d5c199a2e1724c8bc204d";
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

        var UVurl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latt + "&lon=" + long + "&exclude=hourly,currentd&appid=14bc8790460d5c199a2e1724c8bc204d";
        $.ajax({
            url: UVurl,
            method: "GET"
        }).then(function(response){
            uvIndexDisplay.text(response.daily[0].uvi);
            console.log(response);
            console.log(response.daily[0].temp.day);
            console.log(response.daily[0].humidity);
            var dayOneDate = moment().add(1, 'days').format('L')
            console.log(dayOneDate);
            var dayOneDateEl =$(".day-one-date")
            dayOneDateEl.text(dayOneDate);
            var dayOneTempEl = $(".day-one-temp");
            var dayOneTemp = (Math.floor(1.8*(response.daily[1].temp.day - 273))+32);
            dayOneTempEl.text(dayOneTemp);
            dayOneTempEl.append("&deg;F")
            var dayOneHumidEl = $(".day-one-humid")
            var dayOneHumid = response.daily[1].humidity
            dayOneHumidEl.text(dayOneHumid)
            dayOneHumidEl.append("%")

            var daytwoDate = moment().add(2, 'days').format('L')
            console.log(daytwoDate);
            var daytwoDateEl =$(".day-two-date")
            daytwoDateEl.text(daytwoDate);
            var daytwoTempEl = $(".day-two-temp");
            var daytwoTemp = (Math.floor(1.8*(response.daily[2].temp.day - 273))+32);
            daytwoTempEl.text(daytwoTemp);
            daytwoTempEl.append("&deg;F")
            var daytwoHumidEl = $(".day-two-humid")
            var daytwoHumid = response.daily[2].humidity
            daytwoHumidEl.text(daytwoHumid)
            daytwoHumidEl.append("%")


            var daythreeDate = moment().add(3, 'days').format('L')
            console.log(daythreeDate);
            var daythreeDateEl =$(".day-three-date")
            daythreeDateEl.text(daythreeDate);
            var daythreeTempEl = $(".day-three-temp");
            var daythreeTemp = (Math.floor(1.8*(response.daily[3].temp.day - 273))+32);
            daythreeTempEl.text(daythreeTemp);
            daythreeTempEl.append("&deg;F")
            var daythreeHumidEl = $(".day-three-humid")
            var daythreeHumid = response.daily[3].humidity
            daythreeHumidEl.text(daythreeHumid)
            daythreeHumidEl.append("%")


            var dayfourDate = moment().add(4, 'days').format('L')
            console.log(dayfourDate);
            var dayfourDateEl =$(".day-four-date")
            dayfourDateEl.text(dayfourDate);
            var dayfourTempEl = $(".day-four-temp");
            var dayfourTemp = (Math.floor(1.8*(response.daily[4].temp.day - 273))+32);
            dayfourTempEl.text(dayfourTemp);
            dayfourTempEl.append("&deg;F")
            var dayfourHumidEl = $(".day-four-humid")
            var dayfourHumid = response.daily[4].humidity
            dayfourHumidEl.text(dayfourHumid)
            dayfourHumidEl.append("%")


            var dayfiveDate = moment().add(5, 'days').format('L')
            console.log(dayfiveDate);
            var dayfiveDateEl =$(".day-five-date")
            dayfiveDateEl.text(dayfiveDate);
            var dayfiveTempEl = $(".day-five-temp");
            var dayfiveTemp = (Math.floor(1.8*(response.daily[5].temp.day - 273))+32);
            dayfiveTempEl.text(dayfiveTemp);
            dayfiveTempEl.append("&deg;F")
            var dayfiveHumidEl = $(".day-five-humid")
            var dayfiveHumid = response.daily[5].humidity
            dayfiveHumidEl.text(dayfiveHumid)
            dayfiveHumidEl.append("%")
            // for(var i = 0; i < response.daily[5]; i++){
            //     var fiveDayForecast = $(".five-day")
            //     var forecastDate = moment.utc(response.daily[i].dt * 1000).format("dddd, MMM DD")
            //     fiveDayForecast.append("<div class='card col-3'><div class='card-body'><h3 class='date'></h3><img class='icon'><div class='row'><h4>Temp: </h4><h4 class='temp'></h4></div><div class='row'><h4>Humidity: </h4><h4 class='humidity'></h4></div></div></div>");
            //     var date = $(".date")
            //     date.text(forecastDate);
            //     var temp = $(".temp");
            //     var dayTemp = (Math.floor(1.8*(response.daily[i].temp.day - 273))+32);
            //     temp.text(dayTemp);
            //     temp.append("&deg;F")
            //     var humidity = $('.humidity');
            //     var dayHumidity = response.daily[i].humidity
            //     humidity.text(dayHumidity + "%");
            // }

        });


    })  
        

}