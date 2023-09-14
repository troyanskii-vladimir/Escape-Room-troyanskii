import { Level, QuestPreview, Type } from "../../types/quest";
import { State } from "../../types/state";


export const getQuests = (state: State): QuestPreview[] => state.Data.quests;
export const getQuestsFiltered = (state: State): QuestPreview[] => state.Data.questsFiltered;
export const getStatusLoading = (state: State): boolean => state.Data.isQuestsLoading;
export const getActiveType = (state: State): Type => state.Data.activeType;
export const getActiveLevel = (state: State): Level => state.Data.activeLevel;
