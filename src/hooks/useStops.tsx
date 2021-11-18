import { useEffect, useState } from "react";
import { IStop } from "../interfaces/IStop";

const useStopTimes = (stop_id: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [stops, setStops] = useState<IStop[]>();

  const fetchApi = (trip_id: string) => {
    //this api also takes in stop_id as a param. trip_id || stop_id NOT both
    let url = "https://api.opendata.metlink.org.nz/v1/gtfs/stops?trip_id=" + trip_id;

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
        setStops(
          Array.from(json).map((stopTime) => {
            return stopTime as unknown as IStop;
          })
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApi(stop_id);
  }, []);

  return { loading, data, stops };
};
export default useStopTimes;
