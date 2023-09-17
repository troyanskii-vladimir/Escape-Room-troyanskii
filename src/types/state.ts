import { Level, QuestData, QuestPreview, Type } from './quest';

import { store } from '../store';
import { AuthorizationStatus } from '../config';
import { UserData } from './user-data';
import { Reservation } from './reservation';
import { Booking } from './booking';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type QuestsData = {
  quests: QuestPreview[];
  activeType: Type;
  activeLevel: Level;
  questsFiltered: QuestPreview[];
  isQuestsLoading: boolean;
  reservations: Reservation[];
  questData: QuestData;
  questDataError: boolean;
  questBookingData: Booking[];
  questBookingPlaceId: string;
}

export type AuthProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}
