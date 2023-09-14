import { combineReducers } from '@reduxjs/toolkit';

import { SliceNames } from '../config';
import { questsData } from './quests-data/quest-data.slice';
import { authProcess } from './auth-data/auth-process.slice';


export const rootReducer = combineReducers({
  [SliceNames.Data]: questsData.reducer,
  [SliceNames.Auth]: authProcess.reducer,
})
