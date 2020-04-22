import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

const key='f99bbd9e4959b513e9bd0d7f7356b38d';
const url='http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={
            forecastData:null
        };
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forecast=>(<ForecastItem weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}
            key={`${forecast.weekDay}${forecast.hour}`}>
            </ForecastItem>));
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
                { forecastData ?this.renderForecastItemDays(forecastData):
                    this.renderProgress()
                }
            </div>);
    }

    componentDidMount() {
        //fetch or axios
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        //se ejecuta cada que hay algun update de las propiedades
        if(nextProps.city!== this.props.city)
        {
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city =>{
        //const {city} = this.props;
        const url_forecast=`${url}?q=${city}&appid=${key}`;
        console.log(url_forecast);

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

