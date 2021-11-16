import React from "react";
import "./App.css";
import dayjs from "dayjs";
import useTrips from "./hooks/useTrips";

function App() {
  const { loading, data } = useTrips(140, dayjs().subtract(1, "hour"), dayjs());

  if (loading) return <h1>loading...</h1>;

  return (
    <div className="App">
      <h1>finished loading</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
