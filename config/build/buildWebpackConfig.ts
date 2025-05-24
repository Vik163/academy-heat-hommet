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
      main: paths.entryMain,
      catalog: paths.entryCatalog,
      contacts: paths.entryContacts
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
    externals: {
      '@yandex/ymaps3-types': [
        `promise new Promise((resolve) => {
            if (typeof ymaps3 !== 'undefined') {
              return ymaps3.ready.then(() => resolve(ymaps3));
            }

            const script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/v3/?apikey=${process.env.YA_MAP_KEY}&lang=ru_RU";
            script.onload = () => {
              ymaps3.ready.then(() => resolve(ymaps3));
            };
            document.head.appendChild(script);
          })`
      ]
    },
  }
}
