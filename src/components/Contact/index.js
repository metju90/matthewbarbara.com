import React, { Component } from 'react';
import Loadable from 'react-loadable';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Waypoint from 'react-waypoint';

const LoadableComponent = Loadable({
  loader: () => import('./source'),
  loading: PacmanLoader,
});

export default class App extends Component {
    state = {
        visible: false
    }
  render() {
    return   (
        <section id="contact">
            <Waypoint onEnter={()=> this.setState({visible:true})}>
                {this.state.visible && <LoadableComponent/>}
            </Waypoint>
        </section>
    )
  }
}