import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch_about from '../../actions';
class About extends Component  {

    componentDidMount() {
      this.props.fetch_about();
    }

    render() {
      const { title, content} = this.props;
      const contentList = content.split('\n')
      console.log('the props areee', contentList);
      return (
      <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>{title}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
          {contentList.map(c => <p>{c}</p>)}
          </div>
        </div>
      </div>
    </section>
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