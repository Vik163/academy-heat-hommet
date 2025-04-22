function getNameFile(str: string) {
   const arr = str.split('/');
   return arr[arr.length - 1];
}

export const loadSrc = (src: string) => {
   //* -- data-srcset -------------------
   if (src.includes(' ')) {
      const newSrc = src
         .split(' ')
         .map((str) =>
            /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(str)
               ? require('../../../assets/images/' + getNameFile(str))
               : str,
         )
         .join(' ');

      return newSrc;
   }
   //* -- data-src -------------------
   return require('../../../' + getNameFile(src));
};
