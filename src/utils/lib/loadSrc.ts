function getNameFile(str: string) {
   const arr = str.split('/');
   const index = arr.indexOf('images') + 1;
   const address = arr.slice(index).join('/');

   return address;
}

/**
 * Предварительная загрузка изображений (webpack) через require
 * @param src -  url (html); если '#' - отменяет, начинается с http - возвращает без изменений, остальные преобразует
 * @returns url
 * ../../ - вложенность от loadSrc к папке assets
 */
export const loadSrc = (src: string) => {
   if (src === '#') {
      return require('../../assets/images/no-image.png');
   }
   if (src.startsWith('http')) {
      return src;
   }

   //* -- data-srcset -------------------
   if (src.includes(' ')) {
      const newSrc = src
         .split(' ')
         .map((str) =>
            /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(str)
               ? require('../../assets/images/' + getNameFile(str))
               : str,
         )
         .join(' ');

      return newSrc;
   }
   //* -- shortSrc только папки (assets/images/file.png)------------
   const shortSrc = src.split('/').slice(-3).join('/');

   //* -- data-src --- srcset ---------------
   return require('../../' + shortSrc);
};
