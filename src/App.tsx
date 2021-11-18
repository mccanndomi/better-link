import React from "react";
import "./App.css";
import { Route } from "wouter";
import RoutesPage from "./pages/RoutesPage";
import RoutePage from "./pages/RoutePage";

function App() {
  return (
    <div className="App">
      <Route path="/routes" component={RoutesPage} />
      <Route path="/routes/:id">{(params) => <RoutePage id={params.id} />}</Route>
    </div>
  );
}

export default App;
