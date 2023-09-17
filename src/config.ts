import { SortingLevel, SortingType } from "./types/sorting";

export enum AppRoute {
  Main = '/',
  Booking = '/booking',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest',
}

export enum APIRoute {
  Quest = '/quest',
  Login = '/login',
  Logout = '/logout',
  Reservation = '/reservation',
  Booking = '/booking',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SliceNames {
  Data = 'Data',
  Auth = 'Auth',
}


export const SORT_TYPE: SortingType[] = [
  {
    type: 'all',
    title: 'Все квесты',
  },
  {
    type: 'adventures',
    title: 'Приключения',
  },
  {
    type: 'horror',
    title: 'Ужасы',
  },
  {
    type: 'mystic',
    title: 'Мистика',
  },
  {
    type: 'detective',
    title: 'Детектив',
  },
  {
    type: 'sci-fi',
    title: 'Sci-fi',
  },
]

export const SORT_LEVEL: SortingLevel[] = [
  {
    type: 'any',
    title: 'Любой',
  },
  {
    type: 'easy',
    title: 'Лёгкий',
  },
  {
    type: 'medium',
    title: 'Средний',
  },
  {
    type: 'hard',
    title: 'Сложный',
  },
]

export const TILE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const URL_MARKER_DEFAULT = './img/svg/pin-default.svg';

export const URL_MARKER_ACTIVE = './img/svg/pin-active.svg';
