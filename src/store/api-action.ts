import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { State, AppDispatch } from '../types/state';
import { QuestData, QuestPreview } from '../types/quest';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

import { APIRoute } from '../config';
import { dropToken, saveToken } from '../services/token';
import { Reservation } from '../types/reservation';


export const fetchQuestAction = createAsyncThunk<QuestPreview[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<QuestPreview[]>(APIRoute.Quest);
    return data;
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);


export const loginAction = createAsyncThunk<UserData, Partial<AuthData>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);


export const fetchReservationAction = createAsyncThunk<Reservation[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReservation',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Reservation[]>(APIRoute.Reservation);
    return data;
  }
);


export const fetchQuestDataAction = createAsyncThunk<QuestData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchQuestData',
  async (questId, {extra: api}) => {
    const {data} = await api.get<QuestData>(`${APIRoute.Quest}/${questId}`);
    return data;
  }
);
