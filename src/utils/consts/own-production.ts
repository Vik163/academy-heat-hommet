import type { Card } from '../types/cards';
import {
   clampMediumB,
   clampMediumL,
   clampReinforcedSealB,
   clampReinforcedSealL,
   clampSuperHeavyB,
   clampSuperHeavyL,
} from './products/clamps/clamps-pipes';

export const ownProductionCards: Card[] = [
   {
      cardId: '4_1_3',
      type: 'Хомуты',
      category: 'Хомуты трубные',
      title: 'Хомут для средней нагрузки 2 1/2” (d73-80мм)',
      imgL: clampMediumL,
      imgB: clampMediumB,
   },
   {
      cardId: '4_1_73',
      type: 'Хомуты',
      category: 'Хомуты трубные',
      title: 'Усиленный хомут с уплотнением 4 1/2” (120-129мм)',
      imgL: clampReinforcedSealL,
      imgB: clampReinforcedSealB,
   },
   {
      cardId: '1_1_19',
      type: 'Система сухого монтажа',
      category: 'Система сухого монтажа',
      title: 'Крепление двойное удлиненное Хоммет',
      imgL: [
         'https://hommet.ru/media/hommet_cache/43/54/43546bf919d1ed64eb4826d2357a8713.webp',
      ],
      imgB: ['https://hommet.ru/media/uploads/хомуты/удл.webp'],
   },
   {
      cardId: '3_1_4',
      type: 'Профессиональный крепеж',
      title: 'Шпилька забивная М8*220 с дюбелем',
      imgL: [
         'https://hommet.ru/media/hommet_cache/d8/6d/d86d91fa857142218529428bd9895101.png',
      ],
      imgB: ['https://hommet.ru/media/uploads/хомуты/шпил.png'],
   },
   {
      cardId: '1_1_14',
      type: 'Система сухого монтажа',
      title: 'Торцевой элемент металлический',
      imgL: [
         'https://hommet.ru/media/hommet_cache/b8/be/b8be09e7996aed36e386ee00382f6f21.webp',
      ],
      imgB: ['https://hommet.ru/media/uploads/хомуты/иа_(convert.io).webp'],
   },
   {
      cardId: '1_1_10',
      type: 'Система сухого монтажа',
      title: 'Профиль Хоммет 4,5 метра',
      imgL: [
         'https://hommet.ru/media/hommet_cache/ab/e6/abe67c6742f14b2c76eeb8b41d512d47.webp',
      ],
      imgB: ['https://hommet.ru/media/products/images/проф_convert.io.webp'],
   },
   {
      cardId: '4_1_34',
      type: 'Хомуты',
      category: 'Хомуты трубные',
      title: 'Хомут для сверхтяжелой нагрузки 10” (d266-274мм)',
      imgL: clampSuperHeavyL,
      imgB: clampSuperHeavyB,
   },
   {
      cardId: '4_5_41',
      type: 'Хомуты',
      category: 'Хомуты для систем вентиляции',
      title: 'Вентиляционный хомут с резиновым уплотнением с гайкой М8 140',
      imgL: [
         'https://hommet.ru/media/hommet_cache/d1/66/d166dba2cca8f66439a83a2d2c803cc6.webp',
      ],
      imgB: [
         'https://hommet.ru/media/uploads/хомуты/вентиляционный_хомут_с_резиновым_уплотнением_с_гайкой_м8.webp',
      ],
   },
   {
      cardId: '2_1_2',
      type: 'Промышленный крепеж',
      title: 'Опора для средней нагрузки двухомутовая',
      imgL: [
         'https://hommet.ru/media/hommet_cache/45/cd/45cd81121db2b0210bac0fd3e0517473.webp',
      ],
      imgB: ['https://hommet.ru/media/uploads/хомуты/пт_(convert.io).webp'],
   },
   {
      cardId: '1_1_7',
      type: 'Система сухого монтажа',
      title: 'Комплект петель для профиля Хоммет',
      imgL: [
         'https://hommet.ru/media/hommet_cache/c2/25/c2251fc71c6ac206e70b75579efd854a.png',
      ],
      imgB: ['https://hommet.ru/media/products/images/kompl.png'],
   },
];
