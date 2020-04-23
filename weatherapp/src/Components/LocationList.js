import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

//Componente funcional que desplega una arreglo de componentes del tipo WeatherLoaction
//Recibe el burbujeo del evento de seleccion de la ciudad, el burbujeo lleva el path:
//WeatherLocation>>> weatherLocationCont (este contenedor dispara el handleWeatherLocationclikc 
//definido en esta clase y este a su vez lo burbujea al App.js para pasarlo al ForecastExtended)

//Los parametros recibidos en componentes funcionales(sin estado), se colocan entre llaves{}
const LocationList=({cities,onSelectedLocation})=>{

    //envia el parametro de City hacia App.js
    const handleWeatherLocationclick = city =>{
        console.log("handleWeatherLocationclick");
        onSelectedLocation(city);
    }

    //Transforma el arreglo de ciudades en arreglo de componentes usando el metodo map de ES6
    //Importante agregar el KEY a cada elemento para ayudar en el perfomarce de Re-Rendering
    const strToComponent = cities =>(
        cities.map(city => (<WeatherLocation 
                                key={city} 
                                city={city} 
                                onWeatherLocationClick={()=>handleWeatherLocationclick(city)}/>))
    );
    
    return(
    <div className='locationList'>
        {strToComponent(cities)};
    </div>
    );
}

//Validamos los Props recibidos para 'tipear' un poco nuestras variables
LocationList.propTypes={
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}

export default LocationList;