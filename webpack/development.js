import { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';
import { inputDir, config, entry, plugins, preLoaders, loaders } from './common';
import { host, port } from './dev-server/config';

export default Object.assign({}, config, {
  devtool: 'eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
  ].concat(entry),
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoErrorsPlugin()
  ].concat(plugins),
  module: {
    preLoaders: preLoaders,
    loaders: loaders.concat({
      test: /\.jsx?$/,
      loaders: ['source-map-loader', 'react-hot', 'babel'],
      include: inputDir
    })
  }
});
