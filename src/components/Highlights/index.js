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
      <section className="tout" id="interests">
            <Waypoint topOffset="-50%" onEnter={()=> this.setState({visible:true})}>
                {this.state.visible && <LoadableComponent/>}
            </Waypoint>
        </section>
    )
  }
}