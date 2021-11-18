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
            <Link key={route.id} href="/route">
              {route.route_long_name}
            </Link>
          );
        })
      )}
    </div>
  );
}

export default RoutesPage;
