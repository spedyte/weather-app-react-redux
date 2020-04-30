import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState={
    city:"Buenos Aires,ar"
};

//const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const composeEnhacers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store=createStore(reducers,initialState, 
    composeEnhacers(applyMiddleware(thunk))); //creamos un store y lleva un reducer como  parametro
    //Se agrega el middleware thunk de redux-thunk para poder hacer llamados a metodo asincronicos en las actions


