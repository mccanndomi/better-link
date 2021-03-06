import { useEffect, useState } from "react";
import { IStopTime } from "../interfaces/IStopTime";

const useStopTimes = (trip_id: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [stopTimes, setStopTimes] = useState<IStopTime[]>();

  const fetchApi = (trip_id: string) => {
    let url = "https://api.opendata.metlink.org.nz/v1/gtfs/stop_times?trip_id=" + trip_id;

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
        setStopTimes(
          Array.from(json).map((stopTime) => {
            return stopTime as unknown as IStopTime;
          })
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApi(trip_id);
  }, []);

  return { loading, data, stopTimes };
};
export default useStopTimes;
