import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';

    const location='London';
    const key='f99bbd9e4959b513e9bd0d7f7356b38d';
    const api_weather=`
    http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state={
            city:'Buenos Aires',
            data:null
        };
    }

    
    componentWillMount() {
        this.handleUpdateClick();
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
            {data?<WeatherData data={data}/>:'Cargando'}
        </div>);
        }
}

export default WeatherLocation;