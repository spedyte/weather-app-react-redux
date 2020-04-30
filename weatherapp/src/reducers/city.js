import {SET_CITY} from './../actions';

//Los reducers deben ser Funciones PUuras (Funciones cuyo return depende unicamente de los paraametros de entrada
//para no tener sorpresa y asi poder pronosticar el resultado)

//No se altera el estado, se debe haer una copia mediante el operador SPREAD de ES6

//el state se le asigna un valor por defecto mediante ES6 si es que no llega nada
export const city = (state={},action) => {
    switch (action.type) {
        case SET_CITY:
               return action.payload
               //return {...state,city:action.payload}  //ANTES se usó el spread operator de ES6 para actualizar o agregar la Property si existe o no 
        default:
            return state;
    }
};