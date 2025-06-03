import type { Card } from '@/utils/types/cards';
import type { CategoryIndustrial } from '@/utils/types/catalog';

const support = `<p>Опора применяется для подвески сетей трубопроводов и вентиляционных каналов снаружи зданий.
<p>Предназначена для препятствия раскачиванию систем воздуховодов и трубопроводов  среднего и большого диаметров.
<p>Установка опор допускается в зонах с перепадами температур и среднем уровнем коррозии, для высоко коррозийной среды может использоваться термодиффузия.
<p>Простота сборки и установки.`;

const supportSlide = `<p>Скользящая опора предназначена для пластмассовых труб с большим линейным расширением, применяется  также при  потолочном монтаже, на стояках или для напольного монтажа.
<p>Максимально рекомендуемая нагрузка-1000 Н. Сталь-08ПСю Покрытие- цинк 8-12мкр. Башмачок-капралон.`;

const bracket = `<p>Кронштейн предназначен для крепления воздуховодов и элементов систем вентиляции.         
<p>В сборе с виброизоляционной резиновой подушкой, которая поглощает вибрацию.
<p>Внутреннее отверстие под шпильку диаметром 8–10 мм.
<p>Толщина металла: 2,0 мм.
<p>Изготовлен из стали ГОСТ 16523-97, ГОСТ 19904-90.
<p>Гальванизирован для защиты от коррозии,  с гальванопокрытием толщиной 8-10 микрон.`;

export const industrialFasteners: Record<CategoryIndustrial, Card[]> = {
   'Промышленный крепеж': [
      {
         cardId: '2_1_1',
         title: 'Опора для средней нагрузки однохомутовая',
         pathname: 'product/opora-fiksiruiushchaia-khommet-s-odnim-khomutom',
         imgL: [
            'https://hommet.ru/media/hommet_cache/45/cd/45cd81121db2b0210bac0fd3e0517473.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/пт_(convert.io).webp'],
         description: `<p>Нагрузка до 500кг
         ${support}`,
      },
      {
         cardId: '2_1_2',
         title: 'Опора для средней нагрузки двухомутовая',
         pathname: 'product/opora-fiksiruiushchaia-khommet-s-dvumia-khomutami',
         imgL: [
            'https://hommet.ru/media/hommet_cache/45/cd/45cd81121db2b0210bac0fd3e0517473.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/пт_(convert.io).webp'],
         description: `<p>Нагрузка до 1000кг 
         ${support}`,
      },
      {
         cardId: '2_1_3',
         title: 'Опора для средней нагрузки треххомутовая',
         pathname: 'product/opora-fiksiruiushchaia-khommet-s-tremia-khomutami',
         imgL: [
            'https://hommet.ru/media/hommet_cache/45/cd/45cd81121db2b0210bac0fd3e0517473.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/пт_(convert.io).webp'],
         description: `<p>Нагрузка до 1500кг
         ${support}`,
      },
      {
         cardId: '2_1_4',
         title: 'Опора скользящая М8',
         pathname: 'product/skolziashchaia-opora-khommet-m8-m10',
         imgL: [
            'https://hommet.ru/media/hommet_cache/3d/06/3d06122cf689a2e5e1986eda138284a7.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/сколзьящая_опора.webp'],
         description: supportSlide,
      },
      {
         cardId: '2_1_5',
         title: 'Опора скользящая М10',
         pathname: 'product/skolziashchaia-opora-khommet-m8-m10',
         imgL: [
            'https://hommet.ru/media/hommet_cache/3d/06/3d06122cf689a2e5e1986eda138284a7.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/сколзьящая_опора.webp'],
         description: supportSlide,
      },
      {
         cardId: '2_1_6',
         title: 'Соединение универсальное Хоммет',
         pathname: 'product/universalnoe-soedinenie-khommet-4-40',
         imgL: [
            'https://hommet.ru/media/hommet_cache/c4/1d/c41de69e41f1fb2835ddc2863e12325f.webp',
         ],
         imgB: [
            'https://hommet.ru/media/uploads/хомуты/3_универсальное_соединение_хоммет_440.webp',
         ],
         description: `<p>Используется для соединения профиля Хоммет  под любым углом.
<p>Блок из оцинкованной стали в сборе.
<p>Толщина металла пластины-2мм.
<p>Толщина металла зацепа-1 мм.`,
      },
      {
         cardId: '2_1_7',
         title: 'Кронштейн V-образный с гайкой М8',
         pathname: 'product/v-obraznyi-krepezh-s-gaikoi-m8',
         imgL: [
            'https://hommet.ru/media/hommet_cache/69/44/6944b6a51a7c4cef7fac6ebe12b80651.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/v.png'],
         description: bracket,
      },
      {
         cardId: '2_1_8',
         title: 'Кронштейн V-образный без виброгасителя',
         pathname: 'product/v-obraznyi-krepezh-bez-vibrogasitelia',
         imgL: [
            'https://hommet.ru/media/hommet_cache/69/44/6944b6a51a7c4cef7fac6ebe12b80651.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/v.png'],
         description: bracket,
      },
      {
         cardId: '2_1_9',
         title: 'Кронштейн V-образный с гайкой М10',
         pathname: 'product/v-obraznyi-krepezh-s-gaikoi-m10',
         imgL: [
            'https://hommet.ru/media/hommet_cache/69/44/6944b6a51a7c4cef7fac6ebe12b80651.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/v.png'],
         description: bracket,
      },
      {
         cardId: '2_1_10',
         title: 'Кронштейн V-образный с гайкой М12',
         pathname: 'product/v-obraznyi-krepezh-s-gaikoi-m12',
         imgL: [
            'https://hommet.ru/media/hommet_cache/69/44/6944b6a51a7c4cef7fac6ebe12b80651.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/v.png'],
         description: bracket,
      },
      {
         cardId: '2_1_11',
         title: 'Кронштейн L-образный без виброгасителя',
         pathname: 'product/l-obraznyi-kronshtein-bez-vibrogasitelia',
         imgL: [
            'https://hommet.ru/media/hommet_cache/27/e0/27e07e3680622e5127033615422c5e23.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/yiuly.png'],
         description: bracket,
      },
      {
         cardId: '2_1_12',
         title: 'Кронштейн L-образный',
         pathname: 'product/l-obraznyi-kronshtein',
         imgL: [
            'https://hommet.ru/media/hommet_cache/27/e0/27e07e3680622e5127033615422c5e23.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/yiuly.png'],
         description: bracket,
      },
      {
         cardId: '2_1_13',
         title: 'Кронштейн Z-образный без виброгасителя',
         pathname: 'product/z-obraznyi-kronshtein-bez-vibrogasitelia',
         imgL: [
            'https://hommet.ru/media/hommet_cache/93/30/9330a510c98a10dabf7a4bb7ad7d4457.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/ывим.png'],
         description: bracket,
      },
      {
         cardId: '2_1_14',
         title: 'Кронштейн Z-образный',
         pathname: 'product/z-obraznyi-kronshtein',
         imgL: [
            'https://hommet.ru/media/hommet_cache/93/30/9330a510c98a10dabf7a4bb7ad7d4457.png',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/ывим.png'],
         description: bracket,
      },
   ],
};
