import React, { Component } from 'react';
import logo from './logo.svg';
import './css/override.css';
import './css/style.css';
// import './js/jquery-1.11.0';
// import './js/bootstrap.min';
// import './js/jquery.easing.min'
// import './js/classie'
// import './js/main'

import Header from './components/Header';
import Me  from './components/Me';
import About  from './components/About';
import Highlights  from './components/Highlights';
import Portfolio  from './components/Portfolio';
import Contact  from './components/Contact';
import ScrollToTop  from './components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <div className="App">
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
