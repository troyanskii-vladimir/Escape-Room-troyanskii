import { createSlice } from '@reduxjs/toolkit';
import { QuestsData } from '../../types/state';
import { SORT_LEVEL, SORT_TYPE, SliceNames } from '../../config';
import { fetchQuestAction, fetchQuestBookingAction, fetchQuestDataAction, fetchReservationAction } from '../api-action';
import { QuestData } from '../../types/quest';


const initialState: QuestsData = {
  quests: [],
  activeType: SORT_TYPE[0].type,
  activeLevel: SORT_LEVEL[0].type,
  questsFiltered: [],
  isQuestsLoading: true,
  reservations: [],
  questData: {} as QuestData,
  questDataError: false,
  questBookingData: [],
  questBookingPlaceId: '',
};

export const questsData = createSlice({
  name: SliceNames.Data,
  initialState,
  reducers: {
    changeTypeFilter: (state, action) => {
      state.activeType = action.payload;
    },
    changeLevelFilter: (state, action) => {
      state.activeLevel = action.payload;
    },
    changeActiveQuests: (state) => {
      state.questsFiltered = state.quests;
      if (state.activeType !== SORT_TYPE[0].type) {
        state.questsFiltered = state.questsFiltered.filter((quest) => quest.type === state.activeType);
      }
      if (state.activeLevel !== SORT_LEVEL[0].type) {
        state.questsFiltered = state.questsFiltered.filter((quest) => quest.level === state.activeLevel);
      }
    },
    clearReservation: (state) => {
      state.reservations = [];
    },
    changeBookingPlaceId: (state, action) => {
      state.questBookingPlaceId = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.isQuestsLoading = false;
        state.quests = action.payload;

        state.questsFiltered = state.quests;
        if (state.activeType !== SORT_TYPE[0].type) {
          state.questsFiltered = state.questsFiltered.filter((quest) => quest.type === state.activeType);
        }
        if (state.activeLevel !== SORT_LEVEL[0].type) {
          state.questsFiltered = state.questsFiltered.filter((quest) => quest.level === state.activeLevel);
        }
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.isQuestsLoading = false;
      })
      .addCase(fetchReservationAction.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchReservationAction.fulfilled, (state, action) => {
        state.isQuestsLoading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservationAction.rejected, (state) => {
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuestDataAction.pending, (state) => {
        state.isQuestsLoading = true;
        state.questDataError = false;
      })
      .addCase(fetchQuestDataAction.fulfilled, (state, action) => {
        state.isQuestsLoading = false;
        state.questDataError = false;
        state.questData = action.payload;
      })
      .addCase(fetchQuestDataAction.rejected, (state) => {
        state.isQuestsLoading = false;
        state.questDataError = true;
      })
      .addCase(fetchQuestBookingAction.pending, (state) => {
        state.isQuestsLoading = true;
        state.questBookingData = [];
      })
      .addCase(fetchQuestBookingAction.fulfilled, (state, action) => {
        state.isQuestsLoading = false;
        state.questBookingData = action.payload;
        state.questBookingPlaceId = action.payload[0].id;
      })
      .addCase(fetchQuestBookingAction.rejected, (state) => {
        state.isQuestsLoading = false;
      })
  },
});

export const { changeTypeFilter, changeLevelFilter, changeActiveQuests, clearReservation, changeBookingPlaceId } = questsData.actions;
