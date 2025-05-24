type BuildMode = 'production' | 'development';

export interface BuildEnv {
   mode: BuildMode;
   port: number;
}

export interface BuildPaths {
   entryMain: string;
   entryCatalog: string;
   entryPolitic: string;
   entryContacts: string;
   build: string;
   main: string;
   catalog: string;
   politic: string;
   contacts: string;
   src: string;
   favicon?: string;
}

export interface BuildOptions {
   paths: BuildPaths;
   mode: BuildMode;
   port: number;
   isDev: boolean;
}
