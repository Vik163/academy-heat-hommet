declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.html' {
   const value: any;
   export default value;
}

declare const __IS_DEV__: boolean;
