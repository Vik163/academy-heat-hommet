const addText = (tag: string, block: Element, text: string) => {
   const el = document.createElement(tag);
   el.classList.add(`product__description-${tag}`);
   el.textContent = text.replace(`<${tag}>`, '');
   block.append(el);
};

export const pastText = (block: Element, text: string) => {
   block.querySelectorAll('p')!.forEach((p) => p.remove());
   block.querySelectorAll('h4')!.forEach((p) => p.remove());
   const arrTexts = text.split(/\n/);
   arrTexts.forEach((text) => {
      if (text.startsWith('<p>')) {
         addText('p', block, text);
      }
   });
   console.log('arr:', arrTexts);
};
