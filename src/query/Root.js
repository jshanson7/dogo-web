import Relay from 'react-relay';

export default class Root extends Relay.Route {
  static queries = {
    app: () => Relay.QL`
      query {
        app
      }
    `,
  };
  // static paramDefinitions = {};
  static routeName = 'Root';
}
