import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid,Row,Col} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'

const cities=['Mexico city',
'Seattle',
'Redmond',
'London',
'Madrid'];

class App extends Component {

// MuiThemeProvider - viene de Material-ui y sirve para agregar el tema que usaran los componentes
//este tema es el theme por default

// Grid, Row, Col - vienen de ReactFlexboxGrid y los usamos para darle disenio responsivo a la APp
  render() {
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
              <LocationListContainer cities={cities} ></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                    <ForecastExtendedContainer></ForecastExtendedContainer>
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