import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';


//Componente Funcional para renderizar la data del pronostico del clima
const ForecastItem =({weekDay,hour,data})=>(
<div>
    <h3>{weekDay}- {hour} hrs</h3>
    <WeatherData data={data}></WeatherData>
</div>
);

ForecastItem.propTypes={
    weekDay:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
}

export default ForecastItem;