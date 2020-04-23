import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import './style.css';    

//Componente funcional que encapsula a los componentes que mostraran la Temperature y la Info_Extra
const WeatherData =({data})=>{
    const {temperature,weatherState,humidity,wind}=data; //destructuring para recuperar cada parametro enviado en las props

return(<div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>);
};

//En esta validacion de Props se evaulua que el parametro recibido tenga la forma 
//de una clase con estos parametros como properties
WeatherData.propType={
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
};

export default WeatherData;