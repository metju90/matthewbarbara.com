import React, { Component } from 'react';
import shortHash from 'short-hash';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome'
import { fetch_contact } from '../../actions';

class Contact extends Component {

    componentDidMount() {
      this.props.fetch_contact();
    }
  
    render() {
    const { title, content } = this.props;
    return (
            <section id="contact">
                <div className>
                    <div className="col-lg-12 text-center">
                        <h2>{title}</h2>
                        <hr />
                        <ul>
                            {content.map(c => {
                                return (
                                    <li key={shortHash(c.title)}>
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
  