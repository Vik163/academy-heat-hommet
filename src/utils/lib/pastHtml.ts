import { $class } from './getElement';

export const pastHtml = (
   html: string,
   classHtmlWrapper: string,
   block: HTMLElement,
) => {
   const nestedBlock = $class(classHtmlWrapper);
   if (nestedBlock) nestedBlock.remove();

   const parser = new DOMParser().parseFromString(html, 'text/html')!;
   const descriptionBlock = parser.querySelector(
      `.${classHtmlWrapper}`,
   )! as HTMLElement;

   block.append(descriptionBlock);
};
