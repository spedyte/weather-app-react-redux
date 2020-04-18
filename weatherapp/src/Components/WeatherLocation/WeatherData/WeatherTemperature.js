import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import PropTypes from 'prop-types';

import {SUNNYDAY,SUNNNIGHT,PCDAY,PCNIGHT,
    CLOUD,RAIN,SLEET,SNOW,WIND,FOG} from './../../../constants/weather'

    import './style.css';
    
const stateToIconName = weatherState =>{
    switch (weatherState) {
        case SUNNYDAY: return"CLEAR_DAY";
        case SUNNNIGHT: return"CLEAR_NIGHT";
        case PCDAY: return"PARTLY_CLOUDY_DAY";
        case PCNIGHT: return"PARTLY_CLOUDY_NIGHT";
        case CLOUD: return"CLOUDY";
        case RAIN: return"RAIN";
        case SLEET: return"SLEET";
        case SNOW: return"SNOW";
        case WIND: return"WIND";
        case FOG : return"FOG";
        default:
            return "CLEAR_DAY";
    }
};
    
const getWeatherIcon = weatherstate =>{
    return (<ReactAnimatedWeather className='wicon' color={'red'} icon={stateToIconName(weatherstate)} size={52} />);   
};

const Weathertemperature =({temperature,weatherState}) =>(
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>C</span>
    </div>
);

Weathertemperature.propTypes={
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string
};

export default Weathertemperature;