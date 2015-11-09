import { readFileSync } from 'fs';
import { resolve } from 'path';
import functions from 'postcss-functions';
import precss from 'precss';
import nested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import calc from 'postcss-calc';
import csswring from 'csswring';
import { compile as compileJade } from 'jade';
import ExtractTextPlugin, { extract as extractText } from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import cssFunctions from '../../src/mixins/cssFunctions';

export const entry = resolve(__dirname, '../../src/index.js');
export const inputDir = resolve(__dirname, '../../src');
export const outputDir = resolve(__dirname, '../../dist');
export const outputFile = 'bundle';

export const config = {
  output: {
    path: outputDir,
    filename: outputFile + '.js',
    publicPath: outputDir
  },
  resolve: {
    root: inputDir,
    extensions: ['', '.js', '.jsx', '.css', '.jade']
  },
  postcss: [
    functions({ functions: cssFunctions }),
    precss,
    nested,
    autoprefixer,
    calc,
    csswring
  ],
  stats: { colors: true }
};

export const plugins = [
  new ExtractTextPlugin(outputFile + '.css'),
  new HtmlWebpackPlugin({
    title: 'Dogo',
    templateContent: () => {
      const file = readFileSync(resolve(inputDir, 'index.jade'), 'utf8');
      return compileJade(file)();
    }
  })
];

export const loaders = [
  {
    test: /\.css$/,
    loader: extractText(
      'style-loader',
      ['css-loader', 'postcss-loader?parser=postcss-scss', 'cssnext-loader'].join('!')
    ),
    include: inputDir
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
      'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, svgo:{datauri: true}}'
    ]
  }
];

export const preLoaders = [
  {
    test: /\.jsx?$/,
    loader: 'eslint-loader',
    include: inputDir
  }
];
