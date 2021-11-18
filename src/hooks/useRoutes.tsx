import { useEffect, useState } from "react";
import { IRoute } from "../interfaces/IRoute";

const useRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [routes, setRoutes] = useState<IRoute[]>();

  const fetchApi = () => {
    //this api also takes in stop_id as a param to filter by
    let url = "https://api.opendata.metlink.org.nz/v1/gtfs/routes";

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
        setRoutes(
          Array.from(json).map((route) => {
            return route as unknown as IRoute;
          })
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data, routes };
};
export default useRoutes;
