import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { graphqlServer } from '../config';
import Dogo from './js/components/Dogo';
import HomeRoute from './js/routes/HomeRoute';
import './css/main.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(graphqlServer)
);

ReactDOM.render(
  <Relay.RootContainer
    Component={Dogo}
    route={new HomeRoute()}
  />,
  document.getElementById('Dogo')
);
