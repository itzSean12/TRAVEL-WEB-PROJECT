import React, { useState, useEffect } from "react";
import "./Home.css";

function WeatherComponent({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "c543135f5ce69a47c06bb087b6848040";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div>
      <h2 style={{color:"#4d4747"}}>{weatherData.name}</h2>
      <div>
        <img src={weatherIconUrl} alt="Weather Icon" />
        <h4 class="weather-data">{Math.round(weatherData.main.temp)}°F</h4>
        <h5 class="weather-data">{weatherData.weather[0].description}</h5>
        {/* <h4 class="weather-data">{weatherData.main.humidity}% humidity</h4> */}
      </div>
    </div>
  );
}

export default WeatherComponent;


// const express = require("express");
// const https = require("https");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static("public"));

// app.get("/", function(req,res) {
//   res.sendFile(__dirname + "/bhome.html");
//   res.sendFile(__dirname + "/css/styles.css")
// });

// app.post("/", function(req,res) {
//   const query = req.body.cityName
//   const apiKey = "c543135f5ce69a47c06bb087b6848040"
//   const unit = "imperial"
//   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&APPID=" + apiKey + "&units=" + unit;
//   https.get(url, function(response) {
//     console.log(response.statusCode);

//     response.on("data", function(data) {
//       const weatherData = JSON.parse(data)
//       const temp = weatherData.main.temp
//       const weatherDesc = weatherData.weather[0].description
//       const icon = weatherData.weather[0].icon
//       const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//       res.write("<p>The weather is currently " + weatherDesc + "<p>")
//       res.write("<h1>The temperature in " + query + " is " + temp + " degrees Fahrenheit.</h1>")
//       res.write("<img src=" + imageURL + ">")
//       res.send()
//     })
//   })
// });


// app.listen(3000, function() {
//   console.log("Server is running on port 3000.")
// });