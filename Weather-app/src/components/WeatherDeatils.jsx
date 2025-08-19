import React from 'react'
import CurrentWeather from './CurrentWeather'

const WeatherDeatils = ({weatherDeatils}) => {
  return (
    <div className="weather_deatils">
            <div className="humidity">
                <img src="/water.svg" alt="" />
                <div className="text">
                    <div className="info_humidity">
                        <span>
                            {weatherDeatils.humidity} %
                        </span>                     
                    </div>
                    <p>Humidity</p>
                </div>
            </div>

            <div className="wind">
                <img src="/wind.svg" alt="" />
                <div className="text">
                    <div className="info_wind">
                        <span>
                            {weatherDeatils.wind} km/h
                        </span>
                    </div>
                    <p>wind speed</p>
                </div>
            </div>
        </div>
  )
}

export default WeatherDeatils