import { BuildOptions } from '../types/config'
import { buildBabelLoader } from './loaders/babelLoader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions) {
  const {isDev} = options;
  const isProd = !isDev

  const htmlLoader = {
    test: /\.html$/i,
    loader: 'html-loader',
  }

  // Можно добавить обработку шрифтов
  const fileLoader = {
    test: /\.(png|svg|jpg|jpeg|gif|ttf|woff2)$/i,
    type: 'asset/resource',
    generator: {
      filename: '[name].[ext]',
    },
  }

  const cssLoader = {
    test: /\.css$/i,
    use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
  }

  const codeBabelLoader = buildBabelLoader()

  return {
    rules: [fileLoader, htmlLoader, codeBabelLoader, cssLoader]
  }
}
