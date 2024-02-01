var APIKey = "6d92c2af99da65eb1140112bd23cda4a";
var city = "Monterrey";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Network response wa not ok");
        }

        return response.json();
    })
    
    .then(function(data) {
        console.log(data);
    })

    .catch(function(error) {
        console.error("Error during fetch operation", error);
    })
