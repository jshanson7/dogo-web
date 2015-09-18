import React, { Component } from 'react';
import Relay from 'react-relay';

class DogoWeb extends Component {
  render() {
    return <div className='App'>
      <div>
        <h1>DogoWeb</h1>
        <h1>Widget list</h1>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    </div>;
  }
};

export default Relay.createContainer(DogoWeb, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
});
