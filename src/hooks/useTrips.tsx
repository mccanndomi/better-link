import { useEffect, useState } from "react";
import * as dayjs from "dayjs";
import { ITrip } from "../interfaces/ITrip";
import { IStopTime } from "../interfaces/IStopTime";

const useTrips = (route_id: number, start: dayjs.Dayjs, end: dayjs.Dayjs) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [trips, setTrips] = useState<ITrip[]>();

  const fetchApi = (route_id: number, start: dayjs.Dayjs, end: dayjs.Dayjs) => {
    // start, end in format YYYY-MM-DD[T]HH:mm:ss (e.g. 2021-01-01T00:00:00)
    let url =
      "https://api.opendata.metlink.org.nz/v1/gtfs/trips?start=" +
      start.toISOString() +
      "&route_id=" +
      route_id +
      "&end=" +
      end.toISOString();

    fetch(url, {
      headers: {
        Accept: "application/json",
        "X-Api-Key": "XnPEruR43jMSavfhQjKi326cwXn4knm78P7bvkY0",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("API call made");

        setData(json);

        // let stopTimes = Array.from(json).map((trip) => {
        //   let tmp = trip as unknown as ITrip;

        //   fetch("https://api.opendata.metlink.org.nz/v1/gtfs/stop_times?trip_id=" + tmp.trip_id, {
        //     headers: {
        //       Accept: "application/json",
        //       "X-Api-Key": "XnPEruR43jMSavfhQjKi326cwXn4knm78P7bvkY0",
        //     },
        //   })
        //     .then((response) => {
        //       return response.json();
        //     })
        //     .then((json) => {
        //       console.log("API call made");
        //       tmp.stopTimes = Array.from(json).map((stopTime) => {
        //         return stopTime as unknown as IStopTime;
        //       });
        //       return tmp;
        //     });
        // })

        // setTrips(stopTimes);

        setLoading(false);
        return;
      });
  };

  useEffect(() => {
    fetchApi(route_id, start, end);
  }, []);

  return { loading, data, trips };
};
export default useTrips;
