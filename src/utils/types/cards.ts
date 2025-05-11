import type { Categories, ViewName } from './catalog';

export interface Card {
   cardId: string;
   type?: ViewName;
   pathname?: string;
   category?: Categories;
   title: string;
   imgB: string;
   imgL: string;
}
