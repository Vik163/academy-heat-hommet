import { Categories, ViewName } from '../types/catalog';
import { CategoryNames, ViewNames } from './categoriesNames';

export const cardIdByViewName: Record<string, ViewName> = {
   '1': ViewNames.SYSTEM_DRY,
   '2': ViewNames.INDUSTRIAL_FAST,
   '3': ViewNames.PROF_FAST,
   '4': ViewNames.CLAMPS,
};
export const cardIdByCategoryName: Record<string, Categories> = {
   '1_1': CategoryNames.SYSTEM_DRY,
   '2_1': CategoryNames.INDUSTRIAL_FAST,
   '3_1': CategoryNames.PROF_FAST,
   '4_1': CategoryNames.CLAMPS_PIPE,
   '4_2': CategoryNames.CLAMPS_SPRINKLER,
   '4_3': CategoryNames.CLAMPS_STAINLESS,
   '4_4': CategoryNames.CLAMPS_DRAINAGE,
   '4_5': CategoryNames.CLAMPS_VENT,
   '4_6': CategoryNames.CLAMPS_SML,
};
