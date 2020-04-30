import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //esta liberia se debe usar en cada componente que tenga conexion al store
import * as actions from './../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../Components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
      const {setWeather,setSelectedCity,cities,city}=this.props;
      setWeather(cities);
      setSelectedCity(city); //guardamos el valor de la ciudad mediante la accion
      //antes era setCity, se cambio al usar el bindActionCreators
    }
    

    handleSelectedLocation=city=>{
        this.props.setSelectedCity(city); //guardamos el valor de la ciudad mediante la accion
        //antes era setCity, se cambio al usar el bindActionCreators
      }

    render() {
        return (
            <div>
                <LocationList cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </div>
        );
    }
}

//valdiamos que las funciones a inyectar sean funciones y ademas no lleguen null
LocationListContainer.propTypes ={
    setSelectedCity:PropTypes.func.isRequired,//antes era setCity
    setWeather:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
    city:PropTypes.string.isRequired,
  }
  
  //Se define el conjunto de funciones que se inyectaran como Props al Componente, 
  //en este caso las funciones a inyectar son las Actions asociadas al Store de redux
  //VERSION ANTERIOR
  // const mapDispatchToProps =dispatch =>({
  //   setCity:value=>dispatch(setCity(value)),
  //   setWeather: cities=>dispatch(setWeather(cities)),
  // });

  //VERSION NUEVA para mapear los actions y generar un objeto con las mismas claves y propiedades
  const mapDispatchToProps = dispatch => bindActionCreators(actions,dispatch);
  
const mapStateToProps = state=>({
  citiesWeather: getWeatherCities(state),
  city:getCity(state)
});

  //Exportamos el componente que resulta de inyectar las Actions del Store de redux al componente inicial
  export default connect(mapStateToProps,mapDispatchToProps)(LocationListContainer);
//export default LocationListContainer;