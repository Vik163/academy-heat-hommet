function getNameFile(str: string) {
   const arr = str.split('/');
   const index = arr.indexOf('images') + 1;
   const address = arr.slice(index).join('/');

   return address;
}

/**
 * Предварительная загрузка изображений (webpack) через require
 * @param src - название файла
 * @returns url, который вставляется в src
 */
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

   //* -- data-src --- srcset ----------------
   return require('../../../' + src);
};
