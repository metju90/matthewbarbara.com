import React from 'react';
import { connect } from 'react-redux';
import fetch_about from '../../actions';
import FontAwesome from 'react-fontawesome'

export default () => {
    return (
            <section id="contact">
                <div className>
                    <div className="col-lg-12 text-center">
                        <h2>Contact Me</h2>
                        <hr />
                        <ul>
                            <li>
                                <div className="contact">
                                    <FontAwesome name="envelope" /> barbaramatthew90 at gmail dot com
                    </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <FontAwesome name="skype" /> metju90
                    </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <FontAwesome name="linkedin" /><a href="https://www.linkedin.com/in/matthew-barbara-66a78064/">Linkedin</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <FontAwesome name="stack-overflow" /><a href="https://stackoverflow.com/users/3861691/matthew-barbara">Stackoverflow</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <FontAwesome name="twitter" /><a href="https://twitter.com/Metju90">Twitter</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <FontAwesome name="phone" /> +41 79636645 (Swiss)
                    </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <FontAwesome name="phone" /> +356 79938689 (Malta)
                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    );
}