//Archivo para manejar los actions relacionados al Store de Redux
import transformForecast from "./../services/transformForecast";
import transformWeather from './../services/transformWeather';

//SE DEFINEN LOS TIPOS DE CADA ACTION A UTILIZAR
export const SET_CITY ='SET_CITY'; //las constantes van en mayusculas
export const SET_FORECAST_DATA ='SET_FORECAST_DATA';
export const GET_WEATHER_CITY ='GET_WEATHER_CITY';
export const SET_WEATHER_CITY ='SET_WEATHER_CITY';

//CREAMOS LAS ACTIONS_CREATORS PARA CADA UNO DE LOS TIPOS DEFINIDOS EN LA SECCION PREVIA
//Cada action creator es una funcion que recibe parametros y devuelve una funcion que crea un ACTION de un tipo definido
//por las constantes de arriba y el valor (o payload) para una propiedad del state
export const setCity = payload =>({type:SET_CITY,payload});//la accion es un objeto con un nombre y un value
const setForecastData = payload =>({type:SET_FORECAST_DATA,payload});

const getWeatherCity = payload =>({type:GET_WEATHER_CITY,payload});
const setWeatherCity = payload => ({type:SET_WEATHER_CITY,payload});


const key='f99bbd9e4959b513e9bd0d7f7356b38d';
const url='http://api.openweathermap.org/data/2.5/forecast';
const url_weather='http://api.openweathermap.org/data/2.5/weather';


//SECCION DE ACTIONS_CREATORS PARA CADA UNA DE LAS ACCIONES QUE LLEVARAN INFORMACION HACIA EL STORE

/*Action para guardar la ciudad seleccionada y su pronostico asociado */
export const setSelectedCity= payload =>{
    return (dispatch,getState) => {
        const url_forecast=`${url}?q=${payload}&appid=${key}`;
        
        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        const state=getState();
        const date=state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        if(date && (now-date) < 1*60*1000 )
        {
            return;
        }
        //fetch or axios
        return fetch(url_forecast).then(data=>{
            return data.json();
        }).then(weather_data=>{
            const forecastData=transformForecast(weather_data);
            //modificar el estado con el resultado de la promise(fetch)
            dispatch(setForecastData({city:payload,forecastData}))
        });
    };
};


/* 
ACTION creator para levantar el clima de cada una de las ciudaddes que esta en el listado
*/
export const setWeather = payload=>{

    //Usando THUNK definimos el dispatch de esta action
    return dispatch=>{
        payload.forEach(city=>{
            dispatch(getWeatherCity(city));

            const api_weather=`${url_weather}?q=${city}&appid=${key}`;
            //Fetch sirve para conectarnos a una API mediante una URL
            fetch(api_weather).then(data=>{
                return data.json(); //La respuesta del servicio se pasa a JSON y se envia a la PROMISE
            }).then(weather_data=>{
                //En la PROMISE, que es asincronica, una vez recibido los datos se transforman para poder mostrarlos
                //correctamente.
                const weather=transformWeather(weather_data);
                dispatch(setWeatherCity({city,weather})); //se lanza el reducer para actualizar el state

                //El setState de abajo se realizo en este punto por cuestion didactica pero se sugiera no hacerlo en el WillMount
                //porque en un futuro React no puede asegurarnos que este mount sera unico en todo el ciclo de vida del componente
                //this.setState({data,city:weather_data.name}); OBSELOTO QUE VINO DE UNA REFACTORIZACION
            });
        });
    }
}

