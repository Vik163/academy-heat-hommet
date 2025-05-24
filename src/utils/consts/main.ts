import { LngLat } from '@yandex/ymaps3-types';
import { Coords } from '../types/maps';

export const PHONE = '+7 (846) 354-66-30';
export const PHONE_MOB = '+7 (917) 014-11-69';
export const ADDRESS = 'г. Новокуйбышевск, ул. Молодогвардейская, д. 4';
export const EMAIL = 'actepla@yandex.ru';

export const MAIN_COORD = [49.93243299617288, 53.117814287091264] as LngLat;
// важна очередность, чтобы иконки были по порядку (верхняя - нижний слой -- / -- нижняя - верхний слой)
export const STORES_COORD: Coords = {
   'г. Новокуйбышевск, ул. Молодогвардейская, д. 4': [
      49.93164299117288, 53.117814287091264,
   ],
};
export const ZOOM = 14;
