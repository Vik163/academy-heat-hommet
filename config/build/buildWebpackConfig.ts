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
    // entry: [paths.entry, paths.entry],
    entry: {
      main: paths.entry,
      catalog: './src/app/catalog.ts'
    },
    output: {
      path: paths.build,
      filename: '[name].js',
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
