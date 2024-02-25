import React, { useState, useEffect } from 'react';
import "./wea.css"

const Wea = () => {
   
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [grantAccess, setGrantAccess] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [tab, setTab] = useState('Your Weather');

  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

  useEffect(() => {
    if (grantAccess) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }, [grantAccess]);

  const switchTab = (tabName) => {
    setTab(tabName);
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    fetchWeatherData(latitude, longitude);
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching weather data:', error);
      setLoading(false);
    }
  };

  const handleGrantAccess = () => {
    setGrantAccess(true);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchCity.trim() !== '') {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching weather data:', error);
        setLoading(false);
      }
    }
  };
    

  return (
    <div className="wrapper">
      <h1>Weather App</h1>
      <div className="tab-container">
        <p className={`tab ${tab === 'Your Weather' ? 'current-tab' : ''}`} onClick={() => switchTab('Your Weather')} data-userWeather>Your Weather</p>
        <p className={`tab ${tab === 'Search Weather' ? 'current-tab' : ''}`} onClick={() => switchTab('Search Weather')} data-searchWeather>Search Weather</p>
      </div>
      <div className="weather-container">
        <div className={`sub-container grant-location-container ${grantAccess ? 'active' : ''}`}>
          <img src="./images/location.png" width="80" height="80" loading="lazy" alt="Location Icon" />
          <p>Grant Location Access</p>
          <p>Allow Access to get weather Information</p>
          <button className="btn" onClick={handleGrantAccess} data-grantAccess>Grant Access</button>
        </div>
        <form className={`form-container ${tab === 'Search Weather' ? 'active' : ''}`} onSubmit={handleSearch} data-searchForm>
          <input placeholder="Search for City..." value={searchCity} onChange={(e) => setSearchCity(e.target.value)} data-searchInput />
          <button className="btn" type="submit">
            <img src="./images/search.png" width="20" height="20" loading="lazy" alt="Search Icon" />
          </button>
        </form>
        <div className={`sub-container loading-container ${loading ? 'active' : ''}`}>
          <img src="./images/loading.gif" width="150" height="150" alt="Loading Icon" />
          <p>Loading</p>
        </div>
        <div className={`sub-container user-info-container ${!loading && weatherData ? 'active' : ''}`}>
          <div className="name">
            <p data-cityName>{weatherData?.name}</p>
            <img src={`https://flagcdn.com/144x108/${weatherData?.sys?.country?.toLowerCase()}.png`} alt="Country Flag" data-countryIcon />
          </div>
          <p data-weatherDesc>{weatherData?.weather?.[0]?.description}</p>
          <img src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`} alt="Weather Icon" data-weatherIcon />
          <p data-temp>{`${weatherData?.main?.temp} °C`}</p>
          <div className="parameter-container">
            <div className="parameter">
              <img src="./images/wind.png" alt="Wind Icon" />
              <p>windspeed</p>
              <p data-windspeed>{`${weatherData?.wind?.speed} m/s`}</p>
            </div>
            <div className="parameter">
              <img src="./images/humidity.png" alt="Humidity Icon" />
              <p>humidity</p>
              <p data-humidity>{`${weatherData?.main?.humidity}%`}</p>
            </div>
            <div className="parameter">
              <img src="./images/cloud.png" alt="Cloud Icon" />
              <p>Clouds</p>
              <p data-cloudiness>{`${weatherData?.clouds?.all}%`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wea;
