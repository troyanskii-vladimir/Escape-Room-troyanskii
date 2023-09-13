import { Level, QuestPreview, Type } from './quest';

import { store } from '../store';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type QuestsData = {
  quests: QuestPreview[];
  activeType: Type;
  activeLevel: Level;
  questsFiltered: QuestPreview[];
  isQuestsLoading: boolean;
}
