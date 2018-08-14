import React, { Component } from 'react';
import shortHash from 'short-hash';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome'
import PacmanLoader from 'react-spinners/PacmanLoader';
import { fetch_contact } from '../../actions';

class Contact extends Component {

    componentDidMount() {
      this.props.fetch_contact();
    }
  
    render() {
    const { title, content, isLoading } = this.props;
    if (isLoading) {
        return  (
        <section id="contact">
            <PacmanLoader size="25" color="#fff" />
        </section>)
      }
    return (
            <section id="contact">
                <div className="container">
                    <div className="col-lg-4 col-lg-offset-4 text-center">
                        <h2>{title}</h2>
                        <hr />
                        <ul>
                            {content.map(c => {
                                return (
                                    <li key={shortHash(Math.random()*1)}>
                                        <div className="contact">
                                            <FontAwesome name={c.icon} />
                                             {c.url ? <a target="_blank" href={c.url}> {c.title} </a> : c.title}
                                        </div>
                                    </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
      ...state.contact
    }
  }
  
  const mapDispatchToProps = {
    fetch_contact
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
  