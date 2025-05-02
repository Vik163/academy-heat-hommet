import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';

console.log('a:', window.location.href);
console.log('h:', window.history);

changeUrl();

console.log('b:', window.location.href);
