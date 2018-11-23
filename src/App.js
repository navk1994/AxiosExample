import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button.js';



import Input from './Input.js';
import Results from './Results.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        {/*<img src={logo} className="App-logo" alt="logo" >*/}


        <Results/>



        </header>
        <div id="results"></div>
      </div>
    );
  }
}

export default App;
