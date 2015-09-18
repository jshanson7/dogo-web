'use strict';

const getBabelRelayPlugin = require('babel-relay-plugin');
const schema = require('../../dogo-server/src/db/graphql/schema.json');

module.exports = getBabelRelayPlugin(schema.data);