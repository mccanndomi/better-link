import React from "react";

function RoutePage({ id }: any): JSX.Element {
  return (
    <div>
      <h1>Route: {id}</h1>
      <h3>Below you can see the timetable for the selected route</h3>
    </div>
  );
}

export default RoutePage;
