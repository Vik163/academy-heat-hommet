import { changeUrl } from '@/utils/lib/changeUrl/changeUrl';
import { getPathname } from '@/utils/lib/getPathname/getPathname';

if (__IS_DEV__) {
   changeUrl(getPathname());
}
