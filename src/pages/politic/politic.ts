import { changeUrl } from '@/utils/lib/changeUrl';
import './politic.css';
import { setFooter } from '@/blocks/footer/footer';
import { setHeader } from '@/blocks/header/header';
import { setLocalStorage } from '@/utils/lib/setLocalStorage';

if (__IS_DEV__) {
   changeUrl('politic');
}

setLocalStorage('', '', '');

setHeader();

setFooter();
