import React from 'react'

const CurrentWeather = ({currentWeather}) => {
  return (
    <div className="current-weather">
        <img src={currentWeather.icon} alt="Weather Icon" />
          <h2 className='temp'>{currentWeather.temp}<span className='deg'>°</span> <span className='c'>C</span></h2>
          <p className="description">{currentWeather.description}</p>
        </div>
  )
}

export default CurrentWeather