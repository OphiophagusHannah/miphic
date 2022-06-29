import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import Canvas from './components/Canvas'




class App extends Component {
  
  render() {
    return (
      <div>
          <div className="wrapper">
          <Canvas />
          <Main />
          </div>
      </div>
    )
  }
}

export default App;
