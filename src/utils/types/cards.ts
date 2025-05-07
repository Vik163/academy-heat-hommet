export type ViewName =
   | 'Хомуты'
   | 'Промышленный крепеж'
   | 'Профессиональный крепеж'
   | 'Система сухого монтажа';

export type CategoryClamps =
   | 'Хомуты трубные'
   | 'Хомуты спринклерные'
   | 'Хомуты из нержавеющей стали'
   | 'Хомуты для водосточных систем и дымоходов'
   | 'Хомуты для систем вентиляции'
   | 'Крепеж для SML-систем';

export type CategoryDSM = 'Система сухого монтажа';
export type CategoryProf = 'Профессиональный крепеж';
export type CategoryIndustrial = 'Промышленный крепеж';

export type Categories =
   | CategoryClamps
   | CategoryDSM
   | CategoryProf
   | CategoryIndustrial;

export interface Catalog {
   title: string;
   titlePage: string;
   imgL: string;
   description?: string;
   categories?: Catalog[];
   titleText?: string;
   text?: string;
}

export interface Card {
   cardId: string;
   type: ViewName;
   pathname?: string;
   category?: Categories;
   title: string;
   imgB: string;
   imgL: string;
}

export type ViewProducts = Partial<Record<Categories, Card[]>>;
