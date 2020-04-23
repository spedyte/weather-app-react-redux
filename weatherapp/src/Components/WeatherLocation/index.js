import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';
import { CircularProgress } from 'material-ui';
import PropTypes from 'prop-types';

const key='f99bbd9e4959b513e9bd0d7f7356b38d';
const url='http://api.openweathermap.org/data/2.5/weather';

//Esta clase se encarga de conectarse al Open API Weather para mostrar el temperatura actual de una ciudad
class WeatherLocation extends Component{

    //En el constructor de una clase siempre se debe llamar al super constructor y ademas los parametros
    //pasan igual que en el componente funcional entre llaves{}
    constructor({city}){
        super();
        this.state={
            city,
            data:null
        };
    }
    
    componentWillMount() {
        const {city} = this.state;
        const api_weather=`${url}?q=${city}&appid=${key}`;
        //Fetch sirve para conectarnos a una API mediante una URL
        fetch(api_weather).then(data=>{
            console.log(data);
            return data.json(); //La respuesta del servicio se pasa a JSON y se envia a la PROMISE
        }).then(weather_data=>{
            //En la PROMISE, que es asincronica, una vez recibido los datos se transforman para poder mostrarlos
            //correctamente.
            const data=transformWeather(weather_data);
            //El setState de abajo se realizo en este punto por cuestion didactica pero se sugiera no hacerlo en el WillMount
            //porque en un futuro React no puede asegurarnos que este mount sera unico en todo el ciclo de vida del componente
            this.setState({data,city:weather_data.name});
            console.log(weather_data);
        });
    }
    
    //Metodo render es parte del ciclo de vida de un componente de React, siempre se ejecuta despues de setear el state o al
    //actualizarlo mediante el this.setState()
    render= () =>{
        const {onWeatherLocationClick}=this.props;
        const {city,data}=this.state;
        return(
        <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
            <Location city={city}/>
            {data?<WeatherData data={data}/>:
            <CircularProgress size={60} thickness={10} />}
        </div>);
        };
}

//NOTA: CircularProgress es un componente de react definido en Material-ui que nos muestra un spinner de loading

WeatherLocation.propTypes={
    city:PropTypes.string,
    onWeatherLocationClick:PropTypes.func,
}

//EXPORT DEFAULT sirve para expostar de un archivo JS un componente en particular en el caso de que hubiera mas de un
// componente definido en el archivo, se recomienda realizar un archivo por componente como buena practica
export default WeatherLocation;