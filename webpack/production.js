import { config, entry, plugins, preLoaders, loaders, inputDir } from './common';

export default Object.assign({}, config, {
  entry: [entry],
  plugins: plugins,
  module: {
    preLoaders: preLoaders,
    loaders: loaders.concat({
      test: /\.jsx?$/,
      loader: 'babel',
      include: inputDir
    })
  }
});
