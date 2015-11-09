import './Dogo.css';
import React, { Component } from 'react';
import Relay from 'react-relay';
import AdminDashboard from './AdminDashboard';
import { bemClasser } from '../utils';

const bem = bemClasser('Dogo');

class Dogo extends Component {
  render() {
    return <div className={bem()}>
      <AdminDashboard { ...this.props }/>
    </div>;
  }
}

export default Relay.createContainer(Dogo, {
  fragments: {
    app: () => Relay.QL`
      fragment on App {
        ${AdminDashboard.getFragment('app')},
      }
    `,
  },
});
