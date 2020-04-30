import {createSelector} from 'reselect';
import {SET_FORECAST_DATA,SET_WEATHER_CITY,GET_WEATHER_CITY} from './../actions';
import toPairs from 'lodash.topairs';

export const cities =(state={},action)=>{
    switch (action.type) {
        case SET_FORECAST_DATA:{
            const {city,forecastData}=action.payload;
            return {...state,[city]:{...state[city],forecastData,forecastDataDate : new Date()}};
        }
        case GET_WEATHER_CITY:{
            const city=action.payload;
            return{...state,[city]:{...state[city],weather:null}}
        }
        case SET_WEATHER_CITY:{
            const {city,weather}=action.payload;
            return{...state,[city]:{...state[city],weather}}
        }
        default:
            return state;
    }
}

//Es un SELECTOR para obtener la data de la ciudad
//el state es lo que maneja el reducer , en este caso es Cities, NO es el state global
//y se esta usando RESELECT mediante la llamada de createSelector
export const getForecastDataFromCities=
createSelector((state,city)=>state[city] && state[city].forecastData,forecastData=>forecastData);

//Funcion que retorna un array con Clave-Valor mediante la funcion toPairs de Lodash.js
const fromObjectToArray = cities =>(toPairs(cities).map(([key,value])=>({key,name:key,data:value.weather})));

export const getWeatherCities =
createSelector(state=>fromObjectToArray(state),cities=>cities);