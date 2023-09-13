import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { State, AppDispatch } from '../types/state';
import { QuestPreview } from '../types/quest';

import { loadQuests, setQuestsLoading } from './action';
import { APIRoute } from '../config';


export const fetchQuestAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setQuestsLoading(true));
    const {data} = await api.get<QuestPreview[]>(APIRoute.Quest);
    dispatch(loadQuests(data));
    dispatch(setQuestsLoading(false));
  }
);
