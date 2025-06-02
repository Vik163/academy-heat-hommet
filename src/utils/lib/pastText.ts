import { $add, $class } from './getElement';

const addText = (
   tag: string,
   block: Element,
   text: string,
   place: 'product' | 'catalog',
) => {
   const el = document.createElement(tag);

   $add(`${place}__description-${tag}`, el);
   el.textContent = text.replace(`<${tag}>`, '');

   //* вставляю пробелы ------------------
   if (tag === 'p') {
      const gap = document.createElement('span');
      $add(`${place}__gap-p`, gap);

      el.prepend(gap);
   }

   block.append(el);
};

export const pastText = (
   block: HTMLElement,
   text: string,
   place: 'product' | 'catalog',
) => {
   block.querySelectorAll('p')!.forEach((p) => p.remove());
   block.querySelectorAll('h4')!.forEach((p) => p.remove());
   const arrTexts = text.split(/\n/);
   arrTexts.forEach((text) => {
      // теги добавляются только спереди
      if (text.startsWith('<p>')) {
         // тег <span> добавляется с двух сторон (образец <p><span>Усиленные хомуты<span/> разработаны)
         if (text.includes('<span>')) {
            // сразу встраиваю тег <р>
            const el = document.createElement('p');

            block.append(el);
            $add(`${place}__description-p`, el);
            // убираю разделитель <p>
            const textP = text.replace(`<p>`, '');
            // делит по конечному тегу <span/>
            const arrTextP = textP.split('</span>');
            arrTextP.forEach((itemText) => {
               // если начинается с начального тега <span>, то добавляет к классу span-select, иначе добавляет span
               if (itemText.startsWith('<span>')) {
                  const newSpan = itemText.replace(`<span>`, '');
                  addText('span-select', el, newSpan, place);
               } else {
                  addText('span', el, itemText, place);
               }
            });
         } else addText('p', block, text, place);
      }
      if (text.startsWith('<ul>')) {
         addText('ul', block, text, place);
      }
      if (text.startsWith('<li>')) {
         addText('li', block, text, place);
      }
      if (text.startsWith('<h4>')) {
         addText('h4', block, text, place);
      }
   });
};
