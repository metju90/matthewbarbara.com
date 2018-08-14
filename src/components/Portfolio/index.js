import React, { Component } from 'react';
import shortHash from 'short-hash';
import { connect } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';

import { fetch_portfolio } from '../../actions';
class Portfolio extends Component {

  componentDidMount() {
    this.props.fetch_portfolio();
  }

  render() {
    const {title, websites, isLoading} = this.props;
    if (isLoading) {
      return <PacmanLoader size="25" color="#285172" />
    }
    return (
        <section className="tout" id="portfolio">
            <div className="col-lg-12 text-center">
              <h2>{title}</h2>
              <hr />
              <ul>
                {websites.map(web => {
                  return (
                    <li key={shortHash(web.title)}>
                      <div>
                        <a  rel="noopener noreferrer" target="_blank" href={web.url}>{web.title}</a>
                        </div>
                    </li>

                  )
                })}
              </ul>
              <p>* Due to non-disclosure agreements I am limited to what I can list in my portfolio.</p>
            </div>
        </section>
      );
    }
}

const mapStateToProps = state => {
  return {
    ...state.portfolio
  }
}

const mapDispatchToProps = {
  fetch_portfolio
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);