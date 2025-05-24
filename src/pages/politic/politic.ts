import { changeUrl } from '@/utils/lib/changeUrl';
import './politic.css';
import { setNavbar } from '@/blocks/navbar/navbar';
import { setFooter } from '@/blocks/footer/footer';

if (__IS_DEV__) {
   changeUrl('politic');
}

setNavbar();
setFooter();
