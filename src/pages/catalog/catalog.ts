import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';

if (__IS_DEV__) {
   location.href = `${location.pathname}.html`;
   console.log('isDev');
   changeUrl();
}
