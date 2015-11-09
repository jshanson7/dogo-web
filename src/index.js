import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { graphqlServer } from 'config';
import Dogo from './components/Dogo';
import HomeRoute from './routes/HomeRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(graphqlServer)
);

ReactDOM.render(
  <Relay.RootContainer
    Component={Dogo}
    route={new HomeRoute()}
  />,
  document.getElementById('root')
);
