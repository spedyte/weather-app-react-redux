import convert from 'convert-units';
import {SUNNYDAY,SUNNNIGHT,PCDAY,PCNIGHT,
    CLOUD,RAIN,SLEET,SNOW,WIND,FOG} from './../constants/weather'

 const transformWeather =(weather_data)=>{
        const {weather}=weather_data;
        const {humidity,temp}=weather_data.main;
        const {speed}=weather_data.wind;
        const weatherState=getWeatherState(weather);
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
      const {id}=weatherState[0];
     if(id<300)
     {return FOG;}
     else if(id<400){
        return RAIN;
     }
     else if(id<600){
        return SNOW;
     }
     else if(id===800){
        return SUNNYDAY;
     }
     else
        return CLOUD;
    }

export default transformWeather;
