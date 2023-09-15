import { QuestPreview } from "./quest";

export type Date = 'today' | 'tomorrow';

export type Location = {
  address: string;
  coords: [number];
}

export type Reservation = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: QuestPreview;
}
