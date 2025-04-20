import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env) => {
   const paths = {
      entry: path.resolve(__dirname, 'src', 'index.js'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'pages', 'index.html'),
      src: path.resolve(__dirname, 'src'),
      // favicon: path.resolve(__dirname, 'public', 'tank_icon.png'),
   };

   const mode = env.mode || 'development';
   const port = env.port || 3000;
   const isDev = mode === 'development';

   const config = buildWebpackConfig({
      paths,
      mode,
      port,
      isDev,
   });

   return config;
};
