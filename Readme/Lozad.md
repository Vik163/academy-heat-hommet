# Lozad.js

Использовал библиотеку [lozad](https://apoorv.pro/lozad.js/)  
Пришлось её немного расширить, так как с webpack не загружались ссылки.  
Добавил файл loadSrc, который перед тем, как подставить ссылку в атрибут src тега img импортирует её.  
В HTML прописываются только названия графических файлов

```javascript
// - '../../../assets/images/' - путь до папки с изображениями из файла loadSrc
// - меняется с image.png на d687eea957e0122e3ef5.png (webpack)
require('../../' + str);
```

```html
<!-- браузер сам подбирает нужное изображение по размеру текущего экрана -->
<img
   class="lozad"
   data-src="image.png"
   data-srcset="image.png 1000w, image-2x.png 2000w"
/>

<!-- личный выбор -->
<!-- data-iesrc="images/thumbs/04.jpg" для IE-браузера -->
<picture
   class="lozad"
   style="display: block; min-height: 1rem"
   data-iesrc="images/thumbs/04.jpg"
   data-alt=""
>
   <source srcset="images/thumbs/04.jpg" media="(min-width: 1280px)" />
   <source srcset="images/thumbs/05.jpg" media="(min-width: 980px)" />
   <source srcset="images/thumbs/06.jpg" media="(min-width: 320px)" />
   <!-- you can define a low quality image placeholder that will be removed when the picture is loaded -->
   <img src="data:image/jpeg;base64,/some_lqip_in_base_64==" />
</picture>
```
