import React, { Component } from 'react';
import { connect } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { fetch_highlights } from '../../actions';

class Highlights extends Component {

  componentDidMount() {
    this.props.fetch_highlights();
  }

  render() {
    const { title, projects, achievements, isLoading} = this.props
    if (isLoading) {
      return <PacmanLoader size="25" color="#2196F3" />
    }
    return (
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>{title}</h2>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h3 style={{marginTop: 0}}>Projects</h3>
                <ul>
                  <li>
                    <b>Single Page Application</b>. I contributed significantly to create an online casino interface based on a SPA which can easily be cloned and branded differently. Today the SPA built is being served to millions of users across the globe.
                  </li>
                  <li>
                    <b>Reusability</b> I formed part of a team which worked on a solution to overcome code reusability issues by extracting a large codebase into separate and independent versioned packages using JS managing project tool Lerna.
                  </li>
                  <li>
                    <b>Server Side Render</b>. Having previous experience with React as a SPA, with a great effort I quickly adapted to a platform running SSR in React. I played a key role in developing a portal which has no less than 80k visitors per hour.
                  </li>
                  <li>
                    <b>Progressive Web App</b>. When I first heard about PWA's I was keen to know more and wasted no time to built my own  experimental PWA
                  </li>
                  <li>
                    <b>Content Management System</b>. I've built several tailor-made CMS's from the ground up for different businesses which required the design and development of: database, backend and frontend code
                  </li>
                  <li>
                    <b>Restaurant ordering system</b> I worked on a restaurant ordering system which creates an in-direct communication with the website users and the restaurant's staff. 
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <h3 style={{marginTop: 0}}>Achievements / Initiatives</h3>
                <ul>
                  <li>
                    <b>Site Performance</b>. I am keen on website's loading time. I audit most of the sites I work on and recommend changes to optimize the performance. This usually results in quicker  browser first paint and user interactvity.
                  </li>
                  <li>
                    <b>Getting the job done</b>. I was assigned to a task which required advanced Microsoft Excel formulas to be converted into a web application for a bank based in Switzerland. Despite my lack of knowledge in finance at that time, with extraordinary effort and patience I succeeded and delivered before due time. 
                  </li>
                  <li>
                    <b>Improvements</b>.  I was hired to work as a full-stack developer on a legacy system. After analyzing the system, I proposed, developed and deployed several key features which affected both the performance and user experience. To name a few – added content lazy-loading and replaced enormous amount of API calls with a websocket connection between the client and the server.
                  </li>
                  <li>
                    <b>Efficiency</b>. In a hectic period for the business, I was assigned to produce responsive landing pages with each having a different layout and style with very short and strict deadlines. This was a great opportunity for me to sharpen my CSS skills and produce HTML/CSS pages efficiently. 
                  </li>
                  <li>
                    <b>Deliverying</b>.  I have a good track record of delivering ahead of schedule. This is due to my efficiency, commitment and dedication towards what I do - software development
                  </li>
                </ul>
              </div>
            </div>
          </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    ...state.highlights
  }
}

const mapDispatchToProps = {
  fetch_highlights
}

export default connect(mapStateToProps, mapDispatchToProps)(Highlights);