import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConf from '../webpack/development.js';
import { host, port } from './config';
import { outputDir as contentBase } from '../webpack/common';

export const devServer = new WebpackDevServer(webpack(webpackConf), { hot: true, contentBase });
devServer.start = start;

if (!module.parent) { start(); }

export function start() {
  return devServer.listen(port, host, () =>
    console.log(`devServer listening at ${host}:${port}/webpack-dev-server/`)
  );
}
