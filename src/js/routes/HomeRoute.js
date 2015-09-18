import Relay from 'react-relay';

export default class HomeRoute extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`
      query {
        viewer
      }
    `,
  };
  static routeName = 'HomeRoute';
}
