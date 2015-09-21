import React, { Component } from 'react';
import Relay from 'react-relay';
import AdminDashboard from './AdminDashboard';

class DogoWeb extends Component {
  render() {
    return <AdminDashboard { ...this.props }/>;
  }
}

export default Relay.createContainer(DogoWeb, {
  fragments: {
    app: () => Relay.QL`
      fragment on App {
        ${AdminDashboard.getFragment('app')},
      }
    `,
  },
});
