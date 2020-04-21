import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

/*
const days =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data={
    temperature:10,
    humidity:11,
    weatherState:'SNOW',
    wind:'15',
}*/

const key='f99bbd9e4959b513e9bd0d7f7356b38d';
const url='http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={
            forecastData:null
        };
    }

    renderForecastItemDays(){
        return "Render items"
        //return days.map(day=>(<ForecastItem weekDay={day} hour={12} data={data}></ForecastItem>));
    }

    renderProgress(){
        return <h3>Cargando pronostico extendido...</h3>;
    }

    render= () =>
    {
        const {city}=this.props;
        const {forecastData}=this.state;

        return (<div>
                <h1 className='forecast-title'>{`${city}`}</h1>
                { forecastData ?this.renderForecastItemDays():
                    this.renderProgress()
                }
            </div>);
    }

    componentDidMount() {
        //fetch or axios
        const {city} = this.props;
        const url_forecast=`${url}?q=${city}&appid=${key}`;

        fetch(url_forecast).then(data=>{
            return data.json();
        }).then(weather_data=>{
            const forecastData=transformForecast(weather_data);
            this.setState({forecastData});
        });
    }
    
}

ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;

