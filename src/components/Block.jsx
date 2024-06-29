import React, { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Data from './Data';

export default function Block() {
  const [weatherdata, setWeatherData] = useState();

  return (
    <div className='block'>
      <Navbar setWeatherData={setWeatherData} />
      <Data weatherdata={weatherdata} />
    </div>
  );
}
