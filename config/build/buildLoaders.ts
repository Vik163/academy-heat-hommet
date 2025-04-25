import { BuildOptions } from '../types/config'
import { buildBabelLoader } from './loaders/babelLoader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions) {
  const {isDev} = options;
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
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  }

//   const typescriptLoader = {
//     test: /\.tsx?$/,
//     use: 'ts-loader',
//     exclude: /node_modules/,
// };

  const codeBabelLoader = buildBabelLoader()
      // const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
      // const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });


  return {
    rules: [fileLoader, htmlLoader, codeBabelLoader, cssLoader]
  }
}
