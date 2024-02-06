var APIKey = "6d92c2af99da65eb1140112bd23cda4a";
var city = "Monterrey";
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
        var iconMainCode = data.weather[0].icon; //Obtains the code of the weather icon depending on the actual weather.
        console.log(cityName);
        document.getElementById("city-name-one").innerHTML = cityName + " " + currentDate; //updates the city name in the "Big" card.
        document.getElementById("temp-one").innerHTML = "Temperature: " + tempCelsius.toFixed(0) + "°C";// toFixed, decides how many decimals i want it to show.
        document.getElementById("wind-one").innerHTML = "Wind: " + windSpeed.toFixed(3) + " kph";
        document.getElementById("humidity-one").innerHTML = "Humidity: " + humidity + "%";
        document.getElementById("iconMain").innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconMainCode + '.png" alt="Weather Icon" class="img-thumbnail">'; //Transforms the #code given, to the actual img and place it in the html with the thumbnail class.

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

        //Get the corresponding code for the weather icon.
        var iconOneCode = data.list[0].weather[0].icon;
        var iconTwoCode = data.list[1].weather[0].icon;
        var iconThreeCode = data.list[2].weather[0].icon;
        var iconFourCode = data.list[3].weather[0].icon;
        var iconFiveCode = data.list[4].weather[0].icon;


        //Takes the current day object, and adds days correspondly.
        var datePlusOne = currentDateObject.add(1, 'day').format("M/DD/YYYY");
        var datePlusTwo = currentDateObject.add(2, 'days').format("M/DD/YYYY");
        var datePlusThree = currentDateObject.add(3, 'days').format("M/DD/YYYY");
        var datePlusFour = currentDateObject.add(4, 'days').format("M/DD/YYYY");
        var datePlusFive = currentDateObject.add(5, 'days').format("M/DD/YYYY");

        //Defines variables from the next Five Days Weather Forecast:
        var tempKelvinOne = data.list[0].main.temp;
        var tempCelsiusOne = tempKelvinOne -273.15; 
        var windOne = data.list[0].wind.speed * 1.60934;//converts 'MPH' to 'kph'.
        var humidityOne = data.list[0].main.humidity;
        
        var tempKelvinTwo = data.list[1].main.temp;
        var tempCelsiusTwo = tempKelvinTwo -273.15; 
        var windTwo = data.list[1].wind.speed * 1.60934;//converts 'MPH' to 'kph'.
        var humidityTwo = data.list[1].main.humidity;
        
        var tempKelvinThree = data.list[2].main.temp;
        var tempCelsiusThree = tempKelvinThree -273.15; 
        var windThree = data.list[2].wind.speed * 1.60934;//converts 'MPH' to 'kph'.
        var humidityThree = data.list[2].main.humidity;
        
        var tempKelvinFour = data.list[3].main.temp;
        var tempCelsiusFour = tempKelvinFour -273.15; 
        var windFour = data.list[3].wind.speed * 1.60934;//converts 'MPH' to 'kph'.
        var humidityFour = data.list[3].main.humidity;
        
        var tempKelvinFive = data.list[4].main.temp;
        var tempCelsiusFive = tempKelvinFive -273.15; 
        var windFive = data.list[4].wind.speed * 1.60934;//converts 'MPH' to 'kph'.
        var humidityFive = data.list[4].main.humidity;


        document.getElementById("tempOne").innerHTML = "Temperature: " + tempCelsiusOne.toFixed(0) + "°C";// toFixed, decides how many decimals i want it to show.
        document.getElementById("windOne").innerHTML = "Wind: " + windOne.toFixed(3) + " kph";
        document.getElementById("HumidityOne").innerHTML = "Humidity: " + humidityOne + "%";

        document.getElementById("tempTwo").innerHTML = "Temperature: " + tempCelsiusTwo.toFixed(0) + "°C";// toFixed, decides how many decimals i want it to show.
        document.getElementById("windTwo").innerHTML = "Wind: " + windTwo.toFixed(3) + " kph";
        document.getElementById("HumidityTwo").innerHTML = "Humidity: " + humidityTwo + "%";

        document.getElementById("tempThree").innerHTML = "Temperature: " + tempCelsiusThree.toFixed(0) + "°C";// toFixed, decides how many decimals i want it to show.
        document.getElementById("windThree").innerHTML = "Wind: " + windThree.toFixed(3) + " kph";
        document.getElementById("HumidityThree").innerHTML = "Humidity: " + humidityThree + "%";

        document.getElementById("tempFour").innerHTML = "Temperature: " + tempCelsiusFour.toFixed(0) + "°C";// toFixed, decides how many decimals i want it to show.
        document.getElementById("windFour").innerHTML = "Wind: " + windFour.toFixed(3) + " kph";
        document.getElementById("HumidityFour").innerHTML = "Humidity: " + humidityFour + "%";

        document.getElementById("tempFive").innerHTML = "Temperature: " + tempCelsiusFive.toFixed(0) + "°C";// toFixed, decides how many decimals i want it to show.
        document.getElementById("windFive").innerHTML = "Wind: " + windFive.toFixed(3) + " kph";
        document.getElementById("HumidityFive").innerHTML = "Humidity: " + humidityFive + "%";


        document.getElementById("dayPlusOne").innerHTML = datePlusOne;
        document.getElementById("dayPlusTwo").innerHTML = datePlusTwo;
        document.getElementById("dayPlusThree").innerHTML = datePlusThree;
        document.getElementById("dayPlusFour").innerHTML = datePlusFour;
        document.getElementById("dayPlusFive").innerHTML = datePlusFive;

        document.getElementById("iconOne").innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconOneCode + '.png" alt="Weather Icon">'; //Transforms the #code given, to the actual img.
        document.getElementById("iconTwo").innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconTwoCode + '.png" alt="Weather Icon">'; //Transforms the #code given, to the actual img.
        document.getElementById("iconThree").innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconThreeCode + '.png" alt="Weather Icon">'; //Transforms the #code given, to the actual img.
        document.getElementById("iconFour").innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconFourCode + '.png" alt="Weather Icon">'; //Transforms the #code given, to the actual img.
        document.getElementById("iconFive").innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconFiveCode + '.png" alt="Weather Icon">'; //Transforms the #code given, to the actual img.



    })

    .catch(function(error) {
        console.error("Error during fetch operation", error);//Indicates there was an error (somewhere) during the fetch operation.
    })

    $(document).ready(function() {
        $("#searchButton").on("click", function() {
            alert("Button Clicked!");
        })
    })

    
