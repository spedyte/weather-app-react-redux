import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';
import {SUNNYDAY,SUNNNIGHT,PCDAY,PCNIGHT,
    CLOUD,RAIN,SLEET,SNOW,WIND,FOG} from './../../constants/weather'

    const location='London';
    const key='f99bbd9e4959b513e9bd0d7f7356b38d';
    const api_weather=`
    http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
    const data1={
        temperature:22,
        weatherState:'WIND',
        humidity:80,
        wind:'10 m/s'
    };

    const data2={
        temperature:2,
        weatherState:'SNOW',
        humidity:90,
        wind:'60 m/s'
    };
class WeatherLocation extends Component{

    constructor(){
        super();
        this.state={
            city:'Buenos Aires',
            data:data1
        };
    }

    handleUpdateClick=()=>{

        fetch(api_weather).then(data=>{
            console.log(data);
            return data.json();
        }).then(weather_data=>{
            const data=transformWeather(weather_data);
            this.setState({data,city:weather_data.name});
            console.log(weather_data);

        });
    }

    render= () =>{
        const {city,data}=this.state;
        return(
        <div className='weatherLocationCont'>
            <Location city={city}/>
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
        }
}

export default WeatherLocation;