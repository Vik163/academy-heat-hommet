import webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'
import { BuildOptions } from '../types/config';

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: 'main.js',
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: buildResolvers(options),
    devtool: isDev ? "eval-cheap-module-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
