import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

//Componente funcional que muestra la ciudad recibidad como parametro en la Props
const Location =({city}) =>(
    //const {city}=props;//destructuring
    <div className='locationCont'>
    <h1>
        {city}
    </h1>
</div>
);

Location.propTypes={
    city:PropTypes.string.isRequired,
};

export default Location;