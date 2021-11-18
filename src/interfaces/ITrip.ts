import { IStop } from "./IStop";
import { IStopTime } from "./IStopTime";

export interface ITrip {
  route_id: number;
  service_id: string;
  trip_id: string;
  trip_headsign: string;
  direction_id: number;
  block_id: string;
  shape_id: string;
  wheelchair_accessible: number;
  bikes_allowed: number;
  date: string;
  stops?: IStop[] | undefined;
  stopTimes?: IStopTime[] | undefined;
}
