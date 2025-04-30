export type TypeProduct = 'clamp' | 'industr' | 'prof' | 'dms';
export type SubType =
   | 'pipe'
   | 'splinker'
   | 'stainless'
   | 'chimneys'
   | 'vent'
   | 'sml';

export interface ICatalog {
   title: string;
   link: string;
   imgL: string;
   description: string;
}

export interface Card {
   cardId: number;
   type: TypeProduct;
   subType?: SubType;
   title: string;
   link: string;
   imgB: string;
   imgL: string;
}
