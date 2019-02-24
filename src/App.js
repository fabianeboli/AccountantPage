import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Map from './containers/Map/Map';

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <About/>
      <Skills/>
      <div>
      <Map/>
      </div>
      
      </>
    );
  }
}

export default App;
