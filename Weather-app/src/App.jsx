import React, { useState } from 'react';
import SearchSection from './components/SearchSection'
import CurrentWeather from './components/CurrentWeather'
import WeatherDeatils from './components/WeatherDeatils'


const App = () => {
  
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherDeatils, setWeatherDeatils] = useState({})

  const getWeatherDeatils = async (API_URL) =>{
    try{
      const responce = await fetch(API_URL);
      const data = await responce.json();
      
      const temp = Math.floor(data.main.temp);
      const description = data.weather[0].description;
      
      const weatherIcons = {
          Clear: "/clear.png",
          Clouds: "/cloud.png",
          Rain: "/rain.png",
          Snow: "/snow.png",
          Drizzle: "/mist.png",
          Mist: "/mist.png"
        };
      const icon = weatherIcons[data.weather[0].main] || "/cloud.png";
      setCurrentWeather({temp, description, icon});

      const humidity = data.main.humidity;
      const wind = data.wind.speed;
      setWeatherDeatils({humidity, wind})

    }catch(error){
      console.log(error)
    }
  }

  return (
    <main className='container'>
       
      <SearchSection getWeatherDeatils={getWeatherDeatils} />

      <div className="weather-section">
        <CurrentWeather currentWeather={currentWeather}/>
        <WeatherDeatils weatherDeatils={weatherDeatils}/>
      </div>
  
    </main>
  )
}

export default App