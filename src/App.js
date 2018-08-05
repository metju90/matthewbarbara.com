import React, { Component } from 'react';
import { Offline } from "react-detect-offline";
import logo from './logo.svg';
import './css/override.css';
import './css/style.css';
import './css/font-awesome/css/font-awesome.min.css'


import Header from './components/Header';
import Me  from './components/Me';
import About  from './components/About';
import Highlights  from './components/Highlights';
import Portfolio  from './components/Portfolio';
import Contact  from './components/Contact';
import ScrollToTop  from './components/ScrollToTop';
class App extends Component {

/* <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"> */

  render() {
    return (
      <div className="App">
        <Offline>
          <div id="greybg">You are offline but the site  is still available</div>
        </Offline>
        <Header />
        <Me />
        <About />
        <Highlights />
        <div className="parent">
          <Portfolio />
          <Contact />
        </div>
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
