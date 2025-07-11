import type { Card } from '@/utils/types/cards';
import type { CategoryDSM } from '@/utils/types/catalog';

const texProfile = `
<div class="product__description-texts">
<p class="product__description-p">Один из наиболее популярных и востребованных видов крепежных изделий для систем сухого монтажа, широко применяемых в строительстве, промышленности, при проведении различных монтажных работ и в быту.</p>
<p class="product__description-p">Изготовлен из углеродистой стали, имеет цинковое покрытие.</p>
<p class="product__description-p">Толщина металла профиля-1 мм.</p>
<p class="product__description-p">Толщина металла Соединения углового-2 мм.</p>
<p class="product__description-p">Толщина металла установочного элемента-1 мм.</p>
<p class="product__description-p">Является хорошей заменой аналогичным системам  Grohe, Viega, ТЕСЕ.</p>
<p class="product__description-p">Решение, предлагаемое «ПК Хоммет», - одно из лучших, что есть на рынке в области индивидуальных конструкций, размещающихся на несущих стенах, либо отдельно стоящих перегородках. Система раскрывает просто невероятную свободу при оформлении и позволяет воплотить в жизнь самые смелые идеи. И все это благодаря лишь двум базовым элементам: монтажному профилю ХОММЕТ9000000 и соединительному элементу ХОММЕТ9010002. С помощью новаторских трапециевидных соединителей (ХОММЕТ9010002) эти профили стыкуются под углом 45° и 90° (в случае других углов применяется шарнир). Профиль Хоммет гарантирует исключительную стабильность конструкции.</p>
<p class="product__description-p">Профиль производится из углеродистой стали, что обеспечивает отсутствие вероятности появления каких-либо заминов, материал нормально переносит высокие нагрузки. Обеспечивается высокая прочность, в том числе к физическому воздействию. Также в условиях производства аналог ТЕСЕ профиля получает цинковое покрытие, дополнение дает стойкость к воздействию влаги и коррозии. Для профиля использован металл толщиной 1 мм.</p>
<h4 class="product__description-h4">Преимущества:</h4>
<p class="product__description-p">1. Возможность интеграции застенных модулей любого производителя в создаваемую конструкцию — набор кронштейнов позволяет интегрировать любую инсталляцию в систему профилей без каких либо слесарных работ.</p>
<p class="product__description-p">2. Минимальный вес конструкции при максимальной жесткости — минимальный набор профиля для монтажа инсталляции для подвесного унитаза весит около 9 кг.</p>
<p class="product__description-p">3. Быстрый монтаж — сборка элементов системы сухого монтажа Хоммет  занимает считанные минуты, благодаря продуманной системе соединений и креплений, состоящей всего из трех основных элементов: стального профиля, углового соединения и одиночного крепления </p>
<p class="product__description-p">4. Возможность установки скрытых и ревизионных люков любого производителя — с помощью профиля и комплекта петель Хоммет  возможно создать раму заданного размера и жесткости.</p>
<p class="product__description-p">5. Возможность модификации каркаса из профиля в процессе и после монтажа — можно удалять и добавлять элементы в любое время.</p>
<p class="product__description-p">Один из наиболее популярных и востребованных видов крепежных изделий для систем сухого монтажа, широко применяемых в строительстве, промышленности, при проведении различных монтажных работ  и в быту. Изготовлен из углеродистой стали, имеет цинковое покрытие.</p>`;

const textInstallEl = `
<div class="product__description-texts">
<p class="product__description-p">Установочные элементы с резьбой М8 или М10 используется для крепления резьбовых шпилек.</p>
<p class="product__description-p">Блок из оцинкованной стали в сборе, без резьбовой шпильки.
</div>`;

