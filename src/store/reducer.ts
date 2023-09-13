import { createReducer } from '@reduxjs/toolkit';

import { changeFilteredQuests, loadQuests, setQuestsLoading } from './action';

import { QuestsData } from '../types/state';
import { SORT_LEVEL, SORT_TYPE } from '../config';


const initialState: QuestsData = {
  quests: [],
  activeType: SORT_TYPE[1].type,
  activeLevel: SORT_LEVEL[0].type,
  questsFiltered: [],
  isQuestsLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilteredQuests, (state) => {
      state.questsFiltered = state.quests;
      if (state.activeType !== SORT_TYPE[0].type) {
        state.questsFiltered = state.questsFiltered.filter((quest) => quest.type === state.activeType);
      }
      if (state.activeLevel !== SORT_LEVEL[0].type) {
        state.questsFiltered = state.questsFiltered.filter((quest) => quest.level === state.activeLevel);
      }
    })
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;

      state.questsFiltered = state.quests;
      if (state.activeType !== SORT_TYPE[0].type) {
        state.questsFiltered = state.questsFiltered.filter((quest) => quest.type === state.activeType);
      }
      if (state.activeLevel !== SORT_LEVEL[0].type) {
        state.questsFiltered = state.questsFiltered.filter((quest) => quest.level === state.activeLevel);
      }
    })
    .addCase(setQuestsLoading, (state, action) => {
      state.isQuestsLoading = action.payload;
    })
});
