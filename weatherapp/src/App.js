import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid,Row,Col} from 'react-flexbox-grid';
import LocationList from './Components/LocationList'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './App.css';
import ForecastExtended from './Components/ForecastExtended'
import {setCity} from './actions';
import {createStore} from 'redux';

const cities=['Mexico city',
'Seattle',
'Redmond',
'London',
'Madrid'];

const store=createStore(()=>{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //creamos un store y lleva un reducer como  parametro

class App extends Component {

  constructor(){
    super();
    this.state={
      city:null
    }
  }

  handleSelectedLocation=city=>{
    console.log(`handleSelectedLocation : ${city}`);
    this.setState({city});
    store.dispatch(setCity(city)); //guardamos el valor de la ciudad mediante la accion
  }
// MuiThemeProvider - viene de Material-ui y sirve para agregar el tema que usaran los componentes
//este tema es el theme por default

// Grid, Row, Col - vienen de ReactFlexboxGrid y los usamos para darle disenio responsivo a la APp
  render() {
    const {city}=this.state;
    return (<MuiThemeProvider>
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
             <AppBar title="Weather App"></AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} >
              <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  {
                    city && 
                    <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </div>  
    </MuiThemeProvider>);
  }
}

export default App;
