import { LOCALSTORAGE_ERROR } from '@/utils/consts/storage';
import './errors.css';
import { setHeader } from '@/blocks/header/header';
import { $class } from '@/utils/lib/getElement';

const errorText = $class('errors__text');
const text = localStorage.getItem(LOCALSTORAGE_ERROR);

errorText.textContent =
   '               sdfffffddddddddddddddd dddddddddddddddddddd dddddddddddddddddddd';
localStorage.removeItem(LOCALSTORAGE_ERROR);

setHeader();
