import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/types/config';

const path = require('path');

export default (env: BuildEnv) => {
   const paths: BuildPaths = {
      entryMain: path.resolve(__dirname, './src/pages/main/index.ts'),
      entryCatalog: path.resolve(__dirname, './src/pages/catalog/catalog.ts'),
      entryPolitic: path.resolve(__dirname, './src/pages/politic/politic.ts'),
      entryContacts: path.resolve(
         __dirname,
         './src/pages/contacts/contacts.ts',
      ),
      build: path.resolve(__dirname, 'build'),
      main: path.resolve(__dirname, './src/pages/main/index.html'),
      catalog: path.resolve(__dirname, './src/pages/catalog/catalog.html'),
      politic: path.resolve(__dirname, './src/pages/politic/politic.html'),
      contacts: path.resolve(__dirname, './src/pages/contacts/contacts.html'),
      src: path.resolve(__dirname, 'src'),
   };

   const mode = env.mode || 'development';
   const port = env.port || 3000;
   const isDev = mode === 'development';

   const config: webpack.Configuration = buildWebpackConfig({
      paths,
      mode,
      port,
      isDev,
   });

   return config;
};
