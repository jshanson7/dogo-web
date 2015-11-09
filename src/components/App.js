import React, { Component } from 'react';
import { injectNetworkLayer, DefaultNetworkLayer, RootContainer } from 'react-relay';
import { graphqlServer } from 'config';
import Root from '../query/Root';
import Dogo from './Dogo';

injectNetworkLayer(new DefaultNetworkLayer(graphqlServer));

export default class App extends Component {
  render() {
    return (
      <RootContainer
        route={new Root()}
        Component={Dogo}
        />
    );
  }
}

