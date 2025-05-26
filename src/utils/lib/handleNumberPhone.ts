/**
 *  маска набора номера телефона (+7 (999) 999-99-99)
 * @param id - id инпута телелефона
 */
export const handleNumberPhone = (id: string) => {
   const inp = document.getElementById(id)! as HTMLInputElement;

   inp.addEventListener('click', function () {
      inp.value = '+7 (';
   });

   let old = 0;

   inp.addEventListener('keydown', function () {
      const curLen = inp.value.length;

      if (curLen < old) {
         old--;
         return;
      }

      // if (curLen == 2) inp.value = inp.value + '(';

      if (curLen == 7) inp.value = inp.value + ') ';
      if (curLen == 12) inp.value = inp.value + '-';
      if (curLen == 15) inp.value = inp.value + '-';
      if (curLen > 17) inp.value = inp.value.substring(0, inp.value.length - 1);

      old++;
   });
};
