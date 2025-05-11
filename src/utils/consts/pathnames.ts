import { Categories, ViewName } from '../types/catalog';
import { CategoryNames, ViewNames } from './categoriesNames';

export const pathnameByView: Record<ViewName, string> = {
   [ViewNames.SYSTEM_DRY]: 'sistema-suhogo-montazha',
   [ViewNames.INDUSTRIAL_FAST]: 'promyshlennyj-krepezh',
   [ViewNames.PROF_FAST]: 'professionalnyj-krepezh-k-inzhenernoj-santehnike',
   [ViewNames.CLAMPS]: 'homuty',
};

export const pathnameByCategories: Record<Categories, string> = {
   [ViewNames.SYSTEM_DRY]: 'sistema-suhogo-montazha',
   [ViewNames.INDUSTRIAL_FAST]: 'promyshlennyj-krepezh',
   [ViewNames.PROF_FAST]: 'professionalnyj-krepezh-k-inzhenernoj-santehnike',
   [CategoryNames.CLAMPS_PIPE]: 'homuty-trubnye',
   [CategoryNames.CLAMPS_SPRINKLER]: 'homuty-sprinklernye',
   [CategoryNames.CLAMPS_STAINLESS]: 'homuty-iz-nerzhavejki',
   [CategoryNames.CLAMPS_DRAINAGE]: 'homuty-dlya-vodostochnyh-sistem',
   [CategoryNames.CLAMPS_VENT]: 'homuty-dlya-sistem-ventilyacii',
   [CategoryNames.CLAMPS_SML]: 'homuty-dlya-truboprovodnyh-sistem',
};
