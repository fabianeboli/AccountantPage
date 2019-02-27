import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      </>
    );
  }
}

export default App;
