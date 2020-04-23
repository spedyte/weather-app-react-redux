import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

//SE crea un filtro para seleccionar solo los pronosticos que coinciden con las siguientes horas: 6,12,18
//y posteriormente se mapea a un arreglo con el formato requerido 
const transformForecast = data =>(
    data.list.filter(item => (
        moment.unix(item.dt).utc().hour()===6 ||
        moment.unix(item.dt).utc().hour()===12 ||
        moment.unix(item.dt).utc().hour()===18
    )).map(item =>(
        {
            weekDay:moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data:transformWeather(item),
        }
    ))
);

export default transformForecast;