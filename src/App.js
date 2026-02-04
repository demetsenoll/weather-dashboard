import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const searchCity = async (city) => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError(null);

    try {
      // Current weather
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      // 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setLoading(false);
    } catch (err) {
      setError('City not found. Please try again.');
      setLoading(false);
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🌤️ Weather Dashboard</h1>
          <p>Get real-time weather information for any city</p>
        </header>

        <SearchBar onSearch={searchCity} />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>❌ {error}</p>
          </div>
        )}

        {weatherData && !loading && (
          <>
            <CurrentWeather data={weatherData} />
            {forecastData && <Forecast data={forecastData} />}
          </>
        )}

        {!weatherData && !loading && !error && (
          <div className="welcome">
            <h2>👋 Welcome!</h2>
            <p>Search for a city to see the weather forecast</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;