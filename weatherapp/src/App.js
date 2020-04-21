import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid,Row,Col} from 'react-flexbox-grid';
import LocationList from './Components/LocationList'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './App.css';
import ForecastExtended from './Components/ForecastExtended'

const cities=['Mexico city',
'Seattle',
'Redmond',
'London',
'Madrid'];

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
  }

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
