import { Categories, ViewName } from '../types/catalog';

export const pathnameByView: Record<ViewName, string> = {
   'Система сухого монтажа': 'sistema-suhogo-montazha',
   'Промышленный крепеж': 'promyshlennyj-krepezh',
   'Профессиональный крепеж':
      'professionalnyj-krepezh-k-inzhenernoj-santehnike',
   Хомуты: 'homuty',
};

export const pathnameByCategories: Record<Categories, string> = {
   'Система сухого монтажа': 'sistema-suhogo-montazha',
   'Промышленный крепеж': 'promyshlennyj-krepezh',
   'Профессиональный крепеж':
      'professionalnyj-krepezh-k-inzhenernoj-santehnike',
   'Хомуты трубные': 'homuty-trubnye',
   'Хомуты спринклерные': 'homuty-sprinklernye',
   'Хомуты из нержавеющей стали': 'homuty-iz-nerzhavejki',
   'Хомуты для водосточных систем и дымоходов':
      'homuty-dlya-vodostochnyh-sistem',
   'Хомуты для систем вентиляции': 'homuty-dlya-sistem-ventilyacii',
   'Крепеж для SML-систем': 'homuty-dlya-truboprovodnyh-sistem',
};
