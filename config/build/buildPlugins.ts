import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from '../../../../dev/tanks-2d/config/build/types/config'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export const buildPlugins = (options: BuildOptions) => {
  const { isDev, paths } = options
  const isProd = !isDev; 


  const plugins = [
    // пробрасывает глобальные переменные
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    // отображения отчетов о ходе выполнения во время компиляции
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon
    }),
    // обработка типов отдельно при загрузке
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        // настройка babel - https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/tree/main/examples/babel-loader
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    }),
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      // не открывается постоянно
      openAnalyzer: false, // запуск по ссылке в терминале
    }))
  }

    if (isProd) {
        // Этот плагин извлекает CSS из отдельных файлов. Он создаёт файл CSS для каждого JS-файла, содержащего CSS. Он поддерживает загрузку CSS по требованию и SourceMaps
        plugins.push(
           new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash:8].css',
              chunkFilename: 'css/[name].[contenthash:8].css',
           }),
        );
     }
  return plugins
}
