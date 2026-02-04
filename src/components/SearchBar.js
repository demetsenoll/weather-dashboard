import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name (e.g., Istanbul, London, Tokyo)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        🔍 Search
      </button>
    </form>
  );
}

export default SearchBar;