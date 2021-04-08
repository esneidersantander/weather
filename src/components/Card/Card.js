import React from 'react'
import { useSelector } from 'react-redux';
import '../Card/card.css'
export const Card = ({weather}) => {
    const {city} = useSelector(state => state.weather);
    return (
    <div className="card">
        <h2>{city}</h2>
        <h3>{weather.applicable_date}</h3>
        <h3>{weather.weather_state_name}<span>Wind {Math.round(weather.wind_speed * 100) / 100} mph </span></h3>
        <h3>Min temp:{Math.round(weather.min_temp * 1) / 1}° / Max temp: {Math.round(weather.max_temp * 1) / 1}°</h3>
        <h1>{Math.round(weather.the_temp * 1) / 1}°</h1>
        <div className="sky">
            <img src={"https://www.metaweather.com/static/img/weather/"+weather.weather_state_abbr+".svg"} alt="imagen clima"/>
        </div>
    </div>
    )
}
