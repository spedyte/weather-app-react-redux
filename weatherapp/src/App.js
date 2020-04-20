import React,{Component} from 'react';
import WeatherLocation from './Components/WeatherLocation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    console.log("debugger");
    return (<MuiThemeProvider>
      <div className="App">
        <WeatherLocation></WeatherLocation>
      </div>  
    </MuiThemeProvider>);
  }
}

export default App;
