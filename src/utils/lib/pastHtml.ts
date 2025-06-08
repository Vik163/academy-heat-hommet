import { removeElement } from './removeElement';

export const pastHtml = (
   html: string,
   classHtmlWrapper: string,
   block: HTMLElement,
) => {
   removeElement(classHtmlWrapper);

   const parser = new DOMParser().parseFromString(html, 'text/html')!;
   const descriptionBlock = parser.querySelector(
      `.${classHtmlWrapper}`,
   )! as HTMLElement;

   block.append(descriptionBlock);
};
