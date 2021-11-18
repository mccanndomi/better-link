export interface IStopTime {
    id: number,
    trip_id: string,
    arrival_time: string, // Time ? format 19:30:00
    departure_time: string, // Time ? format 19:30:00
    stop_id: number,
    stop_sequence: number,
    shape_dist_traveled: number,
    stop_headsign: string,
    pickup_type: number,
    drop_off_type: number,
    timepoint: number
}
