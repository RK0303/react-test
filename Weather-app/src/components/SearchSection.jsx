import React from 'react'


const SearchSection = ({getWeatherDeatils}) => {
    const APIKey ='41557e289f7dd00939346a2523788555';

    const citySearch =(e) =>{
        e.preventDefault();
        const searchInput = e.target.querySelector
        (".search-input");
        const API_URL =`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${APIKey}`;
        getWeatherDeatils(API_URL);
    }
  return (
     <div className="search-section">
        <form action="#" className="search-form" onSubmit={citySearch}>
        <input type="text" className="search-input" />  
        <button className="s-button">
            <img src="/search.svg" alt="" />
        </button>
        </form>
</div>
  )
}

export default SearchSection