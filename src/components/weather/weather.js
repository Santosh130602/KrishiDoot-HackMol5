import React, { useState, useEffect } from 'react';
import "./weather.css"
import Wea from './wea';
import sun from "../img/sun.png"
import moon from "../img/moon.png"


function WeatherForecast() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = 'd1845658f92b31c64bd94f06f7188c9c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
  
        const currentTime = new Date().getTime() / 1000; // Current time in seconds
        const sunriseTime = data.sys.sunrise;
        const sunsetTime = data.sys.sunset;
        if (currentTime > sunriseTime && currentTime < sunsetTime) {
          // Daytime
          document.getElementById('weather-icon').src = {sun};
        } else {
          // Nighttime
          document.getElementById('weather-icon').src = {moon};
        }
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
        setLoading(false);
      });
  }
  

  function error() {
    console.log('Unable to retrieve location.');
    setLoading(false);
  }




  return (
    <div>
        <a href='/' onClick={Wea}>
        <div id="weather-info">
      {loading ? (
        <h1>Loading...</h1>
      ) : weatherData ? (
        <>
          <p>{`${weatherData.weather[0].main} - ${weatherData.main.temp}°C`}</p>
          <p className='weather-ele'>{`Location: ${weatherData.name}`}</p>
          <p className='weather-ele'>{`Country: ${weatherData.sys.country}`}</p>
        </>
      ) : (
        <h1>Unable to retrieve weather information.</h1>
      )}
    </div>

        </a>
    
    </div>

  );
}

export default WeatherForecast;
