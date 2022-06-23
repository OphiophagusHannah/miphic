import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import Nav from './components/Nav';
import GoToTop from './components/GoToTop';
import './App.css';




class App extends Component {
  
  render() {



  return (
    <div>
      <Router>

        <div className="wrapper">
        <Nav />
        <Main />
        <GoToTop />
        </div>


      </Router>
    </div>
  )
      }
}

export default App;
