import dayjs from "dayjs";
import React from "react";
import { TripRow } from "../components/TripRow";
import useTrips from "../hooks/useTrips";

function RoutePage({ id }: any): JSX.Element {
  const { loading, trips } = useTrips(id, dayjs("2021-11-19T00:00:00"), dayjs("2021-11-19T23:59:59"));

  return (
    <div>
      <h1>Route: {id}</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        trips?.map((trip) => {
          return <TripRow trip={trip} />;
        })
      )}
    </div>
  );
}

export default RoutePage;
