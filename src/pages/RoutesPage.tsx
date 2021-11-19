import React from "react";
import useRoutes from "../hooks/useRoutes";
import { Link } from "wouter";

function RoutesPage(): JSX.Element {
  const { loading, routes } = useRoutes();

  return (
    <div>
      <h1>Routes</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        routes?.map((route) => {
          return (
            <div key={route.route_id}>
              <Link to={`/routes/${route.route_id}`}>{route.route_long_name}</Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default RoutesPage;
