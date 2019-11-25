import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Components/Search';
import './App.css';

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div> 
          <Navbar/>
          <br/>
          <Search/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
