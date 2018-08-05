import React from 'react';
import animateScrollTo from 'animated-scroll-to';

const scrollToElemt = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  animateScrollTo(element, { offset: -80, minDuration: 500});
};


export default () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" onClick={() => scrollToElemt('header')}>Matthew Barbara</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden active">
                <a onClick={() => scrollToElemt('header')} />
              </li>
              <li>
                <a onClick={() => scrollToElemt('#about')}>About Me</a>
              </li>
              <li>
                <a onClick={() => scrollToElemt('#interests')}>Highlights</a>
              </li>
              <li>
                <a onClick={() => scrollToElemt('#portfolio')}>Portfolio</a>
              </li>
              <li>
                <a onClick={() => scrollToElemt('#contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