export const drySystemMontage: Record<CategoryDSM, Card[]> = {
   'Система сухого монтажа': [
      {
         cardId: '1_1_1',
         title: 'Регулируемая планка для водоразеток Хоммет',
         pathname: 'product/reguliruemaia-planka-dlia-vodorazetok-khommet',
         imgL: undefined,
         imgB: undefined,
         description: `
<div class="product__description-texts">
<p class="product__description-p">Подходит для всех известных производителей водорозеток, любых систем монтажа. Не требует дополнительных инструментов.</p>
<p class="product__description-p">Регулируется обычной крестовой отвёрткой.</p>
<p class="product__description-p">На любую стену или внутри любого короба.</p>
</div>`,
      },
      {
         cardId: '1_1_2',
         title: 'Kомплект для крепления модуля в углу',
         pathname: 'product/komplekt-dlia-krepleniia-modulia-v-uglu',
         imgL: [
            'https://hommet.ru/media/hommet_cache/4a/81/4a81d80a4ec39cfdea13de38e0a38359.webp',
         ],
         imgB: [
            'https://hommet.ru/media/products/images/komplektdlakrep_convert.io.webp',
         ],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Предназнечен для инсталляции модулей в угол.</p>
</div>`,
      },
      {
         cardId: '1_1_3',
         title: 'Крепление двойное',
         pathname: 'product/kreplenie-dvoinoe',
         imgL: [
            'https://hommet.ru/media/hommet_cache/29/12/2912bb7979014917fa699a8702d603ee.webp',
         ],
         imgB: [
            'https://hommet.ru/media/products/images/krepdvoinoe_convert.io.webp',
         ],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Крепление двойное для монтажа одновременно двух профилей Хоммет  к конструкции. Для несущих конструкций с глубиной 140—220 мм. Блок из оцинкованной стали в сборе в комплекте с крепежными элементами.</p>
<p class="product__description-p">Толщина пластины-2мм, толщина уголка-5 мм, толщина зацепа-1 мм.</p>
</div>`,
      },
      {
         cardId: '1_1_4',
         title: 'Соединение универсальное 4х40',
         pathname: 'product/soedinenie-universalnoe',
         imgL: [
            'https://hommet.ru/media/hommet_cache/b4/69/b469ab974974e4c2b03e98b72e9c912c.webp',
         ],
         imgB: [
            'https://hommet.ru/media/uploads/хомуты/вытиа_(convert.io).webp',
         ],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Используется для соединения профиля Хоммет под любым углом.</p>
<p class="product__description-p">Блок из оцинкованной стали в сборе, толщина металла пластины - 2мм, толщина металла зацепа -1 мм.</p>
</div>`,
      },
      {
         cardId: '1_1_5',
         title: 'Прокладка звукоизоляционная Хоммет',
         pathname: 'product/zvukoizoliatsionnaia-prokladka-khommet',
         imgL: [
            'https://hommet.ru/media/hommet_cache/d5/c3/d5c37a1ecad134181ac222ac6e3827db.png',
         ],
         imgB: ['https://hommet.ru/media/products/images/6.png'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Предназначена для звукоизоляции креплений несущей конструкции, имеет клеющий слой, что значительно упрощает время и комфорт монтажа.</p>
<p class="product__description-p">Материал прокладки – термоэластопласт (ТЭП)</p>
</div>`,
      },
      {
         cardId: '1_1_6',
         title: 'Комплект кронштейнов для установки модуля',
         pathname: 'product/komplekt-kronshteinov-dlia-ustanovki-modulia',
         imgL: [
            'https://hommet.ru/media/hommet_cache/74/c9/74c9b4cf4cd6afd7c75183b306647170.png',
         ],
         imgB: ['https://hommet.ru/media/products/images/8.png'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Предназначен для крепления модулей в каркас профильной инсталляции</p>
</div>`,
      },
      {
         cardId: '1_1_7',
         title: 'Комплект петель для профиля Хоммет',
         pathname: 'product/komplekt-petel-dlia-profilia-khommet',
         imgL: [
            'https://hommet.ru/media/hommet_cache/c2/25/c2251fc71c6ac206e70b75579efd854a.png',
         ],
         imgB: ['https://hommet.ru/media/products/images/kompl.png'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Предназначен для сборки поворотных конструкций разных размеров в каркасе профильной инсталляци.</p>
<p class="product__description-p">Каркас устойчив к провисанию</p>
</div>`,
      },
      {
         cardId: '1_1_8',
         title: 'Профиль Хоммет 2 метра',
         pathname: 'product/profil-khommet-2-metra',
         imgL: [
            'https://hommet.ru/media/hommet_cache/8d/cc/8dcc00b9bc241557f1d12d6d4d618462.webp',
         ],
         imgB: [
            'https://hommet.ru/media/products/images/проф_convert.io_XLaJ9jU.webp',
         ],
         description: texProfile,
      },
      {
         cardId: '1_1_9',
         title: 'Профиль Хоммет 3 метра',
         pathname: 'product/profil-khommet-3-metra',
         imgL: [
            'https://hommet.ru/media/hommet_cache/8d/cc/8dcc00b9bc241557f1d12d6d4d618462.webp',
         ],
         imgB: [
            'https://hommet.ru/media/products/images/проф_convert.io_XLaJ9jU.webp',
         ],
         description: texProfile,
      },
      {
         cardId: '1_1_10',
         title: 'Профиль Хоммет 4,5 метра',
         pathname: 'product/profil-khommet-45-metra',
         imgL: [
            'https://hommet.ru/media/hommet_cache/8d/cc/8dcc00b9bc241557f1d12d6d4d618462.webp',
         ],
         imgB: [
            'https://hommet.ru/media/products/images/проф_convert.io_XLaJ9jU.webp',
         ],
         description: texProfile,
      },
      {
         cardId: '1_1_11',
         title: 'Ножка с торцевым элементом-комплект(4 шт)',
         pathname: 'product/nozhka-s-tortsevym-elementom-komplekt-4-sht',
         imgL: [
            'https://hommet.ru/media/hommet_cache/d9/aa/d9aac1fd1404c34c5df423d86e612545.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/а_(convert.io).webp'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Ножка с торцевым элементом-комплект(4 шт).</p>
</div>`,
      },
      {
         cardId: '1_1_12',
         title: 'Монтажная пластина для крепления доп. элементов, 200 х 200 мм',
         pathname:
            'montazhnaia-plastina-dlia-krepleniia-dop-elementov-200-kh-200-mm',
         imgL: [
            'https://hommet.ru/media/hommet_cache/be/02/be02465d0a1706545ee3374c9804f3b8.webp',
            'https://hommet.ru/media/products/images/cher_convert.io.webp',
         ],
         imgB: [
            'https://hommet.ru/media/uploads/хомуты/монт.webp',
            'https://hommet.ru/media/products/images/cher_convert.io.webp',
         ],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Предназначена для крепления доп. элементов, 200 х 200 мм.</p>
</div>`,
      },
      {
         cardId: '1_1_13',
         title: 'Ножка металлическая для профиля с регулируемой опорой',
         pathname:
            'product/nozhka-metallicheskaia-dlia-profilia-s-reguliruemoi-oporoi',
         imgL: [
            'https://hommet.ru/media/hommet_cache/e4/d1/e4d12b37dcdac54245302c683606315f.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/мвы_(convert.io).webp'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Ножка металлическая для профиля с регулируемой опорой предназначена для установки в профиль в качестве опорной конструкции.</p>
</div>`,
      },
      {
         cardId: '1_1_14',
         title: 'Торцевой элемент металлический',
         pathname: 'product/tortsevoi-element-metallicheskii',
         imgL: [
            'https://hommet.ru/media/hommet_cache/b8/be/b8be09e7996aed36e386ee00382f6f21.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/иа_(convert.io).webp'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Торцевой элемент металлический , предназначен к использованию в профиль Хоммет, для нагрузок с верху на торец профиля( при инсталляции ванн).</p>
</div>`,
      },
      {
         cardId: '1_1_15',
         title: 'Опора отдельно стоящей  перегородки',
         pathname: 'product/opora-otdelno-stoiashchei-peregorodki',
         imgL: [
            'https://hommet.ru/media/hommet_cache/1c/73/1c73dd9c463d8f9a06a3751e2dbbd975.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/ям_(convert.io).webp'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Опора отдельно стоящей  перегородки предназначена для фиксации отдельностоящих опорных рам.</p>
</div>`,
      },
      {
         cardId: '1_1_16',
         title: 'Установочный элемент Хоммет с резьбой М8',
         pathname: 'product/ustanovochnyi-element-khommet-s-rezboi-m8/',
         imgL: [
            'https://hommet.ru/media/hommet_cache/56/09/56098562ce8cefe6b8876837f81b605c.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/эл_(convert.io).webp'],
         description: textInstallEl,
      },
      {
         cardId: '1_1_17',
         title: 'Установочный элемент Хоммет с резьбой М10',
         pathname: 'product/ustanovochnyi-element-khommet-s-rezboi-m10/',
         imgL: [
            'https://hommet.ru/media/hommet_cache/56/09/56098562ce8cefe6b8876837f81b605c.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/эл_(convert.io).webp'],
         description: textInstallEl,
      },
      {
         cardId: '1_1_18',
         title: 'Монтажная пластина для сантехнической арматуры',
         pathname:
            'product/montazhnaia-plastina-dlia-santekhnicheskoi-armatury',
         imgL: [
            'https://hommet.ru/media/hommet_cache/63/9b/639bbcc2649f78a12e10727200332ad4.webp',
         ],
         imgB: [
            'https://hommet.ru/media/uploads/хомуты/аиав_(convert.io).webp',
         ],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Монтажная пластина для сантехнической арматуры из оцинкованной стали для монтажа скрытых и внешних фитингов.</p>
<p class="product__description-p">В комплекте с крепежными элементами для монтажа профилей Хоммет, а также монтажа в металлических или деревянных каркасных стенах.</p>
<p class="product__description-p">Совместимы в том числе с блоками Hansa Varox, Hansgrohe i-box и Kludi Flex-Box.</p>
</div>`,
      },
      {
         cardId: '1_1_19',
         title: 'Крепление двойное удлиненное Хоммет',
         pathname: 'product/kreplenie-dvoinoe-udlinennoe-khommet',
         imgL: [
            'https://hommet.ru/media/hommet_cache/43/54/43546bf919d1ed64eb4826d2357a8713.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/удл.webp'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Крепление двойное для монтажа одновременно двух профилей Хоммет  к конструкции. Для несущих конструкций с глубиной 140—220 мм. Блок из оцинкованной стали в сборе в комплекте с крепежными элементами.</p>
<p class="product__description-p">Толщина пластины-2мм, толщина уголка-5 мм, толщина зацепа-1 мм.</p>
</div>`,
      },
      {
         cardId: '1_1_20',
         title: 'Установочный элемент',
         pathname: 'product/ustanovochnyi-element',
         imgL: [
            'https://hommet.ru/media/hommet_cache/d3/a8/d3a8e4907b63e7551bc537e46a77f07b.webp',
         ],
         imgB: [
            'https://hommet.ru/media/uploads/хомуты/ымвк_(convert.io).webp',
         ],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Установочный элемент для крепления вспомогательных элементов к профилю Хоммет.</p>
<p class="product__description-p">Толщина металла-1мм.</p>
<p class="product__description-p">Наличие отверстий по центру двух частей дает возможность использовать саморезы для жесткой фиксации зацепа к профилю (актуально для навесных систем).</p>
</div>`,
      },
      {
         cardId: '1_1_21',
         title: 'Одинарное крепление',
         pathname: 'product/odinarnoe-kreplenie',
         imgL: [
            'https://hommet.ru/media/hommet_cache/fa/d4/fad4e52690b81ba7179ef3cafc5f7e37.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/яиа_(convert.io).webp'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Одинарное крепление для монтажа стального профиля Хоммет  к конструкции или к поверхности стен, пола и потолков. Узел в сборе из оцинкованной стали в комплекте с крепежными элементами.</p>
<p class="product__description-p">Толщина уголка-5 мм, толщина стали зацепа-1 мм.</p>
</div>`,
      },
      {
         cardId: '1_1_22',
         title: 'Соединение угловое',
         pathname: 'product/soedinenie-uglovoe',
         imgL: [
            'https://hommet.ru/media/hommet_cache/c5/bb/c5bbcb4a66994a72ca57d5a379b3529a.webp',
         ],
         imgB: ['https://hommet.ru/media/uploads/хомуты/кпы_(convert.io).webp'],
         description: `
<div class="product__description-texts">
<p class="product__description-p">Предназначено для жесткого прямоугольного соединения профилей Хоммет, ТЕСЕ.</p>
<p class="product__description-p">Блок в сборе из оцинкованной стали, винт под торцевой ключ M5 (SW 4) и специальная пружинящая прокладка, которая не дает рассыпаться соединению при раскручивании винта.</p>
<p class="product__description-p">Также есть возможность монтировать профиль под углом 45%. Толщина стали-2 мм.</p>
</div>`,
      },
      {
         cardId: '1_1_23',
         title: 'Опора усиленная для отдельностоящей перегородки',
         pathname:
            'product/opora-usilennaia-dlia-otdelnostoiashchei-peregorodki',
         imgL: [
            'https://hommet.ru/media/hommet_cache/7d/56/7d567dff62420f7dd8fbe1d5d51424b3.webp',
         ],
         imgB: [
            'https://hommet.ru/media/products/images/opora_convert.io.webp',
         ],
      },
   ],
};

export const textDSM = `
<div class="catalog__description">
<h3 class="catalog__description-title">Купить систему сухого монтажа от производителя</h3>
<p class="catalog__description-p">Системы сухого монтажа стали неотъемлемой частью современного строительства и ремонта, и одним из лидеров в этой области является российский производитель - ООО ПК Хоммет. Его уникальные решения находят применение в самых разнообразных сферах — от жилых зданий до коммерческих объектов.</p>
<p class="catalog__description-p">При выборе систем сухого монтажа важно учитывать не только качество материалов, но и комфорт в эксплуатации, поэтому Хоммет предлагает клиентам широкий ассортимент продукции, которая станет отличным выбором для любых нужд.</p>
<p class="catalog__description-p">Одним из главных преимуществ систем сухого монтажа Хоммет является их простота в установке. Производитель разработал инновационные крепежные элементы и конструкции, которые позволяют значительно сократить время монтажа. Это особенно важно для профессиональных строителей и подрядчиков, поскольку позволяет снизить трудозатраты и повысить эффективность работ. В отличие от систем Тесе и Viega, которые также известны своим качеством, Хоммет акцентирует внимание на упрощении процесса установки, что делает его продукцию более доступной и удобной в использовании.</p>
<p class="catalog__description-p">Кроме того, системы Хоммет отличаются высокими эксплуатационными характеристиками. Они устойчивы к воздействию влаги, что делает их идеальными для использования в помещениях с высоким уровнем влажности, например, в ванных комнатах и кухнях. В то время как системы Viega могут испытывать проблемы с коррозией в агрессивной среде, Хоммет предлагает решения, которые гарантируют долговечность и надежность даже в сложных условиях.</p>
<p class="catalog__description-p">Другим значительным преимуществом является стоимость и доступность. Системы Хоммет предлагают оптимальное соотношение цены и качества, что делает их привлекательным выбором для широкого круга пользователей — от частных лиц до крупных строительных компаний. В то время как системы Viega зачастую имеют более высокую цену, Хоммет предлагает доступные решения, не уступающие в качестве.</p>
<p class="catalog__description-p">В заключение, выбор систем сухого монтажа от производителя Хоммет — это разумное решение для тех, кто ценит качество, удобство и доступность. Совершенные технологии, надежные материалы и широкие возможности для индивидуализации делают эти системы идеальной основой для любого строительного проекта. Не упустите возможность улучшить ваш проект, выбрав продукцию Хоммет!</p>
</div>`;
