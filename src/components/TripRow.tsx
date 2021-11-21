import React from "react";
import { ITrip } from "../interfaces/ITrip";

interface TripRowProps {
  trip: ITrip;
}

export const TripRow: React.FC<TripRowProps> = ({ trip }) => {
  return (
    <div>
      <h3>id: {trip.trip_id}</h3>
      {trip.stopTimes ? (
        trip.stopTimes?.map((stopTime) => {
          return (
            <div key={stopTime.id}>
              <p>
                Stopping at stop {stopTime.id} then departing at {stopTime.departure_time}
              </p>
            </div>
          );
        })
      ) : (
        <p>No stop times...</p>
      )}
    </div>
  );
};
