import React, { Component } from 'react';
import Relay, { createContainer } from 'react-relay';
import AdminDashboard from './AdminDashboard';

class Dogo extends Component {
  render() {
    return <div>
      <AdminDashboard { ...this.props }/>
    </div>;
  }
}

export default createContainer(Dogo, {
  fragments: {
    app: () => Relay.QL`
      fragment on App {
        ${AdminDashboard.getFragment('app')},
      }
    `,
  },
});

