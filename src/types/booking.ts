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
