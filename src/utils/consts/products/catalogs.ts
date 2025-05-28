import type { Catalog } from '../../types/catalog';
import { textDrainage } from './clamps/clamps-drainage-systems';
import { textPipes } from './clamps/clamps-pipes';
import { textSML } from './clamps/clamps-sml-system';
import { textSprinkler } from './clamps/clamps-sprinkler';
import { textStainless } from './clamps/clamps-stainless';
import { textDSM } from './sdmData/sdmData';
import { textProf } from './prof-fasteners/prof-fasteners';

export const titleCatalog =
   'КАТАЛОГ ПРОДУКЦИИ ПРОИЗВОДСТВЕННОЙ КОМПАНИИ ХОММЕТ';

export const catalog: Catalog[] = [
   {
      title: 'Система сухого монтажа',
      titlePage: 'Хоммет: Система сухого монтажа от производителя',
      imgL: '../../../assets/images/system.jpg',
      description:
         'Углеродистая сталь и цинковое покрытие обеспечивает изделиям прочность и долговечность',
      titleText: 'Купить систему сухого монтажа от производителя',
      text: textDSM,
   },
   {
      title: 'Промышленный крепеж',
      titlePage: 'Хоммет: Промышленный крепеж от производителя',
      imgL: '../../../assets/images/prom.png',
      description:
         'Промышленный крепеж - это специальные элементы, используемые для соединения различных деталей и конструкций',
   },
   {
      title: 'Профессиональный крепеж',
      titlePage: 'Хоммет: Профессиональный крепеж от производителя',
      imgL: '../../../assets/images/prof.png',
      description: `Профессиональный крепеж обеспечивает надежную и безопасную установку систем водоснабжения, отопления и канализации`,
      titleText:
         'Купить Профессиональный крепеж к инженерной сантехнике: шпилька, шайба, опора фиксирующая, консоль от производителя ',
      text: textProf,
   },
   {
      title: 'Хомуты',
      titlePage: 'Хоммет: Хомуты от производителя',
      imgL: '../../../assets/images/clamp.png',
      description:
         'Выбор конкретного типа зависит от условий эксплуатации, требованиям герметичности и надежности',
      categories: [
         {
            title: 'Хомуты трубные',
            titlePage: 'Хоммет: Хомуты трубные от производителя',
            imgL: '../../../assets/images/clamps_pipe.png',
            titleText: 'Купить Хомуты трубные от производителя ',
            text: textPipes,
         },
         {
            title: 'Хомуты спринклерные',
            titlePage: 'Хоммет: Хомуты спринклерные от производителя',
            imgL: '../../../assets/images/clamps_splinker.png',
            titleText: 'Купить Хомуты спринклерные от производителя ',
            text: textSprinkler,
         },
         {
            title: 'Хомуты из нержавеющей стали',
            titlePage: 'Хоммет: Хомуты из нержавеющей стали от производителя',
            imgL: '../../../assets/images/clamps_stainless.png',
            titleText: 'Купить Хомуты из нержавеющей стали от производителя',
            text: textStainless,
         },
         {
            title: 'Хомуты для водосточных систем и дымоходов',
            titlePage:
               'Хоммет: Хомуты для водосточных систем и дымоходов от производителя',
            imgL: '../../../assets/images/clamps_drainage.png',
            titleText:
               'Купить Хомуты для водосточных систем и дымоходов от производителя',
            text: textDrainage,
         },
         {
            title: 'Хомуты для систем вентиляции',
            titlePage: 'Хоммет: Хомуты для систем вентиляции от производителя',
            imgL: '../../../assets/images/clamps_vent.png',
         },
         {
            title: 'Крепеж для SML-систем',
            titlePage: 'Хоммет: Крепеж для SML-систем от производителя',
            imgL: '../../../assets/images/clamp.png',
            titleText: 'Купить Крепеж для SML систем от производителя ',
            text: textSML,
         },
      ],
   },
];
