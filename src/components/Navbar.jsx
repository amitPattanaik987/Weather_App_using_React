import React, { useRef } from 'react';
import { assets } from './../assets/assets.js';

export default function Navbar({ setWeatherData }) {
  const city = useRef();

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      const weatherData = {
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        Location: data.name,
        temp: Math.floor(data.main.temp),
        icon: data.weather[0].icon,
      };

      setWeatherData(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='nav'>
      <input type='text' ref={city} placeholder='Enter Your Location...'/>
      <img src={assets.search_icon} onClick={() => search(city)} alt='' />
    </div>
  );
}
