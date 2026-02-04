import React from 'react';

function CurrentWeather({ data }) {
  const { main, weather, wind, name, sys } = data;

  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="current-weather">
      <div className="location">
        <h2>
          📍 {name}, {sys.country}
        </h2>
      </div>

      <div className="weather-main">
        <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
        <div className="temperature">
          <h1>{Math.round(main.temp)}°C</h1>
          <p className="description">{weather[0].description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">🌡️ Feels Like</span>
          <span className="detail-value">{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">💧 Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">💨 Wind Speed</span>
          <span className="detail-value">{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">🌡️ Min / Max</span>
          <span className="detail-value">
            {Math.round(main.temp_min)}° / {Math.round(main.temp_max)}°
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;