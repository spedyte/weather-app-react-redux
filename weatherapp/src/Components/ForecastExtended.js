import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

const renderForecastItemDays=(forecastData)=>{
    return forecastData.map(forecast=>(<ForecastItem weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}
        key={`${forecast.weekDay}${forecast.hour}`}>
        </ForecastItem>));
}

const renderProgress=()=>{
    return <h3>Cargando pronostico extendido...</h3>;
}

//Clase que encapsula el array de componentes ForecastItem
const ForecastExtended =({city,forecastData})=>(
        <div>
            <h1 className='forecast-title'>{`${city}`}</h1>
            { forecastData ?
                renderForecastItemDays(forecastData):
                renderProgress()
            }
        </div>

)

ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array,
}

export default ForecastExtended;

