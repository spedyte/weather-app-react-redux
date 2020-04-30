import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import { CircularProgress } from 'material-ui';
import PropTypes from 'prop-types';

//Esta clase se encarga de conectarse al Open API Weather para mostrar el temperatura actual de una ciudad
const WeatherLocation =({onWeatherLocationClick,city,data})=>(
        <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
            <Location city={city}/>
            {data?<WeatherData data={data}/>:
            <CircularProgress size={60} thickness={10} />}
        </div>        
)

//NOTA: CircularProgress es un componente de react definido en Material-ui que nos muestra un spinner de loading

WeatherLocation.propTypes={
    city:PropTypes.string,
    onWeatherLocationClick:PropTypes.func,
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
}

//EXPORT DEFAULT sirve para expostar de un archivo JS un componente en particular en el caso de que hubiera mas de un
// componente definido en el archivo, se recomienda realizar un archivo por componente como buena practica
export default WeatherLocation;