var APIKey = "6d92c2af99da65eb1140112bd23cda4a";
var city = "Chicago";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; //Current day Forecast 
var currentDate = dayjs().format("M/DD/YYYY");
var currentDateObject = dayjs(currentDate); //It takes the same format of the current day, but instead of having it a a string, is change to an object, so that i can be able to ".add" days using dayjs + 1 .

fetch(queryURL)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Network response was not ok"); //works incase theres no response in the fetch.
        }

        return response.json();//converts the data of the fetch to JSON.
    })
    
    .then(function(data) {
        console.log(data);//Logs the data from the present weather forecast.
        var cityName = data.name;
        var tempKelvin = data.main.temp;
        var tempCelsius = tempKelvin -273.15;//takes the original value of temperature, and transform it to celsius by doing the convertion -273.15.
        var windSpeed = data.wind.speed * 1.60934;//converts 'MPH' to 'kph'.
        var humidity = data.main.humidity;
        var latitude = data.coord.lat;
        var longitude = data.coord.lon;
        console.log(cityName);
        document.getElementById("city-name-one").innerHTML = cityName + " " + currentDate; //updates the city name in the "Big" card.
        document.getElementById("temp-one").innerHTML = "Temperature: " + tempCelsius.toFixed(0) + "°C";// toFixed, decides how many decimals i want it to show.
        document.getElementById("wind-one").innerHTML = "Wind: " + windSpeed.toFixed(3) + " kph";
        document.getElementById("humidity-one").innerHTML = "Humidity: " + humidity + "%";
        return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey);//5 Day weather forecast fetch
    })

    .then(function(response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");//works incase theres no response in the fetch.
        }

        return response.json();//converts the data of the fetch to JSON.
    })

    .then(function(data) {
        console.log(data);//Logs the data from the 5 day weather forecast.
        //Takes the current day object, and adds days correspondly.
        var datePlusOne = currentDateObject.add(1, 'day').format("M/DD/YYYY");
        var datePlusTwo = currentDateObject.add(2, 'days').format("M/DD/YYYY");
        var datePlusThree = currentDateObject.add(3, 'days').format("M/DD/YYYY");
        var datePlusFour = currentDateObject.add(4, 'days').format("M/DD/YYYY");
        var datePlusFive = currentDateObject.add(5, 'days').format("M/DD/YYYY");
        document.getElementById("dayPlusOne").innerHTML = datePlusOne;
        document.getElementById("dayPlusTwo").innerHTML = datePlusTwo;
        document.getElementById("dayPlusThree").innerHTML = datePlusThree;
        document.getElementById("dayPlusFour").innerHTML = datePlusFour;
        document.getElementById("dayPlusFive").innerHTML = datePlusFive;


    })

    .catch(function(error) {
        console.error("Error during fetch operation", error);//Indicates there was an error (somewhere) during the fetch operation.
    })

    
