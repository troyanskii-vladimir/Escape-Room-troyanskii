import { Level, QuestPreview, Type } from './quest';

import { store } from '../store';
import { AuthorizationStatus } from '../config';
import { UserData } from './user-data';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type QuestsData = {
  quests: QuestPreview[];
  activeType: Type;
  activeLevel: Level;
  questsFiltered: QuestPreview[];
  isQuestsLoading: boolean;
}

export type AuthProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}
