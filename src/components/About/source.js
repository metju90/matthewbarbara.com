import React, { Component } from 'react';
import { connect } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';
import shortHash from 'short-hash';
import { fetch_about } from '../../actions';

class About extends Component  {

    componentDidMount() {
      this.props.fetch_about();
    }

    render() {
      const { title, content, isLoading} = this.props;
      const contentList = content.split('\n');
      console.log('the props areee', contentList);
      if (isLoading) {
        return <PacmanLoader size="25" color="#2196F3" />
      }
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{title}</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
            {contentList.map(c => <p key={shortHash(Math.random()*1)}>{c}</p>)}
            </div>
          </div>
        </React.Fragment>
      )
    }
};

const mapStateToProps = state => {
  return {
    ...state.about
  }
}

const mapDispatchToProps = {
  fetch_about
}

export default connect(mapStateToProps, mapDispatchToProps)(About);