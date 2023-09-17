import { Booking } from "../../types/booking";
import { Level, QuestData, QuestPreview, Type } from "../../types/quest";
import { Reservation } from "../../types/reservation";
import { State } from "../../types/state";


export const getQuests = (state: State): QuestPreview[] => state.Data.quests;
export const getQuestsFiltered = (state: State): QuestPreview[] => state.Data.questsFiltered;
export const getStatusLoading = (state: State): boolean => state.Data.isQuestsLoading;
export const getActiveType = (state: State): Type => state.Data.activeType;
export const getActiveLevel = (state: State): Level => state.Data.activeLevel;
export const getReservations = (state: State): Reservation[] => state.Data.reservations;
export const getQuestData = (state: State): QuestData => state.Data.questData;
export const getQuestDataError = (state: State): boolean => state.Data.questDataError;
export const getQuestBookingData = (state: State): Booking[] => state.Data.questBookingData;
export const getQuestBookingPlaceId = (state: State): string => state.Data.questBookingPlaceId;
