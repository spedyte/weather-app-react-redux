import convert from 'convert-units';
import {SUNNYDAY,SUNNNIGHT,PCDAY,PCNIGHT,
    CLOUD,RAIN,SLEET,SNOW,WIND,FOG} from './../constants/weather'

 const transformWeather =(weather_data)=>{
        const {humidity,temp}=weather_data.main;
        const {speed}=weather_data.wind;
        const weatherState=getWeatherState(weather_data);
        const temperature=getTemp(temp);
        const data={
            humidity,
            temperature:temperature,
            weatherState,
            wind:`${speed} m/s`,
        }
        return data;
    }
const  getTemp=(kelvin)=>{
        return Number(convert(kelvin).from('K').to('C').toFixed(1));
    }
 const getWeatherState=(weatherState)=>{
        return SNOW;
    }

export default transformWeather;
