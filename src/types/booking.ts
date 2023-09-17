import { Location } from './reservation';

type Slot = {
  time: string;
  isAvailable: boolean;
}

export type Booking = {
  id: string;
  location: Location;
  slots: {
    today: Slot[];
    tomorrow: Slot[];
  }
}

export type DataForBooking = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
  questId: string;
}
