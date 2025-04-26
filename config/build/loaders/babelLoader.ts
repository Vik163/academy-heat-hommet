export function buildBabelLoader () {
  return {
    test:  /\.(js|ts)$/, 
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader', // преобразует в обычный код JavaScript, поддерживаемый старыми браузерами
      options: {
        cacheDirectory: true, //  увеличивает скорость
        presets: ['@babel/preset-env'], // для компиляции ES2015+ в ES5., который понимают браузеры
        plugins: [
          [
            '@babel/plugin-transform-typescript', // плагин, который позволяет анализировать и преобразовывать код TypeScript в JavaScript
          ],
          '@babel/plugin-transform-runtime' // Плагин, который позволяет повторно использовать внедряемый вспомогательный код Babel для экономии места в коде.
        ].filter(Boolean)
      }
    },
  }
}






