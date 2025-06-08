import { $class } from './getElement';

export const removeElement = (className: string) => {
   const block = $class(className);
   if (block) block.remove();
};
