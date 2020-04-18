import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import './style.css';
import {SUNNYDAY,SUNNNIGHT,PCDAY,PCNIGHT,
    CLOUD,RAIN,SLEET,SNOW,WIND,FOG} from './../../constants/weather'

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
        this.setState({
            city:'Mexico',
            data:data2
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