import { createAction } from "@reduxjs/toolkit";
import { QuestPreview } from "../types/quest";


export const changeFilteredQuests = createAction('changeFilteredQuests');

export const loadQuests = createAction<QuestPreview[]>('loadQuests');

export const setQuestsLoading = createAction<boolean>('setQuestsLoading');
