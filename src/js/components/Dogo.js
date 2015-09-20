import React, { Component } from 'react';
import Relay from 'react-relay';

class DogoWeb extends Component {
  render() {
    return <div className='App'>
      <div>
        <div>User list</div>
        <ul>
          {this.props.admin.users.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.first_name} {edge.node.last_name} (ID: {edge.node.id})</li>
          )}
        </ul>
        {
        // <div>Widget list</div>
        // <ul>
        //   {this.props.viewer.widgets.edges.map(edge =>
        //     <li key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</li>
        //   )}
        // </ul>
        }
      </div>
    </div>;
  }
}

export default Relay.createContainer(DogoWeb, {
  fragments: {
    // viewer: () => Relay.QL`
    //   fragment on User {
    //     widgets(first: 10) {
    //       edges {
    //         node {
    //           id,
    //           name,
    //         },
    //       },
    //     },
    //   }
    // `,
    admin: () => Relay.QL`
      fragment on Admin {
        users(first: 200) {
          edges {
            node {
              id,
              first_name,
              last_name,
            },
          },
        },
      }
    `,
  },
});
