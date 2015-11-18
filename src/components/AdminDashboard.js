import React, { Component } from 'react';
import Relay from 'react-relay';

class AdminDashboard extends Component {
  render() {
    return <div className='AdminDashboard'>
      <div>
        <div>Users</div>
        <ul>
          {this.props.app.users.edges.map((edge, index) =>
            <li key={edge.node.id}>{index}: {edge.node.first_name} {edge.node.last_name}</li>
          )}
        </ul>
      </div>

      <div>
        <div>Shelters</div>
        <ul>
          {this.props.app.shelters.edges.map((edge, index) =>
            <li key={edge.node.id}>{index}: {edge.node.name}</li>
          )}
        </ul>
      </div>

      <div>
        <div>Dogs</div>
        <ul>
          {this.props.app.dogs.edges.map((edge, index) =>
            <li key={edge.node.id}>{index}: {edge.node.name}</li>
          )}
        </ul>
      </div>

      <div>
        <div>Notes</div>
        <ul>
          {this.props.app.notes.edges.map((edge, index) =>
            <li key={edge.node.id}>{index}: {edge.node.text}</li>
          )}
        </ul>
      </div>
    </div>;
  }
}

export default Relay.createContainer(AdminDashboard, {
  fragments: {
    app: () => Relay.QL`
      fragment on App {
        users(first: 1000) {
          edges {
            node {
              id,
              first_name,
              last_name,
            }
          }
        },
        shelters(first: 1000) {
          edges {
            node {
              id,
              name,
            }
          }
        },
        dogs(first: 1000) {
          edges {
            node {
              id,
              name,
            }
          }
        },
        notes(first: 1000) {
          edges {
            node {
              id,
              text,
            }
          }
        }
      }
    `,
  },
});
