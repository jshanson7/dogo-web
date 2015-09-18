import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Dogo from './js/components/Dogo';
import HomeRoute from './js/routes/HomeRoute';
import './css/main.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:1337/graphql')
);

ReactDOM.render(
  <Relay.RootContainer
    Component={Dogo}
    route={new HomeRoute()}
  />,
  document.getElementById('Dogo')
);
