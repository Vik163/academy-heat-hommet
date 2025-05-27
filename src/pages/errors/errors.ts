import { LOCALSTORAGE_ERROR } from '@/utils/consts/storage';
import './errors.css';
import { setHeader } from '@/blocks/header/header';

const errorText = document.querySelector('.errors__text')!;
const text = localStorage.getItem(LOCALSTORAGE_ERROR);

errorText.textContent = text;
localStorage.removeItem(LOCALSTORAGE_ERROR);

setHeader();
