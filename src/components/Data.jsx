import React from 'react';
import { assets } from '../assets/assets';

export default function Data({ weatherdata }) {
  const allicons = {
    "01d": assets.clear_icon,
    "01n": assets.clear_icon,
    "02d": assets.cloud_icon,
    "02n": assets.cloud_icon,
    "03d": assets.cloud_icon,
    "03n": assets.cloud_icon,
    "04d": assets.drizzle_icon,
    "04n": assets.drizzle_icon,
    "09d": assets.rain_icon,
    "09n": assets.rain_icon,
    "10d": assets.rain_icon,
    "10n": assets.rain_icon,
    "13d": assets.snow_icon,
    "13n": assets.snow_icon,
    "50n": assets.clear_icon,
    "50d": assets.clear_icon,
  };

  return (
    <div className='data'>
      {weatherdata && (
        <>
          <img src={allicons[weatherdata.icon]} alt='' className='sun' />
          <p className='temp'>{weatherdata.temp}°C</p>
          <p className='location'>{weatherdata.Location}</p>
          <div className='lower_block'>
            <div className='hello1'>
              <img src={assets.humidity_icon} alt='' />
              <div className='data1'>
                <p>{weatherdata.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className='hello2'>
              <img src={assets.wind_icon} alt='' />
              <div className='data2'>
                <p>{weatherdata.wind_speed} Km/h</p>
                <p>Wind speed</p>
              </div>
            </div>
          </div>
        </>
      )}

      {!weatherdata && (
        <div className='default'>
          <p className='line-1'>Search Any</p>
          <p className='line-2'>Place</p>
          <p className='line-3'>In The Search Box.</p>
        </div>
      )}
    </div>
  );
}
