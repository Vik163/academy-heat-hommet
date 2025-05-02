type BuildMode = 'production' | 'development';

export interface BuildEnv {
   mode: BuildMode;
   port: number;
}

export interface BuildPaths {
   entryMain: string;
   entryCatalog: string;
   build: string;
   main: string;
   catalog: string;
   src: string;
   favicon?: string;
}

export interface BuildOptions {
   paths: BuildPaths;
   mode: BuildMode;
   port: number;
   isDev: boolean;
}
